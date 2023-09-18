// import Slider from "@mui/material/Slider";
// import { FormControl, TextField, Typography } from "@mui/material";
// import { Controller, useFormContext } from "react-hook-form";

// export interface ISliderFieldProps {
//   name: string;
//   title?: string;
// }

// export default function SliderField({ name, title }: ISliderFieldProps) {
//   const { control, setValue, watch } = useFormContext();

//   const minPrice: number = watch("minPrice");
//   const maxPrice: number = watch("maxPrice");
//   const sliderValue: number[] = [minPrice, maxPrice];
//   console.log(minPrice, maxPrice);

//   return (
//     <FormControl fullWidth>
//       <Typography>{title}</Typography>
//       <Controller
//         name={name}
//         // defaultValue={[minPrice, maxPrice]}
//         control={control}
//         render={({ field }) => (
//           <Slider
//             {...field}
//             min={0}
//             max={500}
//             value={field.value}
//             onChange={(_, newValue) => {
//               field.onChange(newValue);
//               Array.isArray(newValue) && setValue("minPrice", newValue[0]);
//               Array.isArray(newValue) && setValue("maxPrice", newValue[1]);
//             }}
//             disableSwap
//           />
//         )}
//       />
//       <Controller
//         name="minPrice"
//         // defaultValue={0}
//         control={control}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             type="number"
//             label="Min Price"
//             value={field.value}
//             onChange={(value) => {
//               field.onChange(value);
//               setValue("minPrice", value);
//             }}
//             InputProps={{
//               inputProps: {
//                 min: 0,
//                 max: 500,
//               },
//             }}
//           />
//         )}
//       />
//       <Controller
//         name="maxPrice"
//         // defaultValue={500}
//         control={control}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             type="number"
//             label="Max Price"
//             value={field.value}
//             onChange={(value) => {
//               field.onChange(value);
//               setValue("maxPrice", value);
//             }}
//             InputProps={{
//               inputProps: {
//                 min: 0,
//                 max: 500,
//               },
//             }}
//           />
//         )}
//       />
//     </FormControl>
//   );
// }

import Slider from "@mui/material/Slider";
import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export interface ISliderFieldProps {
  title?: string;
}

export default function SliderField({ title }: ISliderFieldProps) {
  const { control, setValue, watch } = useFormContext();

  const minPrice: number = watch("minPrice");
  const maxPrice: number = watch("maxPrice");

  return (
    <FormControl fullWidth>
      <Typography>{title}</Typography>
      <Stack spacing={2}>
        <Box display={"flex"} gap={"30px"} justifyContent={"space-between"}>
          <Controller
            name="minPrice"
            defaultValue={minPrice ? minPrice : 0}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Min Price"
                value={field.value}
                onChange={(event) => {
                  const value =
                    Number(event.target.value) < 500
                      ? Number(event.target.value)
                      : 500;
                  field.onChange(value);
                  setValue("slider", [value, maxPrice]);
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    max: 500,
                  },
                }}
              />
            )}
          />
          <Controller
            name="maxPrice"
            defaultValue={maxPrice ? maxPrice : 500}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Max Price"
                value={field.value}
                onChange={(event) => {
                  const value =
                    Number(event.target.value) < 500
                      ? Number(event.target.value)
                      : 500;
                  field.onChange(value);
                  setValue("slider", [minPrice, value]);
                }}
                InputProps={{
                  inputProps: {
                    min: 0,
                    max: 500,
                  },
                }}
              />
            )}
          />
        </Box>
        <Controller
          name="slider"
          control={control}
          defaultValue={[0, 500]}
          render={({ field }) => (
            <Slider
              {...field}
              min={0}
              max={500}
              value={field.value}
              onChange={(_, newValue) => {
                field.onChange(newValue);
                Array.isArray(newValue) && setValue("minPrice", newValue[0]);
                Array.isArray(newValue) && setValue("maxPrice", newValue[1]);
              }}
              disableSwap
            />
          )}
        />
      </Stack>
    </FormControl>
  );
}
