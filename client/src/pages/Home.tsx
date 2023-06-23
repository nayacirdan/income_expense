import {FC} from 'react';
import {useAuth} from "../hooks/useAuth";
import {Link} from "react-router-dom";

const Home: FC = () => {
    const isAuth = useAuth()
    return (
        <div className={'mt-16 flex flex-col items-center justify-center'}>
            <h1 className={'text-2xl'}>This is the app for tracking your income and expense</h1>
            <div className={'text-white mt-2'}>You can manage your <Link to={'/categories'} className={'underline'}>categories</Link>, add <Link to={'/transactions'} className={'underline'}>transactions</Link> linked to some category, see the chart and table with all transactions</div>
            {!isAuth && <div className={'mt-16 flex items-center justify-center flex-col text-xl'}>First you need to {' '}<Link to={'/auth'} className={'underline'}>Log In or Register</Link></div>}
        </div>

    );
};

export default Home;
