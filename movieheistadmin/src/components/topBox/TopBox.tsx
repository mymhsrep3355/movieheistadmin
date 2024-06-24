import { useEffect, useState } from "react";
import axios from "axios";
import "./topBox.scss";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

const TopBox = () => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=b93a64480573ce5248c28b200d79d029&language=en-US&page=1`
        );
        setTopMovies(response.data.results.slice(0, 10)); // Get top 10 movies
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div className="topBox">
      <h1>Top Movies</h1>
      <div className="list">
        {topMovies.map((movie) => (
          <div className="listItem" key={movie.id}>
            <div className="user">
              <img
                className="movieImg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="userTexts">
                <span className="username">{movie.title}</span>
                <span className="email">{new Date(movie.release_date).getFullYear()}</span>
              </div>
            </div>
            <span className="amount">{movie.vote_average}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
