import {FC, useState} from 'react';
import * as React from "react";
import {AuthService} from "../services/auth.service";
import {toast} from "react-toastify";
import {setTokenToLocalStorage} from "../helpers/localstorage.helper";
import {useAppDispatch} from "../store/hooks";
import {login} from "../store/user/userSlice";
import {useNavigate} from "react-router-dom";

const Auth: FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.registration({email, password})
            if (data) {
                toast.success('Account has been created')
                setIsLogin(!isLogin)
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = await AuthService.login({email, password})
            if (data) {
                console.log('data.token', data.token)
                setTokenToLocalStorage('token', data.token)
                dispatch(login(data))
                toast.success('You logged in')
                navigate('/')
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }
    return (
        <div className={'mt-40 flex flex-col justify-center items-center bg-slate-900 '}>
            <h1 className={'text-center text-xl mb-10'}>
                {isLogin ? 'Login' : 'Registration'}
            </h1>
            <form className={'flex w-1/3 flex-col mx-auto gap-5'}
                  onSubmit={isLogin ? loginHandler : registrationHandler}>
                <input type={'text'} className={'input'} placeholder={'Email'}
                       onChange={(e) => setEmail(e.target.value)}
                       value={email}/>
                <input type={'password'} className={'input'} placeholder={'Password'}
                       onChange={(e) => setPassword(e.target.value)} value={password}/>
                <button className={'btn btn-green mx-auto'} type={'submit'}>
                    Submit
                </button>
            </form>
            <div className={'flex justify-center mt-5'}>
                {isLogin ? (<button className={'text-slate-300 hover:text-white'} onClick={() => setIsLogin(!isLogin)}>
                        You don't have an account?
                    </button>) :
                    (<button className={'text-slate-300 hover:text-white'} onClick={() => setIsLogin(!isLogin)}>
                        Already have an account?
                    </button>)}
            </div>
        </div>

    );
};

export default Auth;
