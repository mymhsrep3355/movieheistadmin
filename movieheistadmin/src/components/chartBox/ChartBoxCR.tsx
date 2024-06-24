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
  chartData: object[];
};

const ChartBoxCR = (props: Props) => {
  const [number, setNumber] = useState<number | string>("Loading...");

  useEffect(() => {
    const fetchTotalReviews = async () => {
      try {
        const response = await axios.get("http://localhost:7676/api/auth/totalReviews");
        setNumber(response.data.totalReviews);
      } catch (error) {
        console.error("Error fetching total reviews:", error);
        setNumber("Error");
      }
    };

    fetchTotalReviews();
  }, []);

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View Detail
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
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

export default ChartBoxCR;
