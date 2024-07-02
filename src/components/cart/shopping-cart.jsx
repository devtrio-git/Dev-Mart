import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg';
import styles from './shopping-cart.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ShoppingCart = () => {
    const isLogin = useSelector(state=> state.user.isLogin);
    const navigate = useNavigate();

    return (
        <div className={styles.shopping_cart_icon}>
            <img onClick={()=> isLogin? navigate("/checkout"): navigate("/auth/login") } src={cartIcon} alt='search icon' />
        </div>
    )
}

export default ShoppingCart
