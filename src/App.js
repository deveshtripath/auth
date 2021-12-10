// import { Typography, Button, Input, Box, FormControl, InputLabel, FormHelperText, ImageList, Container, Grid, ImageListItem, Checkbox, FormControlLabel, TextField, Link, TextareaAutosize } from "@material-ui/core";
import SignIn from "./SignIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from "./Login";

function App() {


  return (
    // <SignIn/>
    <Router>
      <div>
        <Routes>
          <Route exact path="/signin" element={<SignIn/>}/>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
