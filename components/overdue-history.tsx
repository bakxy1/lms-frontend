import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const overdueBooks = [
  {
    memberId: "#48964",
    title: "Magnolia Palace",
    isbn: "3234",
    dueDate: "5",
    fine: "$10",
  },
  {
    memberId: "#48964",
    title: "Don Quixote",
    isbn: "3234",
    dueDate: "5",
    fine: "$10",
  },
  {
    memberId: "#48964",
    title: "Alice's Adventures in ...",
    isbn: "3234",
    dueDate: "5",
    fine: "$10",
  },
  {
    memberId: "#48964",
    title: "Pride and Prejudice",
    isbn: "3234",
    dueDate: "5",
    fine: "$10",
  },
  {
    memberId: "#48964",
    title: "Treasure Island",
    isbn: "3234",
    dueDate: "5",
    fine: "$10",
  },
]

export function OverdueHistory() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Overdue's History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-medium text-gray-500">Member ID</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Title</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">ISBN</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Due Date</TableHead>
              <TableHead className="text-xs font-medium text-gray-500">Fine</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {overdueBooks.map((book, index) => (
              <TableRow key={index}>
                <TableCell className="text-sm text-gray-600">{book.memberId}</TableCell>
                <TableCell className="text-sm text-gray-900">{book.title}</TableCell>
                <TableCell className="text-sm text-gray-600">{book.isbn}</TableCell>
                <TableCell className="text-sm text-gray-600">{book.dueDate}</TableCell>
                <TableCell className="text-sm text-gray-900 font-medium">{book.fine}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
