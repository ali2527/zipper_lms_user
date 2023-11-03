//axios imports
import axios from "axios";

//constants imports
const { BASE_URL } = require("../constants/api.js");

async function Get(path, token, queryObj, abortController = {}) {
  
  console.log("QueryObjheck", queryObj)
  try {
    let url = BASE_URL + path;
    const header = {
      headers: token
        ? {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
        : {
          "Content-Type": "application/json",
        },
      signal: abortController.signal
    };
    if (queryObj) {
      let queryString = "";
      Object.keys(queryObj).forEach((val) => {
        if (queryObj[val]?.length > 0) {
          if (queryString?.length > 0) {
            queryString += `&${val}=${queryObj[val]}`;
          } else {
            queryString += `?${val}=${queryObj[val]}`;
          }
        }
      });

      console.log("Query String", queryString)
      url += queryString;
    }
    const { data } = await axios.get(url, header);


    return data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear()
        // dispatch( removeUser() )
        window.location.href = "/signin"
      }
    }
    return error
  }
}

export { Get };