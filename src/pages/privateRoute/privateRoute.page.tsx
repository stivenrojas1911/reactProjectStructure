
import { NavLink, Outlet } from 'react-router-dom';
import './privateRoute.scss'

export const PrivateRoutePage = () => {

    return (
        <div className="private-route">
            <h1>Soy una ruta Privada</h1>
            <nav className="navigation-bar">
                <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
                <NavLink to="/private-route" className={(navData) => navData.isActive ? "selected-url" : "link" } end >Private route</NavLink>
                <NavLink to="/private-route/nested-route-one" className={(navData) => navData.isActive ? "selected-url" : "link" }>Nested route #1</NavLink>
                <NavLink to="/private-route/nested-route-two" className={(navData) => navData.isActive ? "selected-url" : "link" }>Nested route #2</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}