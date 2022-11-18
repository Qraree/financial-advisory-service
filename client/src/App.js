import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import { useSelector } from "react-redux";

function App() {

    const userAuth = useSelector(state => state.user.userAuth)

  return (
        <BrowserRouter>
            {userAuth ? (
                <Routes>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/*'} element={<HomePage/>}/>
                </Routes>
            ) : (
                <Routes>
                    <Route path={'/auth'} element={<HomePage/>}/>
                    <Route path={'/*'} element={<HomePage/>}/>
                </Routes>)}
        </BrowserRouter>
  );
}

export default App;
