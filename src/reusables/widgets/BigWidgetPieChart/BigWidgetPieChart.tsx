import { BigCard } from "@/reusables/cards";
import { Data } from "@/types";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

interface BigWidgetPieChartProps {
  name: string;
  data: Data[];
}

const BigWidgetPieChart: React.FC<Readonly<BigWidgetPieChartProps>> = ({
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
      <PieChart width={350} height={220}>
        <Pie
          data={data}
          dataKey="v1"
          nameKey="label"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Pie
          data={data}
          dataKey="v2"
          nameKey="label"
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={50}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Pie
          data={data}
          dataKey="v3"
          nameKey="label"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={20}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </BigCard>
  );
};

export { BigWidgetPieChart };
