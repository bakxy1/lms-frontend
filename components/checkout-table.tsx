import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const checkoutData = [
  {
    memberId: "#48964",
    member: "Alena Workman",
    title: "Magnolia Palace",
    author: "Alfredo Bergson",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Available",
  },
  {
    memberId: "#48964",
    member: "Jaylon Vaccaro",
    title: "Don Quixote",
    author: "Roger Schleifer",
    borrowedDate: "13/2/2023",
    returnedDate: "13/2/2023",
    status: "Borrowed",
  },
  {
    memberId: "#48964",
    member: "Cheyenne Korsgaard",
    title: "Alice's Adventures in Wonderland",
    author: "Angel Calzoni",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Renewed",
  },
  {
    memberId: "#48964",
    member: "Jaydon Calzoni",
    title: "Pride and Prejudice",
    author: "Roger Schleifer",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Reserved",
  },
  {
    memberId: "#48964",
    member: "Tiana Rhiel Madsen",
    title: "Treasure Island",
    author: "Angel Calzoni",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Renewed",
  },
  {
    memberId: "#48964",
    member: "Miracle Westervelt",
    title: "Treasure Island",
    author: "Roger Schleifer",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Available",
  },
  {
    memberId: "#48964",
    member: "Hanna Levin",
    title: "Treasure Island",
    author: "Angel Calzoni",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Available",
  },
  {
    memberId: "#48964",
    member: "Gustavo Philips",
    title: "Treasure Island",
    author: "Roger Schleifer",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Available",
  },
  {
    memberId: "#48964",
    member: "Angel Calzoni",
    title: "Treasure Island",
    author: "Angel Calzoni",
    borrowedDate: "12/2/2023",
    returnedDate: "12/2/2023",
    status: "Available",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "Available":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Available</Badge>
    case "Borrowed":
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200">Borrowed</Badge>
    case "Renewed":
      return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 border-gray-200">Renewed</Badge>
    case "Reserved":
      return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 border-gray-200">Reserved</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 border-gray-200">{status}</Badge>
  }
}

function getActionButtons(status: string) {
  switch (status) {
    case "Borrowed":
      return (
        <div className="flex gap-2">
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
            Return
          </Button>
          <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent">
            Renew
          </Button>
          <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white">
            Reserve
          </Button>
        </div>
      )
    default:
      return (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent">
            Return
          </Button>
          <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent">
            Renew
          </Button>
          <Button size="sm" variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent">
            Reserve
          </Button>
        </div>
      )
  }
}

export function CheckoutTable() {
  return (
    <Card className="bg-white">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Member ID
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Member
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Title
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Author
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Borrowed Date
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Returned Date
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Status
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checkoutData.map((item, index) => (
                <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {item.memberId}
                  </TableCell>
                  <TableCell className="text-sm text-gray-900 font-medium py-4 px-4 lg:px-6 whitespace-nowrap">
                    {item.member}
                  </TableCell>
                  <TableCell className="text-sm text-gray-900 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {item.title}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {item.author}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {item.borrowedDate}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {item.returnedDate}
                  </TableCell>
                  <TableCell className="py-4 px-4 lg:px-6 whitespace-nowrap">{getStatusBadge(item.status)}</TableCell>
                  <TableCell className="py-4 px-4 lg:px-6 whitespace-nowrap">{getActionButtons(item.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
