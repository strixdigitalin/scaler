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
import { checkAuth, getStore, signup } from "./APIs/Api";
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
const Signup = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (getStore(checkAuth) == "true") window.location.href = "/";
  }, []);
  const checkEmpty = (name) => {
    if (!formData[name]) return alert(name + "is required");
  };

  const submitSignup = (e) => {
    e.preventDefault();
    checkEmpty("name");
    checkEmpty("email");
    checkEmpty("password");
    checkEmpty("mobile");
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (re.test(formData.password)) {
    } else {
      return alert(
        "Password must be 8 charecter long, must have one uppercase, lowercase and a digit."
      );
    }

    signup(
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile,
      },
      (res) => {
        console.log(res, "<<<<<< res");
        alert(res.message);
        if (res.user) {
          navigate("/login");
        }
      }
    );
  };
  return (
    <div className={classes.main}>
      <Container maxWidth="lg" style={{ width: "fit-content" }}>
        <Typography className={classes.title}>Signup</Typography>
        <br />
        <br />
        <form action="" onSubmit={submitSignup}>
          <TextField
            variant="outlined"
            id=""
            required={true}
            className={classes.TextField}
            name="name"
            onChange={(e) => handleChange("name", e.target.value)}
            label="Enter First Name"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id=""
            type="number"
            name="mobile"
            required={true}
            onChange={(e) => handleChange("mobile", e.target.value)}
            className={classes.TextField}
            label="Enter Mobile number"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            required={true}
            id=""
            name="email"
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            className={classes.TextField}
            label="Enter Email"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            required={true}
            id=""
            className={classes.TextField}
            name="password"
            onChange={(e) => handleChange("password", e.target.value)}
            label="Password"
          />
          <br />
          <br />
          <a href="/login" style={{ color: "#CF0720" }}>
            Back to Login?
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
            type="submit"
          >
            Signup
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
