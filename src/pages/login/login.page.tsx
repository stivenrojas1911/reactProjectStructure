

import { useAppDispatch} from '../../hook.store';
import { useAppSelector} from '../../hook.store';
// import selector of login state
import {userSelector} from '../../reducers/user/user.selector'


import {userIsLoggeed, userNotLogged} from '../../reducers/user/user.reducer';
import { NavLink } from 'react-router-dom';

//import form component
import {FormComponent} from './../../components/form/form.component'

//import styles
import './login.page.scss'


export const LoginPage = () => {

    

    const logged=useAppSelector(userSelector)
    
    const dispatch = useAppDispatch();
    
 
     return (
         <div className="login">
             <h1>Soy la pantalla de login</h1>

             <nav className="navigation-bar">
                 <NavLink to="/login" className={(navData) => navData.isActive ? "selected-url" : "link" }>Login</NavLink>
                 <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
             </nav>
             
             <p>is logged: {logged===true?'Logged':'not logged'}</p>

             <FormComponent/>
 
             
             <button onClick={()=>{dispatch(userNotLogged())}} className='button' >Log out</button>
             
             
         </div>
     )
 }