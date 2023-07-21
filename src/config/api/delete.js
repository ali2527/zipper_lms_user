//axios imports
const axios = require("axios");

//constants imports
const { BASE_URL } = require("../constants/api");

//main function
async function Delete(path, token, deleteData, paramObj) {
  let url = BASE_URL + path;
  if (paramObj) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      params: { paramObj },
    };
    const { data } = await axios.delete(url, deleteData, config);
    return data;
  }
  const { data } = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: deleteData
  })
  return data;
}

export { Delete };
