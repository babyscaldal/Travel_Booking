// import { actionTypes } from "../types/actions.types";
// import { IHotel } from "../types/hotelType";
// import { IAction } from "./ProvincesReducer";

// const initState = {
//   hotelsListByLocation: [] as IHotel[],
// };

// const hotelsByLocationReducer = (state = initState, action: IAction) => {
//   switch (action.type) {
//     case actionTypes.GET_HOTELS_BY_LOCATION_REQUEST:
//       console.log("GET_HOTELS_BY_LOCATION_REQUEST:", action);
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };

//     case actionTypes.GET_HOTELS_BY_LOCATION_SUCCESS:
//       console.log("GET_HOTELS_BY_LOCATION_SUCCESS:", action);

//       return {
//         ...state,
//         hotelsListByLocation: action.payload,
//         isLoading: false,
//         isError: false,
//       };

//     case actionTypes.GET_HOTELS_BY_LOCATION_ERROR:
//       console.log("GET_HOTELS_BY_LOCATION_ERROR:", action);
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };

//     default:
//       return state;
//   }
// };

// export default hotelsByLocationReducer;
