import React from 'react';
import Styles from './Header.module.css'
import Button from "../Button/Button";
import InfoCell from "../InfoCell/InfoCell";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={Styles.content}>
            <img src={'/billy.jpg'} className={Styles.avatar}/>
            <div className={Styles.info}>
                <h1>Билли Харрингтон</h1>
                <div className={Styles.userInfo}>
                    <InfoCell firstLine={"100%"} secondLine={"Hello"}/>
                    <InfoCell firstLine={"2M"} secondLine={"Good"}/>
                    <InfoCell firstLine={"13"} secondLine={"nice"}/>
                </div>
                <Button className={"chatButton"} onClick={() => navigate('/chat')}>Персональный менеджер</Button>
            </div>
        </div>
    );
};

export default Header;