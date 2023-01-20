import { ReactElement, useState } from 'react';
//import {  RouteProps} from "react-router-dom";
import { Navigate} from "react-router-dom";


// to consult the store
import { useAppSelector} from '../../hook.store';
import {RootState} from '../../store'

interface IBaseGuardProps  { // extends RouteProps {
    children: ReactElement;
}

const BaseGuard = ({ children }: IBaseGuardProps) => {

    const logged=useAppSelector((state: RootState) => state.user.isLogin)

    const [ isLogged ] = useState<boolean>(logged);

    return isLogged ? children : <Navigate to="/login" />;
}

export default BaseGuard;  
