import { IHotel } from "../types/hotelType";
// Test Ha Noi hotel
import { actionTypes } from "../types/actions.types";
import { getUserFromLocal } from "./login.reducer";

export interface IActionProps {
  type: string;
  payload?: any;
  message?: any;
}

export interface IBookedUser {
  username: string;
  orderHotelList: IOrderHotel[];
}
// interface hanoiHotelList extends IHotel[]
export interface IInitHotelState {
  locationHotelList: IHotel[];
  filterStarHotel: number[];
  filterTypeAccommodation: string[];
  selectedHotel: IHotel;
  infoUser: IBookedUser;
  favoriteList: IHotel[];
}

export interface IOrderHotel extends IHotel {
  adultQuantity: number;
  childrenQuantity: number;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  roomQuantity: number;
}

// init location Hotel List
const initLocationHotelList: IHotel[] = [];

export function getLocationHotelList(): IHotel[] {
  const res = localStorage.getItem("locationHotelList") as string;
  return JSON.parse(res) || initLocationHotelList;
}

// init Selected hotel
const initSelectedHotel: IHotel = {
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
};

export function getSelectedHotel(): IHotel {
  const res = localStorage.getItem("selectedHotel") as string;
  return JSON.parse(res) || initSelectedHotel;
}

//init use login
const initInfoUser: IBookedUser = {
  username: "",
  orderHotelList: [],
};

export function getInfoUserLocal(): IBookedUser {
  const res = localStorage.getItem("infoUser") as string;
  return JSON.parse(res) || initInfoUser;
}

// init favorite hotel list
export function getFavoriteLocal(): IHotel[] {
  const res = localStorage.getItem("favoriteList") as string;
  return JSON.parse(res) || [];
}

// init state
const initState: IInitHotelState = {
  locationHotelList: getLocationHotelList(),
  filterStarHotel: [],
  filterTypeAccommodation: [],
  selectedHotel: getSelectedHotel(),
  infoUser: getInfoUserLocal(),
  favoriteList: getFavoriteLocal(),
};

const sortHotel = (state = initState, action: IActionProps) => {
  switch (action.type) {
    // start: get hotel location
    case actionTypes.GET_HOTELS_BY_LOCATION_REQUEST:
      console.log("GET_HOTELS_BY_LOCATION_REQUEST:", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GET_HOTELS_BY_LOCATION_SUCCESS:
      console.log("GET_HOTELS_BY_LOCATION_SUCCESS:", action);
      localStorage.setItem(
        "locationHotelList",
        JSON.stringify([
          ...action.payload
            .slice()
            .sort((a: IHotel, b: IHotel) => b.price - a.price),
        ])
      );

      return {
        ...state,
        locationHotelList: action.payload
          .slice()
          .sort((a: IHotel, b: IHotel) => b.price - a.price),
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_HOTELS_BY_LOCATION_ERROR:
      console.log("GET_HOTELS_BY_LOCATION_ERROR:", action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // end: get hotel location

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

    //selectedHotel
    case actionTypes.SELECTED_HOTEL:
      localStorage.setItem(
        "selectedHotel",
        JSON.stringify({
          ...action.payload,
        })
      );
      return { ...state, selectedHotel: action.payload };

    // Order hotel
    case actionTypes.ORDER_HOTEL:
      localStorage.setItem(
        "infoUser",
        JSON.stringify({
          ...state.infoUser,
          username: getUserFromLocal().user.username,
          orderHotelList: [action.payload, ...state.infoUser.orderHotelList],
        })
      );
      return {
        ...state,
        infoUser: {
          ...state.infoUser,
          orderHotelList: [action.payload, ...state.infoUser.orderHotelList],
        },
      };

    // Favorite list
    case actionTypes.FAVORITE_HOTEL:
      localStorage.setItem("favoriteList", JSON.stringify([...action.payload]));
      return { ...state, favoriteList: action.payload };

    // Cancel order
    case actionTypes.CANCEL_ORDER:
      localStorage.setItem(
        "infoUser",

        JSON.stringify({
          ...state.infoUser,

          username: getUserFromLocal().user.username,

          orderHotelList: [
            ...state.infoUser.orderHotelList.filter(
              (item, index) => index !== action.payload
            ),
          ],
        })
      );

      return {
        ...state,

        infoUser: {
          ...state.infoUser,

          orderHotelList: [
            ...state.infoUser.orderHotelList.filter(
              (item, index) => index !== action.payload
            ),
          ],
        },
      };
    default:
      return state;
  }
};

export default sortHotel;
