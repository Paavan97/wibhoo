import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import whibhoo from "../assets/wibhoo_logo.png";

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

const Login = () => {
  console.log("login");
  return (
    <ThemeProvider  theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width:"100vw",
          backgroundColor: "black",
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
          <Typography>Email / PhoneNo</Typography>
          <TextField
            placeholder="Email / PhoneNo"
            variant="outlined"
            fullWidth
          />
          <Typography>Password</Typography>
          <TextField
            placeholder="Password"
            type="password"
            variant="outlined"
            fullWidth
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
            <Link href="#" underline="hover">
              SignUp
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;