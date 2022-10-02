import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { endpoints } from "../../api/endpoints";
import { Title } from "./Title";
import "./Titles.css";
type TitleProps = {
  title_type: "movie" | "series";
};
export const Titles = ({ title_type }: TitleProps) => {
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getTitles = async () => {
      try {
        const response = await axios.get(endpoints.categories[title_type], {
          signal: controller.signal,
        });
        isMounted && setTitles(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error from get title");
        console.log(error);
      }
    };
    getTitles();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [location, navigate, title_type]);

  return (
    <div>
      {isLoading ? (
        <div className="center-horizontally">
          <img src="/spinner.gif" alt="Loading..." />
        </div>
      ) : titles.length ? (
        <div className="container">
          <ImageList cols={4}>
            {titles.map((item: Title) => (
              <ImageListItem key={item._id} sx={{ width: 300, height: 300 }}>
                <img
                  src={item.images["Poster Art"].url}
                  alt={item.title}
                />
                <ImageListItemBar
                  title={`${item.title} (${item.releaseYear})`}
                  subtitle={<div>{item.description}</div>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : (
        <h1> No titles found</h1>
      )}
    </div>
  );
};
