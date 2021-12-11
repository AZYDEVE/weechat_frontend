import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Container } from "react-bootstrap";
import "./navbar.css";

const NavBar = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const LogInOutButton = () => {
    if (!isAuthenticated) {
      return (
        <button
          style={{
            width: "15vh",
            height: "3vh",
            marginTop: "0.2vh",
            marginBottom: "0.5vh",
          }}
          onClick={() => loginWithRedirect()}>
          Log In/Register
        </button>
      );
    } else {
      return (
        <button
          style={{
            width: "15vh",
            height: "3vh",
            marginTop: "0.2vh",
            marginBottom: "0.5vh",
          }}
          onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
      );
    }
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
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
