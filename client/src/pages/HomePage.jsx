import React from 'react';
import Button from "../components/Button/Button";
import {useDispatch} from "react-redux";
import {isUserAuth} from "../features/userSlice";

const HomePage = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Button
                classname={'signOutButton'}
                onClick={() => dispatch(isUserAuth(false))}>Назад</Button>
        </div>
    );
};

export default HomePage;