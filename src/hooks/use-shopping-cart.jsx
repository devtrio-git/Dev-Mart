import { useDispatch, useSelector } from 'react-redux';
import { addProductIntoCart, decreaseProductQuantity, removeAllProducts, removeProductFromCart } from '../redux/features/cart-slice';

const useShoppingCart = () => {
    const products = useSelector(state => state.cart.products) ?? [];
    const dispatch = useDispatch();

    function addToCart(p) {
        if (!p) return;
        dispatch(addProductIntoCart(p));
    }

    function decreaseQuantityInCart(p) {
        if (!p) return;
        dispatch(decreaseProductQuantity(p));
    }

    function removeFromCart(p) {
        if (!p) return;
        dispatch(removeProductFromCart(p));
    }
    function getCartCount() {
        return products.length;
    }

    function getCartProducts() {
        return products;
    }

    function getProductQuantity(p) {
        return products.find(item => item.product_id == p.id)?.quantity ?? 0;
    }

    function clearCart() {
        dispatch(removeAllProducts());
    }

    return { addToCart, decreaseQuantityInCart, removeFromCart, getProductQuantity, getCartProducts, getCartCount, clearCart };
}

export default useShoppingCart
