import { DashboardLayout } from "@/components/dashboard-layout"
import { BooksSearch } from "@/components/books-search"
import { BooksTable } from "@/components/books-table"

export function BooksPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6">
        <BooksSearch />
        <BooksTable />
      </div>
    </DashboardLayout>
  )
}
