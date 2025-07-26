import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import { environment } from "@/env/env.local";

export async function POST(request: NextRequest) {
  try {
    // Get the access token from cookies
    const accessToken = request.cookies.get("access")?.value;

    console.log("🔐 Access token found:", !!accessToken);

    if (!accessToken) {
      return NextResponse.json(
        { message: "Authentication required. Please login again." },
        { status: 401 }
      );
    }

    const formData = await request.formData();

    // Extract form data
    const farmData = {
      name: formData.get("name") as string,
      street: formData.get("street") as string,
      status: formData.get("status") as string,
      country: formData.get("country") as string,
      state: formData.get("state") as string,
      farm_whatsapp_number: formData.get("farm_whatsapp_number") as string,
      farm_phone_number: formData.get("farm_phone_number") as string,
      farm_email: formData.get("farm_email") as string,
      land_size: formData.get("land_size") as string,
      land_size_type: formData.get("land_size_type") as string,
      description: formData.get("description") as string,
      land_ownership: formData.get("land_ownership") as string,
      cac_reg_no: formData.get("cac_reg_no") as string,
      started_date: formData.get("started_date") as string,
      city: formData.get("city") as string,
    };

    console.log("📋 Farm data:", farmData);

    // Handle file uploads
    const cacDocument = formData.get("cac_reg_doc") as File;
    const images = formData.getAll("images") as File[];

    console.log("📁 Files:", {
      cacDocument: !!cacDocument,
      imagesCount: images.length,
    });

    // Create FormData for the external API
    const externalFormData = new FormData();

    // Add farm data
    Object.entries(farmData).forEach(([key, value]) => {
      if (value) {
        externalFormData.append(key, value);
      }
    });

    // Add files
    if (cacDocument) {
      externalFormData.append("cac_reg_doc", cacDocument);
    }

    if (images && images.length > 0) {
      images.forEach((image, index) => {
        if (image) {
          externalFormData.append(`images[${index}]`, image);
        }
      });
    }

    const apiUrl = environment.baseUrl + environment?.addFarm;
    console.log("🌐 Making API call to:", apiUrl);

    const response = await axios.post(apiUrl, externalFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    console.log("✅ API response:", response.status, response.data);

    return NextResponse.json(
      { message: "Farm added successfully", data: response.data },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error adding farm:", error);

    let errorMessage = "Failed to add farm. Please try again.";
    let statusCode = 500;
    let errorDetails = null;

    if (error instanceof AxiosError) {
      statusCode = error.response?.status || statusCode;

      // Get detailed error information from the backend
      if (error.response?.data) {
        errorDetails = error.response.data;

        // Try to extract meaningful error message
        if (typeof error.response.data === "object") {
          errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            error.response.data.detail ||
            errorMessage;
        } else if (typeof error.response.data === "string") {
          errorMessage = error.response.data;
        }
      } else {
        errorMessage = error.message || errorMessage;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        message: errorMessage,
        status: statusCode,
        details: errorDetails,
        timestamp: new Date().toISOString(),
      },
      { status: statusCode }
    );
  }
}
