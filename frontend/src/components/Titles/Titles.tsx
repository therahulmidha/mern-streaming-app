import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { endpoints } from "../../api/endpoints";
import "./Titles.css";
type TitleProps = {
  title_type: "movie" | "series";
};
export const Titles = ({ title_type }: TitleProps) => {
  const [titles, setTitles] = useState([]);
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
        console.log(response.data.data);
        isMounted && setTitles(response.data.data);
      } catch (error) {
        console.log("Error from get business");
        console.log(error);
        // TODO: This above logic can be moved to a common hook or file
      }
    };
    getTitles();

    return () => {
      // if request pending but component unmounted, cancel request and cancel setBusinesses
      isMounted = false;
      controller.abort();
    };
  }, [location, navigate]);

  return (
    <div>
      {titles.length !== 0 ? (
        titles.map((title: any) => (
          <div>
            <h2>{title.title}</h2>
          </div>
        ))
      ) : (
        <h1>No {title_type} Yet</h1>
      )}
    </div>
  );
};

/*

{businesses.length !== 0 ? (
        businesses.map((business: any) => (
          <div>
            <h2>{business.business_name}</h2>
            <h3>{business.created_on}</h3>
          </div>
        ))
      ) : (
        <h1>No Businesses Yet</h1>
      )}

 */
