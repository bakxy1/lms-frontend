"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"

const data = [
  { day: "Mon", borrowed: 2000, returned: 3200 },
  { day: "Tue", borrowed: 3200, returned: 2800 },
  { day: "Wed", borrowed: 3600, returned: 2200 },
  { day: "Thu", borrowed: 3800, returned: 4200 },
  { day: "Fri", borrowed: 2400, returned: 4800 },
  { day: "Sat", borrowed: 2000, returned: 3800 },
  { day: "Sun", borrowed: 3600, returned: 2600 },
]

export function CheckoutChart() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Check-out statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
              <Line
                type="monotone"
                dataKey="borrowed"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                name="Borrowed"
              />
              <Line
                type="monotone"
                dataKey="returned"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                name="Returned"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
