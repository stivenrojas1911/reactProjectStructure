import { NavLink } from 'react-router-dom';

//import styles
import './home.page.scss';
import './../../sass/generalStyles.scss'

import { useAppSelector} from '../../hook.store';
import {userSelector} from '../../reducers/user/user.selector'

export const HomePage = () => {
    const logged=useAppSelector(userSelector)
    
    return (
        <div className="home" >
           <h1>I am the Home</h1>
           <h1>{process.env.REACT_APP_VARIABLE}</h1>
           
           
           <p>{logged===true?'I am logged':'I am logout'}</p>
           <nav className="navigation-bar">
               <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Home</NavLink>
               <NavLink to="/login" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to login</NavLink>
               <NavLink to="/public-route" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to public route</NavLink>
               <NavLink to="/private-route" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to private route</NavLink>
               <NavLink to="/consumeService" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to Consume service</NavLink>
               <NavLink to="/404" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go 404 page</NavLink>
               
           </nav>
        </div>
    )
}