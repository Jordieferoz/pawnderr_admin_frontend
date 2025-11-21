"use client"

import { CheckCircle } from "lucide-react"
import PawnderrLogo from "./pawnderr-logo"

interface ResetSuccessProps {
  onLogin: () => void
}

export default function ResetSuccess({ onLogin }: ResetSuccessProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="flex justify-center">
        <PawnderrLogo />
      </div>

      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle size={40} className="text-green-600" />
        </div>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Password Reset</h1>
        <p className="text-sm text-gray-600">Your password has been successfully reset</p>
      </div>

      <button
        onClick={onLogin}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
      >
        Sign in
      </button>
    </div>
  )
}
