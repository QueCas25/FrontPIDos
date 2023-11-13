import Navbar from "../components/ui/Navbar/Navbar";
import {Navigate, Outlet} from "react-router-dom";
import Footer from "../components/ui/Footer/Footer";
import React from "react";
import {useSelector} from "react-redux";

export const NavLayout = () => (
    <>
        <Navbar/>
        <Outlet />
        <Footer/>
    </>
);

export const RequireAuth = ({children})=>{
    const user = useSelector((state) => state.user.value);
    if(!user){
        return <Navigate to="/Login"/>;
    }
    return children
};