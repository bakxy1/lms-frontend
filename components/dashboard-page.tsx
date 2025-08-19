import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { CheckoutChart } from "@/components/checkout-chart"
import { OverdueHistory } from "@/components/overdue-history"
import { RecentCheckouts } from "@/components/recent-checkouts"

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CheckoutChart />
          <OverdueHistory />
        </div>

        <RecentCheckouts />
      </div>
    </DashboardLayout>
  )
}
