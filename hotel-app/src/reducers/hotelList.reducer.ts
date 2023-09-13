import { IHotel } from "../types/hotelType";
// Test Ha Noi hotel
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
  selectedHotel: IHotel;
}

const initState: IInitHotelState = {
  locationHotelList: [],
  filterStarHotel: [],
  filterTypeAccommodation: [],
  selectedHotel: {
    provinceId: 0,
    location: "",
    type: "",
    id: 0,
    name: "",
    address: "",
    rating: 0,
    price: 0,
    stars: 0,
    amenities: [],
    description: "",
    image: [],
    numberOfRoom: 0,
  },
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
    case actionTypes.SEARCH_HOTELS_BY_LOCATION:
      return {
        ...state,
        locationHotelList: action.payload
          .slice()
          .sort((a: IHotel, b: IHotel) => b.price - a.price),
      };
    case actionTypes.SELECTED_HOTEL:
      return { ...state, selectedHotel: action.payload };

    default:
      return state;
  }
};

export default sortHotel;
