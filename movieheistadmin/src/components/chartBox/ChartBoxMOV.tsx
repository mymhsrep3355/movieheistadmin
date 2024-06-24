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

const ChartBox = (props: Props) => {
  const [number, setNumber] = useState<number | string>("Loading...");

  useEffect(() => {
    const fetchTotalMovies = async () => {
      try {
        const apiKey = "b93a64480573ce5248c28b200d79d029";
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
        // TMDB doesn't provide a direct total count, so let's assume a large number of results per page
        const totalPages = response.data.total_pages;
        const totalResults = response.data.total_results;
        setNumber(totalResults);
      } catch (error) {
        console.error("Error fetching total movies:", error);
        setNumber("Error");
      }
    };

    fetchTotalMovies();
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

export default ChartBox;
