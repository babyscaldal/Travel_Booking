import { Box, Container, Stack, Typography, Divider } from "@mui/material";
import map from "../../../assets/map.png";
import { RadioField } from "./RadioField";
import { FormProvider, useForm } from "react-hook-form";
import FilterSubMenu from "./FilterSubMenu";
import { DevTool } from "@hookform/devtools";
import SearchField from "./SearchField";

export interface IFilterFormValue {
  radio: string;
  star: string;
  type: string;
}

const onSubmit = (data: IFilterFormValue) => {
  console.log(data);
};

export const FilterFormLayOut = () => {
  const form = useForm({
    defaultValues: {
      radio: "1",
      star: "",
      type: "",
    },
  });

  const { handleSubmit, control } = form;

  return (
    <Container maxWidth="lg">
      <Box display={"flex"} justifyContent={"space-between"} gap={"15px"}>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
          </form>
        </FormProvider>
        <Box width={"100%"}>
          <SearchField />
        </Box>
      </Box>
      {/* <Button type="submit">Submit</Button> */}
      <DevTool control={control} />
    </Container>
  );
};
