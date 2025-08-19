import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const members = [
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Alfredo Bergson",
    email: "Alfredobergson@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Roger Schleifer",
    email: "Rogerschleifer@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Angel Calzoni",
    email: "Angelcalzoni@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Roger Schleifer",
    email: "Rogerschleifer@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Angel Calzoni",
    email: "Angelcalzoni@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Roger Schleifer",
    email: "Rogerschleifer@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Angel Calzoni",
    email: "Angelcalzoni@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Roger Schleifer",
    email: "Rogerschleifer@example.com",
  },
  {
    memberId: "#48964",
    registerId: "3234",
    member: "Angel Calzoni",
    email: "Angelcalzoni@example.com",
  },
]

export function MembersTable() {
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
                  Register ID
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Member
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Email
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500 py-4 px-4 lg:px-6 whitespace-nowrap">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member, index) => (
                <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {member.memberId}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {member.registerId}
                  </TableCell>
                  <TableCell className="text-sm text-gray-900 font-medium py-4 px-4 lg:px-6 whitespace-nowrap">
                    {member.member}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600 py-4 px-4 lg:px-6 whitespace-nowrap">
                    {member.email}
                  </TableCell>
                  <TableCell className="py-4 px-4 lg:px-6 whitespace-nowrap">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-300 hover:bg-red-50 bg-transparent"
                      >
                        Cancel
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
