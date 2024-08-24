import { BigCard } from "@/reusables/cards";
import { Data } from "@/types";
import { Tooltip, Line, LineChart, CartesianGrid, Legend } from "recharts";

interface BigWidgetLineChartProps {
  name: string;
  data: Data[];
}
const BigWidgetLineChart: React.FC<Readonly<BigWidgetLineChartProps>> = ({
  name,
  data,
}) => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ];
  return (
    <BigCard title={name}>
      <LineChart width={320} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={"v1"}
          fill={colors[0]}
          stroke={colors[0]}
        />
        <Line
          type="monotone"
          dataKey={"v2"}
          fill={colors[2]}
          stroke={colors[2]}
        />
        <Line
          type="monotone"
          dataKey={"v3"}
          fill={colors[5]}
          stroke={colors[5]}
        />
        <Legend />
      </LineChart>
    </BigCard>
  );
};

export { BigWidgetLineChart };
