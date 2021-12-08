import axios from "axios";

// https://auth0.com/docs/users/user-search/retrieve-users-with-get-users-endpoint
// this hardcoded api_token will be expired on Dec 17 2021 at noon
const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
const api_token = process.env.REACT_APP_AUTH0_MGMT_API_ACCESS_TOKEN || "";

const getAllUsers = async () => {
  const options = {
    method: "GET",
    url: `https://${domain}/api/v2/users`,
    params: { search_engine: "v3" },
    headers: {
      authorization: `Bearer ${api_token}`,
    },
  };

  return axios.request(options).then(function (response) {
    // console.log(response.data);
    return response.data;
  });
};

export default getAllUsers;
