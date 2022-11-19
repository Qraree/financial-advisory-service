import React from 'react';
import Style from './HomePage.module.css'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import StockAnalytics from "../../components/StockAnalytics/StockAnalytics";

ChartJS.register(ArcElement, Tooltip, Legend);


const HomePage = () => {
    return (
        <div className={Style.mainWrapper}>
            <div className={Style.content}>
            <Navbar chat={false}/>
            <Header/>
            <StockAnalytics/>
            </div>
        </div>
    );
};

export default HomePage;