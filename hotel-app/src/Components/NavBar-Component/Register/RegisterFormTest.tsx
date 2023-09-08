import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";
// import { IFormRegisterValues } from "../../../../types/LoginTypes";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormRegisterValues } from "../../../types/LoginTypes";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RegisterForm() {
  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password length must be between 6 and 12 character!")
      .max(12, "Password length must be between 6 and 12 character!"),
    // .test(
    //   "size-password",
    //   "Password length must be between 8 and 12 characters",
    //   (value) => {
    //     return value && value.length >= 8 && value.length <= 12;
    //   }
    // ),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
    nameUser: yup.string().required("Name is required"),
  });

  const form = useForm<IFormRegisterValues>({
    defaultValues: {
      email: "",
      nameUser: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data: any) => {
    // setIsLogin(true);
    // navigate("/home");
    console.log("submit Value: ", data);
    reset;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: "10px", paddingBottom: "30px" }}
          >
            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  onChange={field.onChange}
                  value={field.value}
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  type="email"
                />
              )}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            {/* Name user */}
            <Controller
              name="nameUser"
              control={control}
              render={({ field }) => (
                <TextField
                  onChange={field.onChange}
                  value={field.value}
                  margin="normal"
                  fullWidth
                  label="Name"
                  type="text"
                />
              )}
            />
            {errors.nameUser && (
              <p style={{ color: "red" }}>{errors.nameUser.message}</p>
            )}

            {/* Confirm Password */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  onChange={field.onChange}
                  value={field.value}
                  type="password"
                  margin="normal"
                  fullWidth
                  label="Password"
                />
              )}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}

            {/* Password */}
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  onChange={field.onChange}
                  value={field.value}
                  type="password"
                  margin="normal"
                  fullWidth
                  label="Confirm Password"
                />
              )}
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
