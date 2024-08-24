import { BigCard } from "@/reusables/cards";
import { Data } from "@/types";
import { Cell, Tooltip, Bar, BarChart, CartesianGrid } from "recharts";

interface BigWidgetBarChartProps {
  name: string;
  data: Data[];
}

const BigWidgetBarChart: React.FC<Readonly<BigWidgetBarChartProps>> = ({
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
      <BarChart width={320} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey={"v1"}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
        <Bar dataKey={"v2"}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
        <Bar dataKey={"v3"}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </BigCard>
  );
};

export { BigWidgetBarChart };
