import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../utils/constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_ENDPOINT);
    const json = await data.json();
    const restaurants =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
  };
};

export default useRestaurantList;
