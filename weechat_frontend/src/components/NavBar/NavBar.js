import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";
import useAuthInfo from "../../utils/userUtil";

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

  // the six lines below is an example of how to use userUtil to get current user_id
  var userInfo = useAuthInfo();
  const GetInfoButton = () => {
    return (
      <button onClick={() => console.log(userInfo.user_id)}>Get UserID</button>
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
        <div class="inline" className="userSection">
          <Profile />
          <LogInOutButton />
          <GetInfoButton />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
