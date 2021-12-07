import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// https://reactjs.org/docs/hooks-custom.html
function useAuthInfo() {
  const { user, isAuthenticated } = useAuth0();

  const [currentUserInfo, setCurrentUserInfo] = useState({
    email: "",
    user_id: "",
    nickname: "",
  });

  useEffect(() => {
    const getOneUser = () => {
      const one_user = {
        email: user.email,
        user_id: user.sub,
        nickname: user.nickname,
      };
      setCurrentUserInfo(one_user);
    };

    if (isAuthenticated) {
      getOneUser();
    }
  }, [user, isAuthenticated]);

  return currentUserInfo;
}

export default useAuthInfo;
