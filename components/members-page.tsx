"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MembersTable } from "@/components/members-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Search, UserPlus } from "lucide-react"

export function MembersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  })

  const generateMemberID = () => Math.floor(Math.random() * 90000) + 10000
  const generateRegisterID = () => Math.floor(Math.random() * 9000) + 1000

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newMember = {
      ...formData,
      memberID: generateMemberID(),
      registerID: generateRegisterID(),
      joinDate: new Date().toLocaleDateString(),
    }

    console.log("New member created:", newMember)
    // Here you would typically send to backend

    // Reset form and close dialog
    setFormData({ fullName: "", email: "", phone: "", address: "" })
    setIsDialogOpen(false)
  }

  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Members</h1>
          <p className="text-sm text-gray-600">To create a member and view the member report</p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search Member" className="pl-10 bg-white border-gray-200" />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 w-full sm:w-auto">
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Members</span>
                <span className="sm:hidden">Add</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Member</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter address"
                    required
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white flex-1">
                    Add Member
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Members Table */}
        <MembersTable />
      </div>
    </DashboardLayout>
  )
}
