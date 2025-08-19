import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Borrowed Books",
    value: "2405",
    change: "+23%",
    trend: "up",
  },
  {
    title: "Returned Books",
    value: "783",
    change: "-14%",
    trend: "down",
  },
  {
    title: "Overdue Books",
    value: "45",
    change: "+11%",
    trend: "up",
  },
  {
    title: "Missing Books",
    value: "12",
    change: "+11%",
    trend: "up",
  },
  {
    title: "Total Books",
    value: "32345",
    change: "+11%",
    trend: "up",
  },
  {
    title: "Visitors",
    value: "1504",
    change: "+3%",
    trend: "up",
  },
  {
    title: "New Members",
    value: "34",
    change: "-10%",
    trend: "down",
  },
  {
    title: "Pending Fees",
    value: "$765",
    change: "+56%",
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div
                  className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    stat.trend === "up" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                  }`}
                >
                  {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
