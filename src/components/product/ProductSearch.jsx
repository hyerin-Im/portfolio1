import { useDispatch } from 'react-redux';
import { ProductSearchWrap } from './ProductStyle';
import { resetCart, searchCart, sortCart } from '../../store/modules/cartSlice';
import { useEffect, useRef, useState } from 'react';

const ProductSearch = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const txtRef = useRef();

    const onSort = (e) => {
        e.preventDefault();
        const { value } = e.target;
        dispatch(sortCart(value));
    };

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        dispatch(searchCart(text));
        // setText('');
        txtRef.current.focus();
    };

    useEffect(() => {
        dispatch(searchCart(''));
    }, []);

    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <input type="text" name="" id="" onChange={changeInput} />
                    <button>검색</button>
                </p>
                <p>
                    <select onChange={onSort}>
                        <option value="">- - - 정렬 - - -</option>
                        <option value="title">제품명순</option>
                        <option value="price">가격순</option>
                        <option value="category">카테고리순</option>
                    </select>
                    <span onClick={() => dispatch(resetCart())}>초기화</span>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
