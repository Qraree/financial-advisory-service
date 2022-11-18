import React from 'react';
import Styles from './Header.module.css'
import Button from "../Button/Button";
import InfoCell from "../InfoCell/InfoCell";

const Header = () => {
    return (
        <div className={Styles.content}>
            <img src={'/billy.jpg'} className={Styles.avatar}/>
            <div className={Styles.info}>
                <h1>Билли Харрингтон</h1>
                <div className={Styles.userInfo}>
                    <InfoCell firstLine={"100%"} secondLine={"Hello"}/>
                    <InfoCell firstLine={"2M"} secondLine={"bruh"}/>
                    <InfoCell firstLine={"13"} secondLine={"nice"}/>
                </div>
                <Button className={"chatButton"}>Персональный менеджер</Button>
            </div>
        </div>
    );
};

export default Header;