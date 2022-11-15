import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./Form.module.css";
import {login} from "../../actions/userActions";
import {useState} from "react";
import {useDispatch} from "react-redux";



const Form = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onLoginHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
      <div className={classes.container}>
          <div className={classes.containerLogo}>
              <img className={classes.logo} src="/logo.svg"/>
              <span className={classes.textName}>ОТКРЫТИЕ</span>
          </div>
          <div className={classes.textInst}>
              Инвестиции
          </div>
          <div className={classes.textInfo}>
              Вход в личный кабинет
          </div>
          <span className={classes.label}>Логин</span>
          <input
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={"input"}/>
          <span className={classes.label}>Пароль</span>
          <input
              type={"text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={"input"}/>
          <div>
              <Button type="loginButton" onClick={(e) => onLoginHandler(e)}>
                  Войти
              </Button>
              <Button type="signInButton">
                  Зарегистироваться
              </Button>
          </div>
          <div className={classes.footer}>

          </div>
      </div>
  )
}

export default Form;
