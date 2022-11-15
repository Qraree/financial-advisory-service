import axios from 'axios'
import {isUserAuth} from "../features/userSlice";
import {API_URL} from "../config";


export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password,
            })
            console.log(response.data.token)
            dispatch(isUserAuth(true))
            localStorage.setItem('userData', JSON.stringify(response.data.token))
        } catch(e) {
            console.log(e)
        }
    }
}
