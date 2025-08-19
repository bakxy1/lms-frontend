import { DashboardLayout } from "@/components/dashboard-layout"
import { CheckoutSearch } from "@/components/checkout-search"
import { CheckoutTable } from "@/components/checkout-table"

export function CheckoutPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6">
        <CheckoutSearch />
        <CheckoutTable />
      </div>
    </DashboardLayout>
  )
}
