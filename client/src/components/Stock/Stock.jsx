import React from 'react';
import Styles from './Stock.module.css'

const Stock = (props) => {
    return (
        <div className={Styles.stock}>
            <div className={Styles.name}>{props.name}</div>
            <div className={Styles.bar}>
                <div className={Styles.stockDiv}>
                    <div className={Styles.stockValue} style={{width: `${props.value}%`}}>
                    </div>
                </div>
            </div>
            <div className={Styles.value}>{`${props.value}%`}</div>
            <div className={Styles.delete}>x</div>
        </div>
    );
};

export default Stock;