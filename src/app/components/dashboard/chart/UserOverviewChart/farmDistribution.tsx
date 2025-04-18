"use client";

import { LabelList, Pie, PieChart } from "recharts";
import { CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    browser: "Organic farm",
    visitors: 275,
    fill: "#51F4A6",
    bg: "bg-[#51F4A6]",
  },
  {
    browser: "Wheat Land farm",
    visitors: 200,
    fill: "#31DBFF",
    bg: "bg-[#31DBFF]",
  },
  {
    browser: "Corn Master farm",
    visitors: 187,
    fill: "#4379FF",
    bg: "bg-[#4379FF]",
  },
];

const chartConfig = {
  //   visitors: {
  //     label: "Visitors",
  //   },
  "Organic farm": {
    label: "275",
    color: "hsl(var(--chart-1))",
  },
  "Wheat Land farm": {
    label: "200",
    color: "hsl(var(--chart-2))",
  },
  "Corn Master farm": {
    label: "187",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function FarmDistribution() {
  return (
    <div className="grid grid-cols-2 gap-x-10 items-center">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent className=" pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" nameKey="browser">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <div className="flex flex-col gap-2 justify-between">
        {chartData?.map((item, index) => (
          <div key={index} className="flex items-end gap-x-4 justify-between">
            <div className="flex items-center gap-x-2">
              <div className={`w-3 h-3 ${item.bg} rounded-full`}></div>
              <p className="text-[#7C7C7C] text-sm">{item.browser}</p>
            </div>
            <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold">
              {item?.visitors}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
