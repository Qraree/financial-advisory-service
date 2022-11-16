import React from 'react';
import {useDispatch} from "react-redux";
import Style from './HomePage.module.css'
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const HomePage = () => {
    const dispatch = useDispatch()
    return (
        <div className={Style.mainWrapper}>
            <div className={Style.content}>
            <Navbar/>
            <Header/>
            </div>
        </div>
    );
};

export default HomePage;