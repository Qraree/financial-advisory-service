import React from 'react';
import Styles from './Navbar.module.css'
import {isUserAuth} from "../../features/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Navbar = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className={Styles.navbar}>
            <img src="/logo2.svg" className={Styles.logo}/>
            {!props.chat
            ? (
                <img src="/exit.svg" className={Styles.logo} onClick={() => dispatch(isUserAuth(false))}/>
              )
            : (
                <div className={Styles.profileLogo} onClick={() => navigate('home')}>
                    <div className={Styles.logoText}>Профиль</div>
                    <img src="/userIcon.svg" className={Styles.userLogo}/>
                </div>
              )
            }
        </div>
    );
};

export default Navbar;