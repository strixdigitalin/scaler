// import React from "react";
import React from "react";

function CourseCard({ item }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <img
        src={item?.courseImageImage}
        width="300px"
        style={{ borderRadius: "10px" }}
      />
      <div
        style={{
          marginTop: "20px",
          fontSize: "18px",
        }}
      >
        {item?.courseName}
        <br />
        Price: {"  "}${item?.courseAmount}
      </div>
    </div>
  );
}

export default CourseCard;
