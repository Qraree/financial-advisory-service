import React from 'react';
import Styles from './InfoCell.module.css'

const InfoCell = (props) => {
    return (
        <div className={Styles.cell}>
            <div className={Styles.firstLine}>{props.firstLine}</div>
            <div className={Styles.secondLine}>{props.secondLine}</div>
        </div>
    );
};

export default InfoCell;