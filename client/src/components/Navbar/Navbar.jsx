import React from 'react';
import Styles from './Navbar.module.css'
import {isUserAuth} from "../../features/userSlice";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div className={Styles.navbar}>
            <img src="/logo2.svg" className={Styles.logo}/>
            <img src="/exit.svg" className={Styles.logo} onClick={() => dispatch(isUserAuth(false))}/>
        </div>
    );
};

export default Navbar;