import { ReactElement, useState } from 'react';
import { Navigate, RouteProps} from "react-router-dom";


// to consult the store
import { useAppSelector} from '../../hook.store';
import {RootState} from '../../store'

interface IBaseGuardProps  { // extends RouteProps {
    children: ReactElement;
}

const BaseGuard = ({ children }: IBaseGuardProps) => {

    const logged=useAppSelector((state: RootState) => state.entityA.isLogin)

    const [ isLogged ] = useState<boolean>(logged);

    return isLogged ? children : <Navigate to="/login" />;
}

export default BaseGuard;  
