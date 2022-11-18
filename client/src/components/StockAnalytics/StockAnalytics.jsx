import React, {useMemo, useState} from 'react';
import Styles from './StockAnalytics.module.css'
import Style from "../../pages/HomePage/HomePage.module.css";
import {Doughnut} from "react-chartjs-2";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Stock from "../Stock/Stock";
import {useDispatch} from "react-redux";

const StockAnalytics = () => {
    const [stockList, setStockList] = useState([{stock: 'Газпром', value: 15}])
    const [stock, setStock] = useState('')
    const [value, setValue] = useState(0)
    const [sum, setSum] = useState(0)


    const data = {
        labels: stockList.map(stock => stock.stock),
        datasets: [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(238,230,55,0.2)',
                    'rgba(33,245,128,0.34)',
                    'rgba(102,255,242,0.2)',
                    'rgba(230,64,255,0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(238,230,55,1)',
                    'rgba(33,245,128,1)',
                    'rgba(102,255,242,1)',
                    'rgba(230,64,255,1)',
                ],
                borderWidth: 2,
                data: stockList.map(stock => stock.value),

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
        if (value < 1 || /[^0-9]/.test(String(value))) {
            return alert('Введите положительное количество акций')
        }
        if (stockList.length !== 10) {
            setStockList([...stockList, {stock: stock, value: value}])
            setStock('')
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
        <>
            <div className={Style.headerDiv}>
                <h1>Аналитика</h1>
            </div>
            <div className={Style.dataSection}>
                <div className={Style.chart}>
                    <Doughnut data={data} width={"200px"} height={"200px"} options={{ maintainAspectRatio: false }}/>
                </div>
                <div className={Style.stockList}>
                    <h2>Акции</h2>
                    <div className={Style.inputs}>
                        <Input
                            type={'text'}
                            value={stock}
                            onChange={(e) => stockInput(e)}
                            className={"stockInput"}
                            placeholder={"Название"}
                        />
                        <Input
                            type={'text'}
                            value={value}
                            onChange={(e) => valueInput(e)}
                            className={"stockInput"}
                            placeholder={"Количество"}
                        />
                    </div>
                    <Button onClick={addStock} className={"buyStock"}>Купить</Button>
                    <div className={Style.stockMap}>
                        {stockList.map(stock => (
                            <Stock name={stock.stock} value={Math.round(stock.value / sum * 100 * 10) / 10} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default StockAnalytics;
