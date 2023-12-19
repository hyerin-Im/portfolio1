import { useSelector } from 'react-redux';
import { CustomerLIstWrap } from './CustomerStyle';
import CustomerItem from './CustomerItem';
import { useDispatch } from 'react-redux';
import { add } from '../../store/modules/customerSlice';
import { useEffect } from 'react';
import { addData } from '../../store/modules/paginationSlice';
import { useNavigate } from 'react-router-dom';

const CustomerLIst = () => {
    const { customerData } = useSelector((state) => state.customer);
    const { currPage, postsPerPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = customerData.slice(firstPost, lastPost);

    useEffect(() => {
        dispatch(addData(customerData));
    }, []);
    return (
        <CustomerLIstWrap>
            <table className="customerTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((item) => (
                        <CustomerItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
            <p>
                <button onClick={() => navigate(`/customer/customeradd`)}>글 작성 </button>
            </p>
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
