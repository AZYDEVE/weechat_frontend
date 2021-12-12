import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";
import useAuthInfo from "../../utils/userUtil";
import getAllUsers from "../../utils/auth0API";

const NavBar = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const LogInOutButton = () => {
    if (!isAuthenticated) {
      return (
        <button onClick={() => loginWithRedirect()}>Log In/Register</button>
      );
    } else {
      return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      );
    }
  };

  var userInfo = useAuthInfo();

  const GetInfoButton = () => {
    return (
      <button
        onClick={() => {
          // an example of how to use userUtil to get current user_id
          console.log(userInfo.user_id);

          // an example of how to use getAllUsers to get a userList
          // note that getAllUsers() is an async function
          // you must use ".then" or other methods to cope with it
          // otherwise the promise is pending, you will get undefined
          getAllUsers().then((userList) => {
            for (let i = 0; i < Object.keys(userList).length; i++) {
              var userObj = userList[i];
              console.log(
                userObj.user_id + " " + userObj.nickname + " " + userObj.email
              );
            }
          });
        }}>
        Get All Users
      </button>
    );
  };

  const Profile = () => {
    if (isLoading) {
      return <div>Loading ...</div>;
    }
    return isAuthenticated && <div>{user.name}</div>;
  };

  return (
    <Navbar className="navbar" bg="light" sticky="top">
      <Container className="navbarContainer">
        <Navbar.Brand className="brand">WeeChat</Navbar.Brand>
        <div className="userSection">
          <Profile />
          <LogInOutButton />
          <GetInfoButton />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
