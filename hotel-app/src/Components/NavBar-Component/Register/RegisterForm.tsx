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
import InputField from "../Login/InputField";
import { IFormRegisterValues } from "../../../types/LoginTypes";
import { RegisterRes } from "../../../actions/register.actions";
import { IUserRegisterReq } from "../../../types/userType";

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

export interface IRegisterForm {
  handleCloseMenu?: () => void;
  closeLogin?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function RegisterForm({
  handleCloseMenu,
  closeLogin,
  children,
  icon,
}: IRegisterForm) {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseMenu && handleCloseMenu();
  };

  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Passwords is required")
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

  const { handleSubmit, reset } = form;

  const dispatch = useDispatch();

  const handleShowPassword = (_: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: IFormRegisterValues) => {
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
        startIcon={icon}
        variant="text"
        sx={{ color: "text.primary" }}
        onClick={() => {
          handleClickOpen();
          closeLogin && closeLogin();
        }}
      >
        {children}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            height: "100vh",
          },
        }}
      >
        <DialogActions>
          <Stack spacing={1} sx={{ padding: "10px 32px", width: "550px" }}>
            <DialogTitle
              sx={{
                height: "auto",
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
                  <Box sx={{ width: "100%" }}>
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
