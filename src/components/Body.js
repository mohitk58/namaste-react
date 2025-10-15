import { API_ENDPOINT } from "../utils/constants";
import RestaurantCard from "./RestuarntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // Its rendered just after initial load or body load
    console.log("useEffect Called!!");
    fetchData();
  }, []);

  console.log("Body Called!!"); // first this rendered then useEffect

  const fetchData = async () => {
    const data = await fetch(API_ENDPOINT);
    const json = await data.json();
    const restaurants =
      json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          // not using keys (not acceptable) <<<<< index as key <<<<<<<<< unique id (best practice)
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
