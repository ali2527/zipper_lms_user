//axios imports
const axios = require("axios");

//constants imports
const { BASE_URL } = require("../constants/api.js");

//main function
async function Get(path, token, paramObj) {
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
  };

  if (paramObj) {
    let queryString = "";
    Object.keys(paramObj).map((val) => {
      if (paramObj[val].length > 0) {
        if (queryString.length > 0) {
          queryString += `&${val}=${paramObj[val]}`;
        } else {
          queryString += `?${val}=${paramObj[val]}`;
        }
      }
    });

    url += queryString;
    header.headers.params = paramObj;
  }
  const { data } = await axios.get(url, header);
  return data;
}

export { Get };