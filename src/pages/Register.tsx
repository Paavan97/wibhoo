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

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
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
            Register
          </Typography>
          <Typography>Email</Typography>
          <TextField placeholder="Email" variant="outlined" fullWidth />
          <Typography>PhoneNo</Typography>
          <TextField placeholder="PhoneNo" variant="outlined" fullWidth />
          <Typography>Password</Typography>
          <TextField
            placeholder="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Typography>Confirm Password</Typography>
          <TextField
            placeholder="Confirm Password"
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
            Sign Up
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

export default Register;