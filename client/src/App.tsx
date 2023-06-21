import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {useAppDispatch} from "./store/hooks";
import {getTokenFromLocalStorage} from "./helpers/localstorage.helper";
import {toast} from "react-toastify";
import {AuthService} from "./services/auth.service";
import {login, logout} from "./store/user/userSlice";
import {useEffect} from "react";
import axios from "axios";

function App() {
    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${getTokenFromLocalStorage()}`
        config.baseURL = 'http://localhost:3001/api'
        return config
    })
    const dispatch = useAppDispatch()
    const checkAuth = async () => {
        const token = getTokenFromLocalStorage()
        try {
            if (token) {
                const data = await AuthService.getProfile()

                if (data) {
                    dispatch(login(data))
                } else {
                    dispatch(logout())
                }
            }
        } catch (err) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }
    useEffect(() => {
        checkAuth()
    }, []);

    return (
        <RouterProvider router={router}/>
    )
}

export default App
