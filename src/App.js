import React from "react";
import {Route, Routes} from "react-router-dom";
import {NavLayout, RequireAuth} from "./functions/Auth";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import Habitaciones from "./components/Habitaciones/Habitaciones";

function App() {

  return (
      <Routes >
        <Route element={<NavLayout/>}>
          <Route path="/" element={<Home/>}/>
            <Route path="/Habitaciones" element={<Habitaciones/>}/>
        </Route>
        <Route path="/Login" element={<Login/>} />
          <Route path="/Registro" element={<Registro/>} />
      </Routes>
  );
}

export default App;
