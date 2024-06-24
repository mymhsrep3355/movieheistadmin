import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import ChartBoxCR from "../../components/chartBox/ChartBoxCR";
import ChartBoxTU from "../../components/chartBox/ChartBoxTU";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import TopBox2 from "../../components/topBox2/TopBox2";
import ChartBoxMOV from "../../components/chartBox/ChartBoxMOV";


import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const chartBoxConversion = {
  color: "#8884d8",
  icon: "/conversionIcon.svg",
  title: "Total Reviews",
  dataKey: "reviews",
  percentage: 45, // You can adjust this based on dynamic data as needed
  chartData: [
    { name: "Sun", reviews: 4 },
    { name: "Mon", reviews: 6 },
    { name: "Tue", reviews: 3 },
    { name: "Wed", reviews: 7 },
    { name: "Thu", reviews: 40 },
    { name: "Fri", reviews: 2 },
    { name: "Sat", reviews: 10 },
  ]
};

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBoxTU 
          color="#8884d8"
          icon="/userIcon.svg"
          title="Total Users"
          dataKey="users"
          percentage={45} // You can adjust this based on dynamic data as needed
        />
      </div>
      <div className="box box1">
        <TopBox2 />
      </div>
      <div className="box box3">
      <ChartBoxMOV
          color="#8884d8"
          icon="/movieIcon.svg"
          title="Total Movies"
          dataKey="movies"
          percentage={46} // Adjust this as needed
          chartData={[
            { name: "Sun", movies: 400 },
            { name: "Mon", movies: 600 },
            { name: "Tue", movies: 500 },
            { name: "Wed", movies: 700 },
            { name: "Thu", movies: 400 },
            { name: "Fri", movies: 500 },
            { name: "Sat", movies: 450 },
          ]}
        />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBoxCR {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
