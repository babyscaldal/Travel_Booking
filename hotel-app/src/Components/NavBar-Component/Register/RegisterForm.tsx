import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { TransitionProps } from "@mui/material/transitions";
import {
  Box,
  Checkbox,
  DialogTitle,
  FormControlLabel,
  Slide,
  Stack,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { IUserLoginReq, IUserRegisterReq } from "../../../types/userType";
import { LoginRes } from "../../../actions/login.actions";
import InputField from "../Login/InputField";
import { IFormRegisterValues } from "../../../types/LoginTypes";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { RegisterRes } from "../../../actions/register.actions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IFormValues {
  email: string;
  password: string;
}

// interface IEditForm {
//   user: IUser;
// }

export default function RegisterForm() {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Name is required")
      .min(6, "Password length must be between 6 and 12 character!")
      .max(30, "Password length must be between 6 and 30 character!"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
    username: yup.string().required("Name is required"),
  });

  const form = useForm<IFormRegisterValues>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    // mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = form;

  const dispatch = useDispatch();

  const handleShowPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: IFormRegisterValues) => {
    // console.log("data: ", data);
    console.log("submit Value: ", data);
    handleClose();
    const body: IUserRegisterReq = {
      user: {
        email: data.email,
        password: data.password,
        username: data.username,
      },
    };
    dispatch(RegisterRes(body));
    reset();
  };

  return (
    <div>
      <Button
        variant="text"
        sx={{ color: "text.primary" }}
        onClick={() => {
          handleClickOpen();
        }}
      >
        <HowToRegIcon color="primary" sx={{ mr: 0.5 }} /> Đăng ký
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogActions>
          <Stack spacing={3} sx={{ padding: "48px 32px", width: "450px" }}>
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center",
                padding: 0,
              }}
            >
              {"Đăng ký"}
            </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormProvider {...form}>
                <Stack spacing={2}>
                  {/* Email */}
                  <InputField name="email" title="Email" type="email" />
                  {/* User name */}
                  <InputField name="username" title="Name" type="text" />
                  {/* Password */}
                  <InputField
                    name="password"
                    title="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password length must be between 6 and 12 character!"
                  />
                  {/* Confirm password */}
                  <InputField
                    name="confirmPassword"
                    title="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Must match the entered password"
                  />
                  {/* Show Password */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showPassword}
                        onChange={handleShowPassword}
                      />
                    }
                    label="Change to display password"
                  />
                  <Box sx={{ width: "100%", paddingTop: "32px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Register
                    </Button>
                  </Box>
                </Stack>
              </FormProvider>
            </form>
          </Stack>
          {/* <DevTool control={control} /> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
