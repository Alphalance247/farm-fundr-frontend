"use client";
import Input from "../common/input";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const UserDetails = {
  name: "",
  email: "",
};

const Form = () => {
  const [form, setForm] = useState({
    name: UserDetails.name || "",
    email: UserDetails.email || "",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: string[] = [];
    if (!form.name.trim()) errors.push("Name is required");
    if (!form.email.trim()) errors.push("Email is required");
    if (!form.message.trim()) errors.push("Description is required");

    if (errors.length > 0) {
      errors.forEach((err) => toast.error(err));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`farms/contact-us`, form);

      if (res.status === 200) {
        toast.success("Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      const errorMessage =
        err instanceof AxiosError
          ? err.response?.data?.statusmessage ||
            "Something went wrong, please try again."
          : "Unexpected error occurred";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          disabled={loading}
          value={form.name}
          placeholder="Enter your full name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mb-10"
        />

        <Input
          type="email"
          name="email"
          disabled={loading}
          value={form.email}
          placeholder="Enter your email address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mb-10"
        />

        <textarea
          className="text-lg font-poppinsRegular w-full p-4 text-[#7C7C7C] bg-[#EEFEF6] rounded-2xl"
          id="description"
          name="description"
          rows={5}
          required
          placeholder="Type your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <Button
          type="submit"
          size="medium"
          variant="tertiary"
          disabled={loading}
          className="flex items-center gap-x-4 justify-center w-[535px] mx-auto mt-12"
        >
          {loading ? "Submitting..." : "Submit"}
          {!loading && (
            <span>
              <GoArrowRight size={24} className="text-black" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default Form;
