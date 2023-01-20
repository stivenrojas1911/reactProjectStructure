import { NavLink } from 'react-router-dom';
import './publicRouter.scss'

export const PublicRouteComponent = () => {
   
   
    return (
         <div className="public-route">
             <h1>Soy una ruta publica</h1>
             <nav className="navigation-bar">
                 <NavLink to="/public-route" className={(navData) => navData.isActive ? "selected-url" : "link" }>Public route</NavLink>
                 <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
             </nav>
         </div>
     )
 }
 