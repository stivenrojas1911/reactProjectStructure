import { ReactElement, useState } from 'react';
//import {  RouteProps} from "react-router-dom";
import { Navigate} from "react-router-dom";


// to consult the store
import { useAppSelector} from '../../hook.store';
import {userSelector} from './../../reducers/user/user.selector';

interface IBaseGuardProps  { // extends RouteProps {
    children: ReactElement;
}

const BaseGuard = ({ children }: IBaseGuardProps) => {

    const logged=useAppSelector(userSelector)

    const [ isLogged ] = useState<boolean>(logged);

    return isLogged ? children : <Navigate to="/login" />;

}

export default BaseGuard;  
