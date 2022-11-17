import React from 'react';
import Styles from './Stock.module.css'

const Stock = (props) => {
    return (
        <div className={Styles.stock}>
            <div>{props.name}</div>
            <div className={Styles.stockDiv}>
                <div className={Styles.stockValue}>

                </div>
            </div>
            <div>{`${props.value}%`}</div>
            <div>x</div>
        </div>
    );
};

export default Stock;