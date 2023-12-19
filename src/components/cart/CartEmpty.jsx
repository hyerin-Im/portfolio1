import { useNavigate } from 'react-router-dom';
import { CartEmptyWrap } from './CartStyle';

const CartEmpty = () => {
    const navigate = useNavigate();
    return (
        <CartEmptyWrap>
            <div className="cart-empty">
                <h2>담긴 상품이 없습니다.</h2>
                <a href={`#/product`}>쇼핑하러가기</a>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;
