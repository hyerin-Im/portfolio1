import { useSelector } from 'react-redux';
import CartList from '../../components/cart/CartList';
import { CartWrap } from './ProjectStyle';
import CartEmpty from '../../components/cart/CartEmpty';

const Cart = () => {
    const { carts } = useSelector((state) => state.cart);
    return (
        <CartWrap className="cart-box">
            <div className="inner">{carts.length > 0 ? <CartList /> : <CartEmpty />}</div>
        </CartWrap>
    );
};

export default Cart;
