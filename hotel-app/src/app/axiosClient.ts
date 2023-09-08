import axios from "axios";
import queryString from "query-string";

export const axiosClient = axios.create({
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
<<<<<<< HEAD
    // console.log("status: ", response.status);

    return response.data;
=======
    if (response && response.data) {
      return response.data;
    }
    return response;
>>>>>>> features/SearchHotelList
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // alert(`Error(axiosClient): ${error} `);
    if (error.response.status >= 500) {
      alert(`Error(axiosClient): ${error}`);
    }
    return Promise.reject(error);
  }
);
