import React from 'react'
import styles from './shopping-cart.module.scss';
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
const ProductQuantityCounter = ({ small, onIncrementCount, onDecrementCount, quantity }) => {
    return (
        <div className={`${styles.product_quantity_counter} ${small && styles.product_quantity_counter_small} d-flex justify-content-between align-items-center`}>
            <span className={styles.update_counter_button} onClick={onDecrementCount}><AiOutlineMinus size={small ? 17 : 27} /></span>
            <span className={styles.counter_value}>{quantity}</span>
            <span className={styles.update_counter_button} onClick={onIncrementCount}><IoAddOutline size={small ? 17 : 27} /></span>
        </div>
    )
}

export default ProductQuantityCounter;
