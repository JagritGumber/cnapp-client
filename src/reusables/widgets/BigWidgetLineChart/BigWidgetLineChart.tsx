import { BigCard } from "@/reusables/cards";
import {
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart,
  CartesianGrid,
  Legend,
} from "recharts";

const BigWidgetLineChart: React.FC = () => {
  const data01 = [
    {
      name: "Group A",
      pv: 400,
      uv: 300,
    },
    {
      name: "Group B",
      pv: 300,
      uv: 200,
    },
    {
      name: "Group C",
      pv: 300,
      uv: 432,
    },
    {
      name: "Group D",
      pv: 200,
      uv: 123,
    },
    {
      name: "Group E",
      pv: 278,
      uv: 346,
    },
    {
      name: "Group F",
      pv: 189,
      uv: 150,
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
      <LineChart width={400} height={250} data={data01}>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={"pv"}
          fill={colors[0]}
          stroke={colors[0]}
        />
        <Line
          type="monotone"
          dataKey={"uv"}
          fill={colors[2]}
          stroke={colors[2]}
        />
        <Legend />
      </LineChart>
    </BigCard>
  );
};

export { BigWidgetLineChart };
