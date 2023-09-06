import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";
// import { IFormLoginValues } from "../../../../types/LoginTypes";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { IFormLoginValues } from "../../../types/LoginTypes";
import { IUserLoginReq } from "../../../types/userType";
import { LoginRes } from "../../../actions/login.actions";
// import { IUserLoginReq } from "../../../../types/userType";
// import { LoginRes } from "../../../../actions/login.actions";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginForm() {
  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password length must be between 6 and 12 character!")
      .max(30, "Password length must be between 6 and 30 character!"),
  });

  const form = useForm<IFormLoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    // mode: "onSubmit",
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = form;

  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log("submit Value: ", data);
    const body: IUserLoginReq = {
      user: {
        ...data,
      },
    };
    dispatch(LoginRes(body));
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginTop: "10px", paddingBottom: "30px" }}
          >
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
                />
              )}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

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

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lưu mật khẩu"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên mật khẩu
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Đăng kí"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
