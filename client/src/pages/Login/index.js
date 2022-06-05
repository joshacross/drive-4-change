import React, { useState } from "react";
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
import { loginState } from "../../utils/globalstate";

const theme = createTheme();

export default function SignIn() {
  let [email, setEmail] = useState("");
  let [code, setCode] = useState("");
  let [token, setToken] = useState("");
  let [requestedLogin, setRequestedLogin] = useState(false);  

  // let [isLoggedIn, setLoginState] = useRecoilState(loginState);
  const requestLogin = async (event) => {
    event.preventDefault();
    fetch(
      "https://645jzprbjb.execute-api.us-east-2.amazonaws.com/prod/requestLogin",
      {
        headers: 
          {
            "X-API-Key": "zfVHzncqvCaNW2z9HCHrYaBi7px3Td5S8ctufxeN",
          },
        method: "POST",
        body: JSON.stringify({
          email: email
        })
      }
    ).then((r) => r.json())
    .then((response) => {
      setToken(response.response.body.token);
      setRequestedLogin(true);
    })
  };

  const login = async (event) => {
    event.preventDefault();
    debugger;
    await fetch(
      "https://645jzprbjb.execute-api.us-east-2.amazonaws.com/prod/requestLogin",
      {
        headers: 
          {
            "X-API-Key": "zfVHzncqvCaNW2z9HCHrYaBi7px3Td5S8ctufxeN",
          },
        method: "POST",
        body: JSON.stringify({
        email: email,
        code: code, 
        token: token
        })
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={ !requestedLogin ? requestLogin : login }
            noValidate
            sx={{ mt: 1 }}
          >
            {!requestedLogin?

            <TextField
              margin="normal"
              required
              fullWidth
              key="email"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(v) => {
                setEmail(v.target.value);
              }}
            />   
            :
            <TextField
            margin="normal"
            required
            fullWidth
            key="code"
            id="code"
            label="Enter Code"
            name="code"
            autoComplete=""
            autoFocus
            onChange={(v) => {
              setCode(v.target.value);
            }}
          />   
          }

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
