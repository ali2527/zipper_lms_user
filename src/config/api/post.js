import axios from "axios";
const { BASE_URL } = require("../constants/api");

async function Post(path, postData, token, paramObj) {
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
    };

    if (paramObj) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        params: { paramObj },
      };
      const response = await axios.post(url, postData, config);
      return response;
    }
    const response = await axios.post(url, postData, header).catch((e) => {

     return(e)
    }
    
      );
    return response;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/signin?error_code=session_expired";
        console.log("SESSION EXPIRED");
      }
    }
  }
}

export { Post };
