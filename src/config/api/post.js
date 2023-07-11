//axios imports
const axios = require("axios");

//constants imports
const { BASE_URL } = require("../constants/api");

//main function
async function Post(path, postData, token, paramObj) {
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
    const { data } = await axios.post(url, postData, config);
    return data;
  }
  const { data } = await axios.post(url, postData, header);
  return data;
}

export { Post };
