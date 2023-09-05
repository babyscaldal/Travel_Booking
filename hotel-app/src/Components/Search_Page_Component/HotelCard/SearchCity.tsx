// import { Box } from "@mui/material";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { ICity } from "../BookingTabs/HotelBookFormLayout";
// import SearchField from "./SearchField";

// interface SearchValue {
//   city: ICity;
// }

// export const SearchCity = () => {
//   const form = useForm<SearchValue>({
//     defaultValues: {
//       city: {
//         id: 1,
//         name: "New York",
//         country: "United States",
//         population: 8623000,
//       },
//     },
//   });

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };
//   const { control, handleSubmit } = form;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <SearchField />
//     </form>
//   );
// };
