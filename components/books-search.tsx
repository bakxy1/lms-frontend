"use client"

import type React from "react"

import { useState } from "react"
import { Search, ChevronDown, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const searchFilters = ["ISBN", "Title", "Author", "Genre", "Publisher"]

export function BooksSearch() {
  const [selectedFilter, setSelectedFilter] = useState("Title")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    publisher: "",
    publishedYear: "",
    description: "",
    copies: "",
  })

  const generateBookID = () => Math.floor(Math.random() * 90000) + 10000

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newBook = {
      ...formData,
      bookID: generateBookID(),
      dateAdded: new Date().toLocaleDateString(),
      status: "Available",
    }

    console.log("New book created:", newBook)
    // Here you would typically send to backend

    // Reset form and close dialog
    setFormData({
      title: "",
      author: "",
      isbn: "",
      genre: "",
      publisher: "",
      publishedYear: "",
      description: "",
      copies: "",
    })
    setIsDialogOpen(false)
  }

  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Books</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your library's book collection</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
              <Plus className="h-4 w-4" />
              Add Book
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Book</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter book title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Enter author name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="isbn">ISBN</Label>
                  <Input
                    id="isbn"
                    value={formData.isbn}
                    onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
                    placeholder="Enter ISBN"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="genre">Genre</Label>
                  <Input
                    id="genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    placeholder="Enter genre"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="publisher">Publisher</Label>
                  <Input
                    id="publisher"
                    value={formData.publisher}
                    onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                    placeholder="Enter publisher"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publishedYear">Published Year</Label>
                  <Input
                    id="publishedYear"
                    type="number"
                    value={formData.publishedYear}
                    onChange={(e) => setFormData({ ...formData, publishedYear: e.target.value })}
                    placeholder="Enter year"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="copies">Number of Copies</Label>
                <Input
                  id="copies"
                  type="number"
                  min="1"
                  value={formData.copies}
                  onChange={(e) => setFormData({ ...formData, copies: e.target.value })}
                  placeholder="Enter number of copies"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter book description"
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white flex-1">
                  Add Book
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-white border-gray-200 w-full lg:w-auto">
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

        {/* Main Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search Ex. ISBN, Title, Author, Genre, etc" className="pl-10 bg-white border-gray-200" />
        </div>
      </div>
    </div>
  )
}
