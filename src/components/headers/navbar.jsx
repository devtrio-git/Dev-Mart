import React, { useContext } from 'react'
import styles from './navbar.module.scss';
import searchIcon from '../../assets/icons/search-icon.svg';
import cartIcon from '../../assets/icons/cart-icon.svg';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import { sidebarContext } from '../../contexts/sidebar.context';
import GlobalSearch from '../search-bar/global-search-bar';
import ShoppingCart from '../cart/shopping-cart';
const Navbar = () => {
    const { is_sidebar, sidebarOpen } = useContext(sidebarContext);

    return (
        <>
            <Sidebar></Sidebar>
            <nav className={`navbar navbar-expand-lg ${styles.app_navbar_container}`}>
                <div className="container">
                    <a className="navbar-brand" href="#">Dev Mart</a>
                    <button className="navbar-toggler" onClick={() => sidebarOpen()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <NavLink to='/' className={`${styles.nav_link_item} nav-link active`} >Home</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink to='/contact' className={`${styles.nav_link_item} nav-link active`} >Contact</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`} >About</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink to='/auth/sign-up' className={`${styles.nav_link_item} nav-link active`}  >Sign Up</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex align-items-center gap-4" role="search">
                            <GlobalSearch></GlobalSearch>
                            <ShoppingCart></ShoppingCart>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar