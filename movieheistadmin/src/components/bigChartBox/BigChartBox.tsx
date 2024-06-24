import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    moviesPlayed: 700,
    trailersPlayed: 240,
  },
  {
    name: "Mon",
    moviesPlayed: 445,
    trailersPlayed: 200,
  },
  {
    name: "Tue",
    moviesPlayed: 140,
    trailersPlayed: 110,
  },
  {
    name: "Wed",
    moviesPlayed: 567,
    trailersPlayed: 90,
  },
  {
    name: "Thu",
    moviesPlayed: 888,
    trailersPlayed: 24,
  },
  {
    name: "Fri",
    moviesPlayed: 674,
    trailersPlayed: 136,
  },
  {
    name: "Sat",
    moviesPlayed: 980,
    trailersPlayed: 21,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Streaming Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="moviesPlayed"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="trailersPlayed"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
