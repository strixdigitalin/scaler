const getCourses = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:5000/course", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

const login = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: payload.email,
    password: payload.password,
    userType: payload.userType,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:5000/user/login", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export { getCourses, login };
