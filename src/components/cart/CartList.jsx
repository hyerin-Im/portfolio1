import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { CartListWrap } from './CartStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { totalCart } from '../../store/modules/cartSlice';

const CartList = () => {
   const { carts, cartTotal } = useSelector(state => state.cart);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(totalCart());
   }, [carts]);

   return (
      <CartListWrap className="cart-wrap">
         <h2>장바구니</h2>
         <p>
            <input type="checkbox" name="" id="" />
            전체선택
         </p>
         <div className="cart-list">
            {carts.map(item => (
               <CartItem key={item.id} item={item} />
            ))}
         </div>
         <div className="cart-bottom">
            <p>
               <strong>총개수</strong>
               <span> total : {carts.length} 개</span>
            </p>
            <p>
               <strong>총금액</strong>
               <span> total : {cartTotal} 원</span>
            </p>
         </div>
         <button onClick={() => navigate(`/product`)}>쇼핑하러가기</button>
      </CartListWrap>
   );
};

export default CartList;
