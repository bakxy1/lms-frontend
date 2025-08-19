"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const searchFilters = ["ISBN", "Title", "Author", "Member"]

export function CheckoutSearch() {
  const [selectedFilter, setSelectedFilter] = useState("Title")

  return (
    <div className="mb-6">
      {/* Search Filter Dropdown */}
      <div className="mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-white border-gray-200">
              <Search className="h-4 w-4" />
              {selectedFilter}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {searchFilters.map((filter) => (
              <DropdownMenuItem key={filter} onClick={() => setSelectedFilter(filter)}>
                {filter}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search Ex. ISBN, Title, Author, Member, etc" className="pl-10 bg-white border-gray-200" />
      </div>
    </div>
  )
}
