// "use client"

// import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
// import { Card } from "@/components/ui/card"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


// export default function PopulationChart({ data }) {
//   return (
//     <Card className="w-full aspect-[16/9]">
//       <ChartContainer
//         config={{
//           population: {
//             label: "Population",
//             color: "hsl(var(--chart-1))",
//           },
//         }}
//       >
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis 
//               dataKey="year"
//               tickFormatter={(value) => value.toString()}
//             />
//             <YAxis 
//               tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value)}
//             />
//             <ChartTooltip content={<ChartTooltipContent />} />
//             <Line 
//               type="monotone" 
//               dataKey="value"
//               name="population"
//               stroke="var(--color-population)"
//               strokeWidth={2}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </ChartContainer>
//     </Card>
//   )
// }

