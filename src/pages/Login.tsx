import { useEffect, useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import whibhoo from "../assets/wibhoo_logo.png";
import { useAppDispatch } from "../Redux/App/hooks";
import { loginUser } from "../Redux/feature/Authslice";
import { toast } from "react-toastify"; // Removed import of ToastContainer here
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ email: emailOrPhone, password: password })).then(
      (res: any) => {
        const token = res.payload.token;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        } else {
          toast.error("Login failed. Please check your credentials  1234.");
        }
      }
    );
  };

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const res = await dispatch(
  //       loginUser({ email: emailOrPhone, password })
  //     ).unwrap();
  //     const { token } = res;
  //     // const token = localStorage.getItem("token");
  //     if (token) {
  //       localStorage.setItem("token", token);
  //       navigate("/");
  //     } else {
  //       toast.error("Login failed. Please check your credentials.");
  //     }
  //   } catch (error) {
  //     toast.error("Login failed. Please check your credentials.");
  //   }
  // };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: { md: "25%", sm: "60%", xs: "70%" },
          padding: 3,
          backgroundColor: "white",
          borderRadius: 1,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box>
          <img
            style={{ width: "70px", backgroundColor: "transparent" }}
            src={whibhoo}
            alt="Wibhoo Logo"
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontWeight: "600",
            color: "lightgreen",
          }}
        >
          Login
        </Typography>
        <Typography>Email</Typography>
        <TextField
          placeholder="Email"
          variant="outlined"
          fullWidth
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <Typography>Password</Typography>
        <TextField
          placeholder="Password"
          // type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "lightgreen",
            color: "black",
            "&:hover": {
              backgroundColor: "#4CBB17",
            },
          }}
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { md: "0px 40px" },
          }}
        >
          <Link href="#" underline="hover">
            Forgot Password
          </Link>
          <Link href="/register" underline="hover">
            SignUp
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
