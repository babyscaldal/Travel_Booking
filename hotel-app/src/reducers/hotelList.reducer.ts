import { IHotel } from "../types/hotelType";
// Test Ha Noi hotel
import { actionTypes } from "../types/actions.types";
import { UserState, getUserFromLocal } from "./login.reducer";

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
  orderHotelList: IOrderHotel[];
  infoUser: IBookedUser;
}

export interface IOrderHotel extends IHotel {
  adultQuantity: number;
  childrenQuantity: number;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  roomQuantity: number;
}

// Call data from local storage
// function getUserFromLocal(): UserState {
//   const res = localStorage.getItem("userLogin") as string;
//   return JSON.parse(res);
// }

const initInfoUser: IBookedUser = {
  username: "",
  orderHotelList: [],
};

export function getInfoUserLocal(): IBookedUser {
  const res = localStorage.getItem("infoUser") as string;
  return JSON.parse(res) || initInfoUser;
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
  orderHotelList: [],
  // infoUser: {
  //   username: getUserFromLocal().user.username,
  //   orderHotelList: [],
  // },
  infoUser: getInfoUserLocal(),
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
        // orderHotelList: [action.payload, ...state.orderHotelList],
        infoUser: {
          ...state.infoUser,
          orderHotelList: [action.payload, ...state.infoUser.orderHotelList],
        },
      };

    default:
      return state;
  }
};

export default sortHotel;
