import { useEffect, useState } from "react";
import axios from "axios";
import "./topBox.scss";

type Critic = {
  email: string;
  userName: string;
  reviewCount: number;
};

const TopBox2 = () => {
  const [topCritics, setTopCritics] = useState<Critic[]>([]);

  useEffect(() => {
    const fetchTopCritics = async () => {
      try {
        const response = await axios.get("http://localhost:7676/api/auth/topReviewers");
        setTopCritics(response.data);
      } catch (error) {
        console.error("Error fetching top reviewers:", error);
      }
    };

    fetchTopCritics();
  }, []);

  return (
    <div className="topBox">
      <h1>Top Critic Users</h1>
      <div className="list">
        {topCritics.map((critic, index) => (
          <div className="listItem" key={index}>
            <div className="user">
              {/* Uncomment the line below if you have a default avatar image */}
              {/* <img className="movieImg" src="/defaultAvatar.png" alt="" /> */}
              <div className="userTexts">
                <span className="username">{critic.userName}</span>
                <span className="email">{critic.email}</span>
              </div>
            </div>
            <span className="amount">{critic.reviewCount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox2;
