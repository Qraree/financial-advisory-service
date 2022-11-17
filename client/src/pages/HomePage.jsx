import React, {useEffect, useMemo, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import {useDispatch} from "react-redux";
import Style from './HomePage.module.css'
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Stock from "../components/Stock/Stock";

ChartJS.register(ArcElement, Tooltip, Legend);


const HomePage = () => {
    const [stockList, setStockList] = useState([{stock: 'hello', value: 15}])
    const [stock, setStock] = useState('')
    const [value, setValue] = useState('')



    const [sum, setSum] = useState(0)


    const data = {
        labels: ['hello'],
        datasets: [
            {
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [15],

            },
        ],
    }



    const dispatch = useDispatch()

    const valueSum = useMemo(() => {
        let sum = 0
        for (let stock of stockList) {
            sum += Number(stock.value)
        }
        setSum(sum)
    }, [stockList])

    function addStock() {
        if (stockList.length !== 10) {
            setStockList([...stockList, {stock: stock, value: value}])
            setStock('')
            setValue('')
            data.labels.push(stock)
            data.datasets.push(Number(value))
        } else {
            alert('Не больше 10 позиций в портфеле')
        }
    }

    function stockInput(e) {
        setStock(e.target.value)
    }

    function valueInput(e) {
        setValue(e.target.value)
    }

    return (
        <div className={Style.mainWrapper}>
            <div className={Style.content}>
            <Navbar/>
            <Header/>
            <div className={Style.headerDiv}>
                <h1>Аналитика</h1>
            </div>
                <div className={Style.dataSection}>
                    <div className={Style.chart}>
                    <Doughnut data={data} width={"200px"} height={"200px"} options={{ maintainAspectRatio: false }}/>
                    </div>
                    <div className={Style.stockList}>
                        <input type={'text'} value={stock} onChange={(e) => stockInput(e)} placeholder={'Название'}/>
                        <input type={'text'} value={value} onChange={(e) => valueInput(e)} placeholder={'Количество'}/>
                        <button onClick={addStock}>Add stock</button>
                        {stockList.map(stock => (
                            <Stock name={stock.stock} value={Math.round(stock.value / sum * 100 * 10) / 10} />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;