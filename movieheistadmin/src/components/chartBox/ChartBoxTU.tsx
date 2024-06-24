import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  percentage: number;
};

const ChartBoxTU = (props: Props) => {
  const [number, setNumber] = useState<number | string>("Loading...");
  const [chartData, setChartData] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7676/api/auth/totalUsers");
        setNumber(response.data.totalUsers);
        
        // Assuming your backend also provides chart data, update this part accordingly
        setChartData([
          { name: "Sun", users: 400 },
          { name: "Mon", users: 600 },
          { name: "Tue", users: 500 },
          { name: "Wed", users: 700 },
          { name: "Thu", users: 400 },
          { name: "Fri", users: 500 },
          { name: "Sat", users: 450 },
        ]);
      } catch (error) {
        console.error("Error fetching total users:", error);
        setNumber("Error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/users" style={{ color: props.color }}>
          View Detail
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBoxTU;
