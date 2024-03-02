import { useEffect, useState, useCallback } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getRestaurants = async () => {
        try {
            const response = await fetch(swiggy_api_URL);
            const json = await response.json();
            let resData = []
            for (let i = 0; i < json?.data?.cards.length; i++) {
                let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (checkData) {
                    resData = [...checkData];
                    break;
                }
            }
            setAllRestaurants(resData);
            setFilteredRestaurants(resData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    // use searchData function and set condition if data is empty show error message
    const searchData = useCallback(searchText => {
        if (searchText) {
            const resFilterData = allRestaurants.filter((restaurant) =>
                restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(resFilterData);
            setErrorMessage("");
            if (resFilterData?.length === 0) {
                setErrorMessage("No matches restaurant found");
            }
        } else {
            setErrorMessage("Please search the restaurant");
        }
    }, [allRestaurants]);

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => searchData(searchText)}
                >
                    Search
                </button>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}

            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Body;