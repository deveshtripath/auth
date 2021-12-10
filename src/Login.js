import React from 'react'
import { Typography, Button, Input, Box, FormControl, InputLabel, FormHelperText, ImageList, Container, Grid, ImageListItem, Checkbox, FormControlLabel, TextField, Link, TextareaAutosize } from "@material-ui/core";

// const mystyle = {
//   @media only screen and (max-width: 600px) {
//     body {
//       background-color: lightblue;
//     }
//   }
// }

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";




function Login() {

    
    
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

    const logout = async () => {
        await signOut(auth);
      };

    return (
        <div>
            <Container style={{ margin: "10px" }}>
      <Grid container spacing={2} style={{ disply: "flex", justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={6} style={{ disply: "flex" }}>
          <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={650}>
            <img height="100%" width="100%" src='https://images.unsplash.com/photo-1639021110994-784fa4a72542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60' alt="" />
          </ImageList>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ margin: "10px" }}>
            <Typography component="h1" variant="h3">
              Login To .
            </Typography>
            {/* <Typography component="h5" variant="h6">
              Sign in to this page for procced further.
            </Typography> */}
          </Box>
          <hr
            style={{
              backgroundColor: '#a09f9f',
              height: 1
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          />
          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            onClick={login}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2" style={{ color: "red", textTransform: "capitalize" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          
      <h4> User Logged In: </h4>
      {user?.email ? <h1>You have login</h1> : <h1>You have not login</h1>}

      <Button variant="outlined" onClick={logout}> Sign Out </Button>
        </Grid>
      </Grid>

    </Container>
        </div>
    )
}

export default Login
