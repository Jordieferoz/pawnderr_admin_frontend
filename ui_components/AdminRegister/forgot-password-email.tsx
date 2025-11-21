"use client"

import type React from "react"

import { useState } from "react"
import PawnderrLogo from "./pawnderr-logo"

interface ForgotPasswordEmailProps {
  onNext: () => void
  onBack: () => void
}

export default function ForgotPasswordEmail({ onNext, onBack }: ForgotPasswordEmailProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reset email sent to:", email)
    onNext()
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="flex justify-center">
        <PawnderrLogo />
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Forgot password?</h1>
        <p className="text-sm text-gray-600">Enter your email to reset your password</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
        >
          Send Reset Link
        </button>
      </form>

      <button onClick={onBack} className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium py-2">
        Back to Sign in
      </button>
    </div>
  )
}
