// src/app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { environment } from "@/env/env.local";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const { data } = await axios.post(
      environment.baseUrl + environment?.loginUrl,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    const { access, username, fullname, user_type } = data;

    // Set token in HttpOnly cookie
    const response = NextResponse.json({
      message: "Login successful",
      username,
      fullname,
      user_type,
    });

    response.cookies.set("access", access, {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 3, // 3 days
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Invalid password or username" },
      { status: 401 }
    );
  }
}
