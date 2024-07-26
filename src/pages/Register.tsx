import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import whibhoo from "../assets/wibhoo_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/feature/Authslice";
import { useAppDispatch } from "../Redux/App/hooks";

const theme = createTheme({
  palette: {
    primary: {
      main: "#90ee90", // light green color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#90ee90", // light green color
          },
        },
      },
    },
  },
});

const Register = () => {
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    let hasError = false;

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    } else {
      setConfirmPasswordError(null);
    }

    if (hasError) return;

    try {
      await dispatch(registerUser({ email, telephone, password })).unwrap();
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            Register
          </Typography>
          <Typography>Email</Typography>
          <TextField
            placeholder="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography>Phone No</Typography>
          <TextField
            placeholder="Phone No"
            variant="outlined"
            fullWidth
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <Typography>Password</Typography>
          <TextField
            placeholder="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Typography>Confirm Password</Typography>
          <TextField
            placeholder="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (
            <Typography color="error" sx={{ marginBottom: 2 }}>
              {confirmPasswordError}
            </Typography>
          )}
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
            onClick={handleSubmit} // Handle form submission
          >
            Sign Up
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "15px",
              padding: { md: "0px 20px" },
            }}
          >
            <Link href="/login" underline="hover">
              Already have an Account? Sign in
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Register;
