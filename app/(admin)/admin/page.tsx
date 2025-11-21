"use client";

import { useState } from "react";

import ForgotPasswordEmail from "@/ui_components/AdminRegister/forgot-password-email";
import ForgotPasswordReset from "@/ui_components/AdminRegister/forgot-password-reset";
import ResetSuccess from "@/ui_components/AdminRegister/reset-success";
import WelcomeBack from "@/ui_components/AdminRegister/welcome-back";

type Step = "login" | "forgot-email" | "forgot-reset" | "success";

export default function AdminAuthPage() {
  const [step, setStep] = useState<Step>("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-yellow-50 to-blue-100 p-4">
      {step === "login" && <WelcomeBack onForgotPassword={() => setStep("forgot-email")} />}
      {step === "forgot-email" && (
        <ForgotPasswordEmail onNext={() => setStep("forgot-reset")} onBack={() => setStep("login")} />
      )}
      {step === "forgot-reset" && (
        <ForgotPasswordReset onSuccess={() => setStep("success")} onBack={() => setStep("login")} />
      )}
      {step === "success" && <ResetSuccess onLogin={() => setStep("login")} />}
    </div>
  );
}
