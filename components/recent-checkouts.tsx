import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const recentCheckouts = [
  {
    id: "#48964",
    isbn: "3234",
    title: "Magnolia Palace",
    author: "Fiona Davis",
    member: "Phillip Workman",
    issuedDate: "5/2/2023",
    returnDate: "15/2/2023",
  },
  {
    id: "#48964",
    isbn: "3234",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    member: "Kianna Donin",
    issuedDate: "5/2/2023",
    returnDate: "15/2/2023",
  },
  {
    id: "#48964",
    isbn: "3234",
    title: "Alice's Adventures in Wonder...",
    author: "Lewis Carroll",
    member: "Cristofer Bator",
    issuedDate: "3/2/2023",
    returnDate: "13/2/2023",
  },
  {
    id: "#48964",
    isbn: "3234",
    title: "Pride and Prejudice",
    author: "Hanna Gouse",
    member: "Livia Kenter",
    issuedDate: "3/2/2023",
    returnDate: "13/2/2023",
  },
  {
    id: "#48964",
    isbn: "3234",
    title: "Treasure Island",
    author: "Phillip Siphron",
    member: "Tatiana Arcand",
    issuedDate: "2/2/2023",
    returnDate: "12/2/2023",
  },
  {
    id: "#48964",
    isbn: "3234",
    title: "Treasure Island",
    author: "Phillip Siphron",
    member: "Tatiana Arcand",
    issuedDate: "2/2/2023",
    returnDate: "12/2/2023",
  },
]

const topBooks = [
  { title: "Magnolia Palace", author: "Cristofer Bator", status: "Available" },
  { title: "Don Quixote", author: "Aspen Siphron", status: "Available" },
  { title: "Pride and Prejudice", author: "Kianna Gould", status: "Available" },
]

export function RecentCheckouts() {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Check-out's</CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            View All
          </Button>
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
            Top Books
          </Badge>
          <Badge variant="outline" className="text-gray-600">
            New arrivals
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6">
          {/* Recent Checkouts Table */}
          <div className="flex-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-medium text-gray-500">ID</TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">ISBN</TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">Title</TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">Author</TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">Member</TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">Issued Date</TableHead>
                  <TableHead className="text-xs font-medium text-gray-500">Return Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentCheckouts.map((checkout, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-sm text-gray-600">{checkout.id}</TableCell>
                    <TableCell className="text-sm text-gray-600">{checkout.isbn}</TableCell>
                    <TableCell className="text-sm text-gray-900">{checkout.title}</TableCell>
                    <TableCell className="text-sm text-gray-600">{checkout.author}</TableCell>
                    <TableCell className="text-sm text-gray-600">{checkout.member}</TableCell>
                    <TableCell className="text-sm text-gray-600">{checkout.issuedDate}</TableCell>
                    <TableCell className="text-sm text-gray-600">{checkout.returnDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Top Books Sidebar */}
          <div className="w-64 space-y-3">
            {topBooks.map((book, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 text-sm">{book.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{book.author}</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 text-xs">
                  {book.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
