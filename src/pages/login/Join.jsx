import { JoinWrap } from './LoginStyle';
import Spinner from '../../components/Spinner';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/modules/authSlice';

const Join = () => {
    const [user, setUser] = useState({
        username: '',
        tel: '',
        email: '',
        password: '',
    });

    const [isSpinner, setIsSpinner] = useState(true);
    const { username, tel, email, password } = user;
    const nameRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!username || !tel) return;
        dispatch(signup(user));
        navigate(`/login`);
        setUser({ username: '', tel: '', email: '', password: '' });
        nameRef.current.focus();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSpinner(false);
        }, 600);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {isSpinner && <Spinner />}
            <JoinWrap>
                <div className="inner">
                    <h2> 회원가입 </h2>
                    <form onSubmit={onSubmit}>
                        <p>
                            <label> 이름 </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="홍길동"
                                onChange={changeInput}
                                ref={nameRef}
                            />
                        </p>
                        <p>
                            <label> 전화번호 </label>
                            <input
                                type="tel"
                                name="tel"
                                value={tel}
                                placeholder="010-0000-0000"
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>이메일 </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="abc@naver.com"
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <label>비밀번호 </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="a1234"
                                onChange={changeInput}
                            />
                        </p>
                        <p>
                            <button type="submit">회원가입</button>
                            <button onClick={() => navigate(`/`)}>취소</button>
                        </p>
                    </form>
                </div>
            </JoinWrap>
        </>
    );
};

export default Join;
