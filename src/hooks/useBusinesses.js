import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";


export default () => {
const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jaose",
        },
      });
      setBusinesses(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  //call search api when component is first rendered. {bad code}

  useEffect (() => {
    searchApi('pasta');

  }, []);

  return [searchApi, businesses, errorMessage];
};