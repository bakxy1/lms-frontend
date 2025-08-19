"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2 } from "lucide-react"

const booksData = [
  {
    id: "B001",
    isbn: "978-0-7432-7356-5",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publisher: "J.B. Lippincott & Co.",
    year: "1960",
    copies: 5,
    available: 3,
    status: "Available",
  },
  {
    id: "B002",
    isbn: "978-0-452-28423-4",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    publisher: "Secker & Warburg",
    year: "1949",
    copies: 8,
    available: 0,
    status: "Out of Stock",
  },
  {
    id: "B003",
    isbn: "978-0-7432-4722-4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    publisher: "Charles Scribner's Sons",
    year: "1925",
    copies: 6,
    available: 2,
    status: "Available",
  },
  {
    id: "B004",
    isbn: "978-0-06-112008-4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publisher: "T. Egerton",
    year: "1813",
    copies: 4,
    available: 1,
    status: "Low Stock",
  },
  {
    id: "B005",
    isbn: "978-0-14-143951-8",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age Fiction",
    publisher: "Little, Brown and Company",
    year: "1951",
    copies: 7,
    available: 4,
    status: "Available",
  },
]

export function BooksTable() {
  const getStatusBadge = (status: string, available: number) => {
    if (status === "Available" && available > 2) {
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Available</Badge>
    } else if (status === "Available" && available <= 2) {
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Low Stock</Badge>
    } else if (status === "Out of Stock") {
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Out of Stock</Badge>
    }
    return <Badge variant="secondary">{status}</Badge>
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-medium text-gray-700">Book ID</TableHead>
              <TableHead className="font-medium text-gray-700">ISBN</TableHead>
              <TableHead className="font-medium text-gray-700">Title</TableHead>
              <TableHead className="font-medium text-gray-700">Author</TableHead>
              <TableHead className="font-medium text-gray-700">Genre</TableHead>
              <TableHead className="font-medium text-gray-700">Publisher</TableHead>
              <TableHead className="font-medium text-gray-700">Year</TableHead>
              <TableHead className="font-medium text-gray-700">Copies</TableHead>
              <TableHead className="font-medium text-gray-700">Available</TableHead>
              <TableHead className="font-medium text-gray-700">Status</TableHead>
              <TableHead className="font-medium text-gray-700">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {booksData.map((book) => (
              <TableRow key={book.id} className="hover:bg-gray-50">
                <TableCell className="font-medium text-gray-900">{book.id}</TableCell>
                <TableCell className="text-gray-600">{book.isbn}</TableCell>
                <TableCell className="font-medium text-gray-900">{book.title}</TableCell>
                <TableCell className="text-gray-600">{book.author}</TableCell>
                <TableCell className="text-gray-600">{book.genre}</TableCell>
                <TableCell className="text-gray-600">{book.publisher}</TableCell>
                <TableCell className="text-gray-600">{book.year}</TableCell>
                <TableCell className="text-gray-600">{book.copies}</TableCell>
                <TableCell className="text-gray-600">{book.available}</TableCell>
                <TableCell>{getStatusBadge(book.status, book.available)}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-2 text-gray-600 hover:text-gray-900 bg-transparent"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-2 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
