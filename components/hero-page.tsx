import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, BarChart3, Shield, Clock, Search } from "lucide-react"
import Link from "next/link"

export function HeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-slate-800">Library App</span>
          </div>
          <Link href="/login">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Modern Library Management
            <span className="text-green-600 block">Made Simple</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Streamline your library operations with our comprehensive management system. Track books, manage members,
            and gain insights with powerful analytics.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Everything You Need</h2>
          <p className="text-lg text-slate-600">Powerful features designed for modern libraries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Book Management</h3>
              <p className="text-slate-600">
                Easily add, edit, and organize your entire book collection with advanced search and filtering.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Member Management</h3>
              <p className="text-slate-600">
                Manage library members, track their borrowing history, and handle registrations effortlessly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Analytics Dashboard</h3>
              <p className="text-slate-600">
                Get insights into borrowing patterns, popular books, and library performance metrics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Check-out System</h3>
              <p className="text-slate-600">
                Streamlined book borrowing and returning process with automated due date tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Secure Access</h3>
              <p className="text-slate-600">
                Role-based access control ensures data security and proper user permissions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Advanced Search</h3>
              <p className="text-slate-600">
                Powerful search capabilities across books, members, and transactions with smart filters.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Library?</h2>
          <p className="text-xl mb-8 text-green-100">Join thousands of libraries already using our management system</p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3">
              Start Managing Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-green-400" />
            <span className="text-lg font-semibold">Library App</span>
          </div>
          <p className="text-sm">© 2024 Library Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
