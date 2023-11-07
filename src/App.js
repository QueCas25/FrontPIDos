import React from "react";
import {Route, Routes} from "react-router-dom";
import {NavLayout, RequireAuth} from "./functions/Auth";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";

function App() {

  return (
      <Routes >
        <Route element={<NavLayout />}>
          <Route path="/Inicio" element={<Home/>} />
        </Route>
        <Route path="/Login" element={<Login/>} />
          <Route path="/Registro" element={<Registro/>} />
      </Routes>
  );
}

export default App;
