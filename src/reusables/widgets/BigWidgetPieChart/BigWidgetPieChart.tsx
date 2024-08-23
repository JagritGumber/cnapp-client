import { BigCard } from "@/reusables/cards";
import { Cell, Pie, PieChart, Tooltip, Legend, CartesianGrid } from "recharts";

const BigWidgetPieChart: React.FC = () => {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];

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
    <BigCard title="CSPM">
      <PieChart width={400} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          label
        >
          {data01.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          height={120}
          layout="vertical"
          align="right"
          iconType="circle"
        />
      </PieChart>
    </BigCard>
  );
};

export { BigWidgetPieChart };
