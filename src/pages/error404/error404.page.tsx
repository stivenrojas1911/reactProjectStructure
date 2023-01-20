
import { NavLink } from 'react-router-dom';
import './error404.scss'

export const Error404Page = () => {
    return (
        <div className="error-404">
            <h1>pagina no encontrada</h1>
            <nav className="navigation-bar">
                <NavLink to="/404" className={(navData) => navData.isActive ? "selected-url" : "link" }>Error 404</NavLink>
                <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
            </nav>
        </div>
    )
}