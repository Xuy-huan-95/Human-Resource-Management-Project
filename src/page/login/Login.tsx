import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loginApi } from "../../redux/slice/login.slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GetPermisson } from "../../redux/slice/CheckPermission.slice"
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useAppSelector((state: any) => state.auth);
  const [errorUsername, setErrorUsername] = React.useState(true)
  const [errorPassword, setErrorPassword] = React.useState(true)
  const [Permission, setPermission] = React.useState<string>("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!data.get("username") && !data.get("password")) {
      setErrorUsername(false)
      setErrorPassword(false)
    }
    if (!data.get("username")) {
      setErrorUsername(false)
      return;
    } setErrorUsername(true)

    if (!data.get("password")) {
      setErrorPassword(false)
      return;
    } setErrorPassword(true)

    if (data) {
      setPermission(data.get("username") as string)
      dispatch(
        loginApi({
          username: data.get("username") as string,
          password: data.get("password") as string,
        })
      );
    }
  };
  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Đăng nhập thành công");
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("permissson", Permission)
      dispatch(GetPermisson(Permission))
      navigate("/manageuser/1");


    }
  }, [isSuccess, user]);

  return (
    <div className="container-login">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="login-content">
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main" }}
              className="sigin-icon"
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Tài khoản"
                name="username"
                autoComplete="username"
                autoFocus
                error={errorUsername === false}
                helperText={errorUsername === false ? 'Vui lòng không để trống Phần này!' : ' '}
                size="small"

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errorPassword === false}
                helperText={errorPassword === false ? 'Vui lòng không để trống Phần này!' : ' '}
                size="small"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
            </Box>
          </div>
          {/* </Box> */}
        </Container>
      </ThemeProvider>
    </div>


  );
};

export default Login;