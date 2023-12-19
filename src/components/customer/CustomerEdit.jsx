import { useDispatch, useSelector } from 'react-redux';
import { CustomerAddWrap } from './CustomerStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { update } from '../../store/modules/customerSlice';

const CustomerEdit = () => {
    const { current } = useSelector((state) => state.customer);
    const [user, setUser] = useState(current);
    const { name, title, content, date } = user;
    const [now, setNow] = useState(new Date());

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title || !content || !name) return;
        user.date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

        dispatch(update(user));
        setUser({ name: '', title: '', content: '' });
        navigate(`/customer`);
    };
    return (
        <div>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input type="text" placeholder="제목" value={title} name="title" onChange={changeInput} />
                    </p>
                    <p>
                        <input type="text" placeholder="작성자" value={name} name="name" onChange={changeInput} />
                    </p>
                    <p>
                        <textarea cols="100" rows="10" placeholder="문의하기"></textarea>
                    </p>
                    <p>
                        <button onClick={() => navigate(-2)}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button>취소하기</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CustomerEdit;
