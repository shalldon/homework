import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header, Footer, LeftOne, LeftTwo, Right, Content } from "./components";

function App() {
  const theme = 'default';

  return (
    <div className={`app ${theme}`}>
      <Header />
      <LeftOne />
      <LeftTwo />
      <Content />
      <Right />
      <Footer />
    </div>
  );
}

export default App;
