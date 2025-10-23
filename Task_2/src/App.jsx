import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/header/navbar";
import Banner from "./components/section/banner";
import Text from "./components/section/text";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Button } from "bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
  return (
  <>
  <NavBar/>
  <Banner/>
  <Text/>
  
  </>
  )

  
}

export default App;
