"use client";

import {
  Card,
  Separator,
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });

    if (data) {
      redirect("/login");
    }

    if (error) {
      toast.error(error.message || "Registration failed");
    }
  };

  const handleSocialSignup = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google", 
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      toast.error(error.message || "Social signup failed");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-[#F5F3FF] px-4 font-inter">

  <Card className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xl">

    {/* Title */}
    <h1 className="text-3xl font-bold text-[#1E1B4B] text-center mb-6">
      Sign Up
    </h1>

    {/* Form */}
    <Form onSubmit={onSubmit} className="flex flex-col gap-4">

      {/* Name */}
      <TextField isRequired name="name" type="text">
        <Label className="text-[#374151]">Name</Label>
        <Input className="bg-[#F5F3FF] text-[#374151] border border-[#E5E7EB]" placeholder="Your name" />
        <FieldError />
      </TextField>

      {/* Email */}
      <TextField isRequired name="email" type="email">
        <Label className="text-[#374151]">Email</Label>
        <Input className="bg-[#F5F3FF] text-[#374151] border border-[#E5E7EB]" placeholder="you@example.com" />
        <FieldError />
      </TextField>

      {/* Photo URL */}
      <TextField name="image" type="url">
        <Label className="text-[#374151]">Photo URL</Label>
        <Input className="bg-[#F5F3FF] text-[#374151] border border-[#E5E7EB]" placeholder="https://..." />
        <FieldError />
      </TextField>

      {/* Password */}
      <TextField
        isRequired
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) return "Minimum 6 characters required";
          if (!/[A-Z]/.test(value)) return "Must contain 1 uppercase letter";
          if (!/[a-z]/.test(value)) return "Must contain 1 lowercase letter";
          return null;
        }}
      >
        <Label className="text-[#374151]">Password</Label>
        <Input className="bg-[#F5F3FF] text-[#374151] border border-[#E5E7EB]" placeholder="Create password" />
        <Description className="text-[#6B7280] text-xs">
          At least 6 characters, 1 uppercase, 1 lowercase
        </Description>
        <FieldError />
      </TextField>

      {/* Register Button */}
      <Button
        type="submit"
        className="w-full bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-medium rounded-xl py-2"
      >
        Register
      </Button>
    </Form>

    {/* Divider */}
    {/* Divider */}
<div className="flex items-center gap-3 my-6">
  <div className="flex-1 h-px bg-[#E5E7EB]" />
  <span className="text-[#6B7280] text-xs whitespace-nowrap">
    Or continue with
  </span>
  <div className="flex-1 h-px bg-[#E5E7EB]" />
</div>

    {/* Social Signup */}
    <Button
      onClick={handleSocialSignup}
      className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#EDE9FE] rounded-xl"
    >
      <FcGoogle />
      Continue with Google
    </Button>

    {/* Login Link */}
    <p className="text-center text-[#6B7280] text-sm mt-6">
      Already have an account?{" "}
      <a href="/login" className="text-[#7C3AED] hover:underline">
        Login
      </a>
    </p>

  </Card>
</div>
  );
};

export default SignupPage;