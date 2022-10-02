import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div className="popular-titles">
      <div className="popular-title">
        <Link to="/series">
          <img src="/images/series.png" alt="series" />
        </Link>
        <p>Popular Series</p>
      </div>

      <div className="popular-title">
        <Link to="/movie">
          <img src="/images/movies.png" alt="movies" />
        </Link>
        <p>Popular Movies</p>
      </div>
    </div>
  );
};
