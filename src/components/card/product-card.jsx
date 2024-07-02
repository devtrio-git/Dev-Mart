import React from 'react'
import styles from './cards.module.scss'
import p1 from '../../assets/imgs/p1.png'
import cartIcon from '../../assets/imgs/cartIcon.png'
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useShoppingCart from '../../hooks/use-shopping-cart'
const ProductCard = ({ data }) => {
    const isLogin = useSelector(state => state.user.isLogin)
    const navigate = useNavigate();
    const { addToCart } = useShoppingCart();

    function addItemIntoCart(e) {
        e.stopPropagation();
        if (!isLogin) {
            navigate("/auth/sign-up");
            return;
        }
        addToCart(data);
    }
    return (
        <div className={`${styles.product_card_container} `} onClick={() => navigate('/product-info')}>
            <div className={`${styles.card_img_container}`}>
                <img src={data.images ? data?.images[0] : p1} alt="" />
            </div>
            <div className={`${styles.card_content}`}>
                <div className={`${styles.card_detail}`}>
                    <h6>{data?.name}</h6>
                    <p>Price: ${data?.price}</p>
                    <Rating initialValue={data?.rating} readonly={true} allowFraction={true} size={20} />
                </div>
                <div className={`${styles.cart_icon}`}>
                    <img onClick={addItemIntoCart} style={{ cursor: "pointer" }} src={cartIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
