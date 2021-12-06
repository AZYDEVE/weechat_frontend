import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// https://reactjs.org/docs/hooks-custom.html
function useAuthInfo() {
  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0();

  // the last field user_metadata is for future use, currently it is undefined
  const [userInfo, setUserInfo] = useState({
    email: "",
    user_id: "",
    user_name: "",
    user_metadata: "",
  });

  // https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#get-an-access-token
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
      var accessToken = null;

      try {
        accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
      } catch (e) {
        accessToken = await getAccessTokenWithPopup({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
      }

      try {
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();
        const user_info = {
          email: user.email,
          user_id: user.sub,
          user_name: user.nickname,
          user_metadata,
        };
        setUserInfo(user_info);
      } catch (e) {
        console.log(e.message);
      }
    };

    if (isAuthenticated) {
      getUserMetadata();
    }
  }, [user, isAuthenticated, getAccessTokenSilently, getAccessTokenWithPopup]);

  return userInfo;
}

export default useAuthInfo;
