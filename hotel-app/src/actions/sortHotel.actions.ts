import { IHotel } from "../types/hotelType";
import { actionTypes } from "../types/actions.types";

export const handleSortHotel = (value: string, initHotel: IHotel[]) => {
  console.log("Init hotel actions: ", initHotel);
  // sort by highest price
  if (value === "1") {
    const sortedHotel: IHotel[] = initHotel
      .slice()
      .sort((a, b) => b.price - a.price);
    return {
      type: actionTypes.SORT_BY_HIGHEST_PRICE,
      payload: sortedHotel,
    };
  }

  // sort by lowest price
  if (value === "2") {
    const sortedHotel: IHotel[] = initHotel
      .slice()
      .sort((a, b) => a.price - b.price);
    return {
      type: actionTypes.SORT_BY_LOWEST_PRICE,
      payload: sortedHotel,
    };
  }

  // sort by rating
  if (value === "3") {
    const sortedHotel: IHotel[] = initHotel
      .slice()
      .sort((a, b) => b.rating - a.rating);
    return {
      type: actionTypes.SORT_BY_RATING,
      payload: sortedHotel,
    };
  }
};

// filer by stars
export const handleFilterStarsHotel = (arrStar: number[]) => {
  return { type: actionTypes.FILTER_BY_STARS, payload: arrStar };
};

// filter by type accommodation
export const handleFilterTypeAccommodation = (arrType: string[]) => {
  return { type: actionTypes.FILTER_BY_TYPE_ACCOMMODATION, payload: arrType };
};

// handle reset filter
export const handleResetFilter = () => {
  console.log("Tao đã reset thành công");
  return { type: actionTypes.RESET_FILTER };
};

export const handleSearchHotelsByLocation = (hotelsData: IHotel[]) => {
  console.log("Tao đã search rồi");
  return { type: actionTypes.SEARCH_HOTELS_BY_LOCATION, payload: hotelsData };
};
