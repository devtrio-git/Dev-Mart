import React from 'react'
import styles from './checkout.module.scss'
import crossIcon from '../../assets/imgs/crossIcon.png'
import proImg from '../../assets/imgs/pc1.png'
import ProductQuantityCounter from '../../components/cart/product-quantity-counter'
const CartProduct = () => {
    return (
        <tr className={`${styles.table_row}`}>
            <td>
                <div className={`${styles.product_cell}`}>
                    <div className={`${styles.img_container}`}>
                        <img className={`${styles.product_img}`} src={proImg} alt='' />
                        <img className={`${styles.cross_icon}`} src={crossIcon} alt="crossIcon" />
                    </div>
                    <p className='m-0 ps-2'>LCD monitor </p>
                </div>
            </td>
            <td>$650</td>
            <td>
                <ProductQuantityCounter small></ProductQuantityCounter>
            </td>
            <td>$650</td>
        </tr>
    )
}

export default CartProduct
