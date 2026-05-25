"use client";
import { Card } from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import {  useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { Suspense } from "react";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl= searchParams.get("callbackUrl") || "/";
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const {  error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    
    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }
    router.push(callbackUrl);
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl,
    });
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-[#F5F3FF] px-4 py-16 font-inter">
      <Card className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#1E1B4B] text-center mb-2">
          Login
        </h1>
        <p className="text-center text-[#6B7280] text-sm mb-6">
          Welcome back to DocAppoint
        </p>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                return "Please enter a valid email address";
              return null;
            }}
          >
            <Label className="text-[#374151]">Email</Label>
            <Input
              className="bg-[#F5F3FF] text-[#374151] border border-[#E5E7EB]"
              placeholder="john@example.com"
            />
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
            <Input
              className="bg-[#F5F3FF] text-[#374151] border border-[#E5E7EB]"
              placeholder="Enter your password"
            />
            <Description className="text-[#6B7280] text-xs">
              At least 6 characters, 1 uppercase, 1 lowercase
            </Description>
            <FieldError />
          </TextField>

          {/* Forgot Password — no implementation as per instructions */}
          <div className="text-right -mt-2">
            <span className="text-[#7C3AED] text-sm cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-[#7C3AED] hover:bg-[#5B21B6] text-white font-medium rounded-xl py-2"
          >
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <span className="text-[#6B7280] text-xs whitespace-nowrap">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleSignin}
          className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-[#374151] hover:bg-[#EDE9FE] rounded-xl py-2"
        >
          <FcGoogle />
          Continue with Google
        </Button>

        {/* Register Link */}
        <p className="text-center text-[#6B7280] text-sm mt-6">
          Dont have an account?{" "}
          <a href="/signup" className="text-[#7C3AED] hover:underline font-medium">
            Register
          </a>
        </p>

      </Card>
    </div>
  );
};

const LoginPage = () => {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;