export const checkAuth = "IS_USER_LOGGED_IN";
export const userData = "SCALER_USER_DATA";
export const USER_DATA = "SCALER_USER_DATA";
export const base_url = "hhttps://scaler-back.herokuapp.com";

const getStore = (name) => JSON.parse(localStorage.getItem(name));
const getCourses = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(base_url + "/course", requestOptions)
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

  fetch(base_url + "/user/login", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

const signup = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: payload.email,
    name: payload.name,
    mobile: payload.mobile,
    userType: "user",
    password: payload.password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(base_url + "/user/signup", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export { getCourses, login, signup, getStore };
