import React from "react";
import "./App.css";
import ChatPage from "./chatPage/ChatPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ChatPage />
      </div>
    </>
  );
}

export default App;
