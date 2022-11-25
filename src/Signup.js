import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Container,
} from "@material-ui/core";

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
  return (
    <div className={classes.main}>
      <Container maxWidth="lg" style={{ width: "fit-content" }}>
        <Typography className={classes.title}>Signup</Typography>
        <br />
        <br />
        <form action="">
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
            label="Enter First Name"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
            label="Enter Last Name"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
            label="Enter Email"
          />
          <br />
          <br />
          <TextField
            variant="outlined"
            id=""
            className={classes.TextField}
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
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
