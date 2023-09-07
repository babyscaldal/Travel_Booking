import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { TransitionProps } from "@mui/material/transitions";
import InputField from "./InputField";
import { DialogTitle, Grid, Link, Slide, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { IUsers } from "../../types/users";

import { useDispatch } from "react-redux";
import { IUserLoginReq } from "../../../types/userType";
import { LoginRes } from "../../../actions/login.actions";

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

export default function LoginForm() {
  const [open, setOpen] = React.useState(false);

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
  });

  const form = useForm<IFormValues>({
    defaultValues: {
      email: "",
      password: "",
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

  return (
    <div>
      <Button
        variant="text"
        sx={{ color: "text.primary" }}
        onClick={() => {
          handleClickOpen();
        }}
      >
        <AccountCircleIcon color="primary" sx={{ mr: 0.5 }} /> Đăng nhập
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
              {"Đăng nhập"}
            </DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormProvider {...form}>
                <Stack spacing={2}>
                  <InputField name="email" title="Email" type="email" />
                  <InputField
                    name="password"
                    title="Password"
                    type="password"
                  />

                  <Button variant="contained" color="warning" type="submit">
                    Login
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
function onEditUser(id: any, data: any) {
  throw new Error("Function not implemented.");
}
