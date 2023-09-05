import {
  Box,
  Container,
  Stack,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import map from "../../assets/map.png";
import { RadioField } from "./RadioField";
import { FormProvider, useForm } from "react-hook-form";
import FilterSubMenu from "./FilterSubMenu";
import { DevTool } from "@hookform/devtools";
import CitySearchField from "../BookingTabs/BookingFormField/CitySearchField";
import SearchField from "./SearchField";

export interface IFilterFormValue {
  radio: string;
  rating: string;
  type: string;
  city: string;
}

const onSubmit = (data: IFilterFormValue) => {
  console.log(data);
};

export const FilterFormLayOut = () => {
  const form = useForm({
    defaultValues: {
      radio: "1",
      rating: "",
      type: "",
      city: "",
    },
  });

  const { handleSubmit, control } = form;

  return (
    <Box bgcolor={"#e6eaed"} height={"100vh"} overflow={"auto"}>
      <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={3} minWidth={"250px"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormProvider {...form}>
                <Stack spacing={2}>
                  {/* Map */}
                  <Box>
                    <img
                      src={map}
                      alt="map"
                      width={"100%"}
                      height={"100%"}
                      style={{ borderRadius: "6px" }}
                    />
                  </Box>

                  {/* Radio */}
                  <Box bgcolor="white" padding="10px" borderRadius="6px">
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                      component="p"
                    >
                      Sắp xếp kết quả
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#687176" }}>
                      Sắp xếp kết quả theo lựa chọn
                    </Typography>
                    <Divider />
                    <RadioField name="radio" />
                  </Box>

                  <Box>
                    <FilterSubMenu />
                  </Box>
                </Stack>
              </FormProvider>
              <Button type="submit">Submit</Button>
            </form>
            <DevTool control={control} />
          </Grid>
          <Grid item xs={9}>
            <SearchField />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
