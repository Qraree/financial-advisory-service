import React, {useEffect, useMemo, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {useDispatch} from "react-redux";
import Style from './HomePage.module.css'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Stock from "../../components/Stock/Stock";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import StockAnalytics from "../../components/StockAnalytics/StockAnalytics";

ChartJS.register(ArcElement, Tooltip, Legend);


const HomePage = () => {
    return (
        <div className={Style.mainWrapper}>
            <div className={Style.content}>
            <Navbar/>
            <Header/>
            <StockAnalytics/>
            </div>
        </div>
    );
};

export default HomePage;