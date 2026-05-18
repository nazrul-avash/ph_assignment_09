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
      alert(error.message || "Registration failed");
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
      alert("Social login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-black px-4 font-inter">

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Sign Up
        </h1>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <TextField
            isRequired
            name="name"
            type="text"
          >
            <Label className="text-white/80">Name</Label>
            <Input className="bg-white/10 text-white" placeholder="Your name" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
          >
            <Label className="text-white/80">Email</Label>
            <Input className="bg-white/10 text-white" placeholder="you@example.com" />
            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField
            name="image"
            type="url"
          >
            <Label className="text-white/80">Photo URL</Label>
            <Input className="bg-white/10 text-white" placeholder="https://..." />
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
            <Label className="text-white/80">Password</Label>
            <Input className="bg-white/10 text-white" placeholder="Create password" />

            <Description className="text-white/50 text-xs">
              At least 6 characters, 1 uppercase, 1 lowercase
            </Description>

            <FieldError />
          </TextField>

          {/* Register Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-medium rounded-xl py-2"
          >
            Register
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="bg-white/20" />
          <span className="text-white/50 text-xs whitespace-nowrap">
            Or continue with
          </span>
          <Separator className="bg-white/20" />
        </div>

        {/* Social Signup (ONLY ONE METHOD as required) */}
        <Button
          onClick={handleSocialSignup}
          className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl"
        >
          <FcGoogle />
          Continue with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-white/60 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-300 hover:underline">
            Login
          </a>
        </p>

      </Card>
    </div>
  );
};

export default SignupPage;