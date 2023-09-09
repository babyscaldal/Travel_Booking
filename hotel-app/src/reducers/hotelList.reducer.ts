import { IHotel } from "../types/hotelType";
// Test Ha Noi hotel
import hanoiList from "../../public/test-data-accommudation/accommodation.json";
import { actionTypes } from "../types/actions.types";

export interface IActionProps {
  type: string;
  payload?: any;
  message?: any;
}

// interface hanoiHotelList extends IHotel[]

export interface IInitHotelState {
  locationHotelList: IHotel[];
  filterStarHotel: number[];
  filterTypeAccommodation: string[];
}

const initSortHotel = hanoiList.slice().sort((a, b) => b.price - a.price);

const initState: IInitHotelState = {
  locationHotelList: initSortHotel,
  filterStarHotel: [],
  filterTypeAccommodation: [],
};

const sortHotel = (state = initState, action: IActionProps) => {
  switch (action.type) {
    case actionTypes.SORT_BY_HIGHEST_PRICE:
      return { ...state, locationHotelList: action.payload };
    case actionTypes.SORT_BY_LOWEST_PRICE:
      return { ...state, locationHotelList: action.payload };
    case actionTypes.SORT_BY_RATING:
      return { ...state, locationHotelList: action.payload };
    case actionTypes.FILTER_BY_STARS:
      return { ...state, filterStarHotel: action.payload };
    case actionTypes.FILTER_BY_TYPE_ACCOMMODATION:
      return { ...state, filterTypeAccommodation: action.payload };
    case actionTypes.RESET_FILTER:
      return { ...state, filterStarHotel: [], filterTypeAccommodation: [] };

    default:
      return state;
  }
};

export default sortHotel;
