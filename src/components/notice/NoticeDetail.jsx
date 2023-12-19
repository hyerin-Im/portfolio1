import { useSelector } from 'react-redux';
import { NoticeDetailWrap } from './NoticeStyle';
import noticeData from '../../assets/api/noticedata';
import { useNavigate, useParams } from 'react-router-dom';

const NoticeDetail = () => {
    const { noticeID } = useParams();
    const { noticeData } = useSelector((state) => state.notice);
    const newItem = noticeData.find((item) => item.id === Number(noticeID));
    const { id, title, content, date } = newItem;

    const navigate = useNavigate();
    return (
        <NoticeDetailWrap>
            <div className="inner">
                <h2> 공지사항 </h2>
                <div className="con">
                    <h3>
                        {id} / {title}
                    </h3>
                    <p className="txt"> {content} </p>
                    <p className="date"> {date} </p>
                </div>
                <button onClick={() => navigate(-1)}>목록으로</button>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
