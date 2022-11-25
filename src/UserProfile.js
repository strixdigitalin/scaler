import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(254,234,234,1) 100%, rgba(254,215,215,1) 100%)",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
  },
  textBlock: {
    [theme.breakpoints.down(500)]: {
      textAlign: "center",
      margin: "30px 0 -70px 0",
    },
  },
  title1: {
    fontFamily: "Crimson Text",
    fontWeight: "bold",
    fontSize: "44px",
    lineHeight: "102.7%",
    color: "#011814",
  },
  button: {
    fontSize: "24px",
    color: "#343A3D",
    width: "170px",
    height: "62px",
    background: "#CF0720",
    borderRadius: "8px",
    color: "#fff",
    "&:hover": {
      color: "#CF0720",
      border: "1px solid #D0021B",
      boxSizing: "border-box",
      borderRadius: "8px",
      background: "#fff",
    },
  },
  subHeading: {
    fontWeight: "500",
    fontSize: "26px",
    color: "#000",
  },
  subTitle: {
    fontWeight: "bold !important",
    fontStyle: "italic",
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap-reverse",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <div className={classes.textBlock}>
          <Typography variant="h2" className={classes.title1}>
            Training Wheels
          </Typography>
          <br />
          <Typography style={{textAlign: "center"}} variant="h4">User Profile</Typography>
        </div>
      </Box>

      <Box>
        <Typography variant="h5" style={{padding: 20}} className={classes.subHeading}>
          Name : BobPrep Chaprawala
        </Typography>

        <Typography style={{padding: 20}} variant="h5">
          Founded and designed by one of the top GMAT tutors, BobPrep is what
          GMAT Prep should be. At BobPrep we explain complicated concepts in a
          straightforward easy-to-understand way accompanied by practice
          problems that help you master the material. Learn the same techniques
          and strategies that have been used by countless students to gain
          admission into MBA programs.
        </Typography>
        
        <br />
      </Box>

      <Box
        sx={{
          // padding: "2rem",
          display: "flex",
          background: "#eff5f8",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* Left Text Section */}
        <Box width="500px">
          <Typography variant="h5" style={{padding: 20}} className={classes.subHeading}>
            Course Opted : BSC EX 2
          </Typography>
          <br />
          <Typography variant="body1">
            Foundations is for students looking to learn the core concepts
            needed for the GMAT quant and verbal sections. This course is the
            perfect building block for students who want to get the most out of
            our advanced materials later on. Used alone, Foundations can get you
            a GMAT score of up to 550.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default UserProfile;
