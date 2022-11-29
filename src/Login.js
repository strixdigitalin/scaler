import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Container,
} from "@material-ui/core";
import { checkAuth, getStore, login, userData, USER_DATA } from "./APIs/Api";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "rgb(255,255,255)",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(254,234,234,1) 100%, rgba(254,215,215,1) 100%)",
    width: "100%",
    height: "auto",
    paddingBottom: "100px",
    paddingTop: "100px",
    minHeight: "50vh",
    alignSelf: "center",
  },
  title: {
    fontFamily: "Proxima Nova",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "44px",
    lineHeight: "51px",
    color: "#011814",
  },
  TextField: {
    width: "280px",
    "& label.Mui-focused": {
      color: "grey",
      paddingTop: "10px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: " #CF0720",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: " #CF0720",
      },
      "&:hover fieldset": {
        borderColor: " #CF0720",
      },
      "&.Mui-focused fieldset": {
        borderColor: " #CF0720",
      },
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const submit = () => {
    login(formData, async (res) => {
      console.log(res);
      if (res.user) {
        navigate("/");
        await localStorage.setItem(checkAuth, JSON.stringify("true"));
        await localStorage.setItem(USER_DATA, JSON.stringify(res.user[0]));
        // await localStorage.setItem(userData, "kljlkjkljlkj");
      } else {
        alert(res.message);
      }
    });
  };
  const hanldeChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (getStore(checkAuth) == "true") window.location.href = "/";
  }, []);

  return (
    <div className={classes.main}>
      <Container maxWidth="lg" style={{ width: "fit-content" }}>
        <Typography className={classes.title}>Login</Typography>
        <br />
        <br />
        <form action="">
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
            placeholder="user/admin"
            label="Enter User type"
            onChange={(e) => {
              console.log(e.target.value);
              hanldeChange("userType", e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
            label="Enter Email"
            onChange={(e) => {
              console.log(e.target.value);
              hanldeChange("email", e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
            type="password"
            label="Password"
            onChange={(e) => {
              console.log(e.target.value);
              hanldeChange("password", e.target.value);
            }}
          />
          <br />
          <br />
          <a href="/signup" style={{ color: "#CF0720" }}>
            Don't have an account?
          </a>
          <br />
          <br />
          <Button
            variant="contained"
            style={{
              background: "#CF0720",
              color: "#fff",
              fontSize: "17px",
              padding: "10px 30px",
            }}
            onClick={submit}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
