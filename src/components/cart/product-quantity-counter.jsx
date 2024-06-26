import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg';
import styles from './shopping-cart.module.scss';
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
const ProductQuantityCounter = () => {
    return (
        <div className={styles.product_quantity_counter}>
            <span className={styles.update_counter_button}><IoAddOutline size={30} /></span>
            <span></span>
            <span className={styles.update_counter_button}><AiOutlineMinus size={30} /></span>
        </div>
    )
}

export default ProductQuantityCounter;
