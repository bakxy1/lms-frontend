"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-10 w-10 text-green-600" />
            <span className="text-2xl font-bold text-slate-800">Library App</span>
          </div>
          <p className="text-slate-600">Welcome to your library management system</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-slate-800">Get Started</CardTitle>
            <CardDescription className="text-center text-slate-600">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signin" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Register
                </TabsTrigger>
              </TabsList>

              {/* Sign In Form */}
              <TabsContent value="signin" className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-username" className="text-slate-700 font-medium">
                      Username
                    </Label>
                    <Input
                      id="signin-username"
                      type="text"
                      placeholder="Enter your username"
                      className="h-11 border-slate-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="signin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-11 border-slate-200 focus:border-green-500 focus:ring-green-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="rounded border-slate-300 text-green-600 focus:ring-green-500"
                      />
                      <Label htmlFor="remember" className="text-sm text-slate-600">
                        Remember me
                      </Label>
                    </div>
                    <Link href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-medium">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name" className="text-slate-700 font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Enter your full name"
                      className="h-11 border-slate-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-slate-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="Enter your email address"
                      className="h-11 border-slate-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-username" className="text-slate-700 font-medium">
                      Username
                    </Label>
                    <Input
                      id="register-username"
                      type="text"
                      placeholder="Choose a username"
                      className="h-11 border-slate-200 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        type={showRegisterPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="h-11 border-slate-200 focus:border-green-500 focus:ring-green-500 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showRegisterPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="rounded border-slate-300 text-green-600 focus:ring-green-500"
                    />
                    <Label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the{" "}
                      <Link href="#" className="text-green-600 hover:text-green-700 font-medium">
                        Terms of Service
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-medium">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Need help?{" "}
                <Link href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Contact Support
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Hero */}
        <div className="text-center mt-6">
          <Link href="/hero" className="text-sm text-slate-600 hover:text-slate-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
