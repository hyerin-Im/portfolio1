import { useDispatch, useSelector } from 'react-redux';
import { NoticeListWrap } from './NoticeStyle';
import noticeData from '../../assets/api/noticedata';
import NoticeItem from './NoticeItem';
import { useEffect } from 'react';
import { addData } from '../../store/modules/paginationSlice';

const NoticeList = () => {
    const { noticeData } = useSelector((state) => state.notice);
    const { currPage, postsPerPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    const lastPost = currPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = noticeData.slice(firstPost, lastPost);

    useEffect(() => {
        dispatch(addData(noticeData));
    }, []);

    return (
        <NoticeListWrap>
            <table className="noticeTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((item) => (
                        <NoticeItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
