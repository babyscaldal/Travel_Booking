export const actionTypes = {
  // login actions
  USER_LOGIN_RES: "USER_LOGIN_RES",
  USER_LOGIN_SUCCEEDED: "USER_LOGIN_SUCCEEDED",
  USER_LOGIN_FAILED: "USER_LOGIN_FAILED",

  // register actions
  USER_REGISTER_RES: "USER_REGISTER_RES",
  USER_REGISTER_SUCCEEDED: "USER_REGISTER_SUCCEEDED",
  USER_REGISTER_FAILED: "USER_REGISTER_FAILED",

  // Get province actions
  GET_PROVINCE_REQUEST: "GET_PROVINCE_REQUEST",
  GET_PROVINCE_SUCCESS: "GET_PROVINCE_SUCCESS",
  GET_PROVINCE_ERROR: "GET_PROVINCE_ERROR",

  // Sort hotel action
  SORT_BY_HIGHEST_PRICE: "SORT_BY_HIGHEST_PRICE",
  SORT_BY_LOWEST_PRICE: "SORT_BY_LOWEST_PRICE",
  SORT_BY_RATING: "SORT_BY_RATING",

  // Filter hotel by star
  FILTER_BY_STARS: "FILTER_BY_STARS",

  // Filter by type lưu trú
  FILTER_BY_TYPE_ACCOMMODATION: "FILTER_BY_TYPE_ACCOMMODATION",

  // Reset filter
  RESET_FILTER: "RESET_FILTER",
};
