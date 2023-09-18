import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { TransitionProps } from "@mui/material/transitions";
import InputField from "./InputField";
import {
  Checkbox,
  DialogTitle,
  FormControlLabel,
  Grid,
  Slide,
  Stack,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { IUserLoginReq } from "../../../types/userType";
import { LoginRes } from "../../../actions/login.actions";
import { IFormLoginValues } from "../../../types/LoginTypes";
import RegisterForm from "../Register/RegisterForm";
import LockResetIcon from "@mui/icons-material/LockReset";
import { UserState } from "../../../reducers/login.reducer";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginSuccess from "./LoginSusccess";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ILoginForm {
  children: React.ReactNode;
  type?: "text" | "contained" | "outlined";
  material?: string;
  width?: string;
  color?:
    | "inherit"
    | "primary"
    | "success"
    | "warning"
    | "secondary"
    | "info"
    | "error";
}

interface ILoginForm {
  handleCloseMenu?: () => void;
}

export default function LoginForm({
  children,
  type = "text",
  material = "text.primary",
  color,
  handleCloseMenu,
}: ILoginForm) {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showSuccess, setShowSuccess] = React.useState(true);
  const [showFail, setShowFail] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const isLogin: UserState = useSelector(
    (state: any) => state.loginReducer.isLogin
  );

  const handleClose = () => {
    setOpen(false);
    handleCloseMenu && handleCloseMenu();
  };

  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Name is required")
      .min(6, "Password length must be between 6 and 12 character!")
      .max(30, "Password length must be between 6 and 30 character!"),
  });

  const form = useForm<IFormLoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = form;

  const dispatch = useDispatch();

  const handleShowPassword = (_: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    // console.log("data: ", data);
    console.log("submit Value: ", data);
    handleClose();
    const body: IUserLoginReq = {
      user: {
        ...data,
      },
    };
    dispatch(LoginRes(body));

    reset();
  };

  React.useEffect(() => {
    if (isLogin) {
      setShowSuccess(true);
    } else setShowFail(true);
  }, [isLogin]);

  console.log(isLogin);

  return (
    <div>
      <Button
        sx={{ color: material }}
        color={color}
        variant={type}
        onClick={() => {
          handleClickOpen();
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
      >
        <DialogActions>
          <Stack spacing={1.5} sx={{ padding: "48px 32px", width: "450px" }}>
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center",
                padding: 0,
              }}
            >
              {"Đăng nhập"}
            </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <FormProvider {...form}>
                <Stack spacing={1.5}>
                  <InputField name="email" title="Email" type="email" />
                  <InputField
                    name="password"
                    title="Password"
                    type={showPassword ? "text" : "password"}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showPassword}
                        onChange={handleShowPassword}
                      />
                    }
                    label="Change to display password"
                  />

                  <Button variant="contained" color="primary" type="submit">
                    Login
                  </Button>
                  {/* <LoginSuccess /> */}
                  <Grid container justifyContent={"space-between"}>
                    <Grid item>
                      <Button
                        variant="text"
                        sx={{ color: "text.primary" }}
                        startIcon={
                          <LockResetIcon color="primary" sx={{ mr: 0.5 }} />
                        }
                      >
                        Quên mật khẩu
                      </Button>
                    </Grid>
                    <Grid item>
                      <RegisterForm
                        closeLogin={handleClose}
                        icon={<HowToRegIcon color="primary" sx={{ mr: 0.5 }} />}
                      >
                        Đăng ký
                      </RegisterForm>
                    </Grid>
                  </Grid>
                </Stack>
              </FormProvider>
            </form>
          </Stack>
        </DialogActions>
      </Dialog>
      <LoginSuccess showSuccess={showSuccess} onSuccess={setShowSuccess} />
    </div>
  );
}
