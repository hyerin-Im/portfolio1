import { useSelector } from 'react-redux';
import ProductItem from '../../components/product/ProductItem';
import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './ProjectStyle';

const Product = () => {
    const { products } = useSelector((state) => state.cart);
    return (
        <ProductWrap>
            <div className="inner">
                <h2> Aqo Studio 베스트 </h2>
                <ProductSearch />
                <div className="cart-box">
                    {products.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </ProductWrap>
    );
};

export default Product;
