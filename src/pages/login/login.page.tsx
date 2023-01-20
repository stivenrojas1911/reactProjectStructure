

import { useAppDispatch} from '../../hook.store';
import { useAppSelector} from '../../hook.store';
// import selector of login state
import {entityASelect} from '../../reducers/user/user.selector'



import {userIsLoggeed, userNotLogged} from '../../reducers/user/user.reducer';
import { NavLink } from 'react-router-dom';

import './login.scss'


export const LoginPage = () => {

    

    const logged=useAppSelector(entityASelect)
    
    const dispatch = useAppDispatch();
    
 
     return (
         <div className="login">
             <h1>Soy la pantalla de login</h1>
             <p>is logged: {logged===true?'Logged':'not logged'}</p>
 
             <button onClick={()=>{
                                   dispatch(userIsLoggeed())
                                   
                                   }} >Login</button>
             <button onClick={()=>{dispatch(userNotLogged(34))}} >Log out</button>
             <nav className="navigation-bar">
                 <NavLink to="/login" className={(navData) => navData.isActive ? "selected-url" : "link" }>Login</NavLink>
                 <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
             </nav>
             
         </div>
     )
 }