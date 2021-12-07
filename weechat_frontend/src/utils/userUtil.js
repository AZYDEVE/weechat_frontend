import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// https://reactjs.org/docs/hooks-custom.html
function useAuthInfo() {
  const { user, isAuthenticated } = useAuth0();

  const [userInfo, setUserInfo] = useState({
    email: "",
    user_id: "",
    user_name: "",
  });

  useEffect(() => {
    const getUserData = () => {
      const user_info = {
        email: user.email,
        user_id: user.sub,
        user_name: user.nickname,
      };
      setUserInfo(user_info);
    };

    if (isAuthenticated) {
      getUserData();
    }
  }, [user, isAuthenticated]);

  return userInfo;
}

export default useAuthInfo;
