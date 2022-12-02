import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import CourseCard from "./Components/CourseCard";
import { useState } from "react";
import { useEffect } from "react";
import { getOrdersById, getStore, USER_DATA } from "./APIs/Api";
import { fontWeight } from "@mui/system";

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
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    console.log(getStore(USER_DATA)._id, "<<<this is user id");
    getOrdersById(getStore(USER_DATA)._id, (res) => {
      console.log(res, "<<<<this is res");
      setAllCourses(res.orders);
    });
  }, []);

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
            Your Profile
          </Typography>
          <br />
          {/* <Typography style={{ textAlign: "center" }} variant="h4">
            User Profile
          </Typography> */}
        </div>
      </Box>

      <Box>
        <Typography
          variant="h5"
          style={{ padding: 20 }}
          className={classes.subHeading}
        >
          Name : {getStore(USER_DATA).name}
        </Typography>

        <Typography style={{ padding: 20 }} variant="h5"></Typography>

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
          <Typography
            variant="h5"
            style={{ padding: 20 }}
            className={classes.subHeading}
          >
            Course Purchased
          </Typography>
          <br />
          <Typography variant="body1">
            <div className="course-wrap">
              {allCourses.length == 0 && <div> No course purchased yet </div>}
              {/* <CourseCard /> */}
              {allCourses.length && (
                <>
                  {allCourses.map((item) => {
                    return <CourseCard item={item} />;
                  })}
                </>
              )}
            </div>
          </Typography>
        </Box>
        <Box width="500px">
          <Typography
            variant="h5"
            style={{ padding: 20, marginTop: "20px" }}
            className={classes.subHeading}
          >
            All Orders
          </Typography>
          <br />
          <Typography variant="body1" style={{ marginBottom: "60px" }}>
            <div className="course-wrap">
              {allCourses.length == 0 && <div> No course purchased yet </div>}
              <div className="table-cover">
                <div
                  className="table-cover-row"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <div className="table-cover-item">Sr no </div>
                  <div
                    className="table-cover-item"
                    style={{
                      width: "300px",
                    }}
                  >
                    Course Name{" "}
                  </div>
                  <div className="table-cover-item">Payment Id </div>
                  <div className="table-cover-item">Date </div>
                </div>
                {allCourses.map((item, key) => {
                  const d = new Date(item.timeStamp);
                  return (
                    <div className="table-cover-row">
                      <div className="table-cover-item">{key + 1} </div>
                      <div
                        className="table-cover-item"
                        style={{
                          width: "300px",
                        }}
                      >
                        {item.courseName}
                      </div>
                      <div className="table-cover-item">
                        {item.razorpayOrderId}{" "}
                      </div>
                      <div className="table-cover-item">
                        {d.toLocaleString()}{" "}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
