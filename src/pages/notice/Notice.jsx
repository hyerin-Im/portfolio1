import { useEffect } from "react";
import NoticeList from "../../components/notice/NoticeList";
import Pagination from "../../components/pagination/Pagination";
import { NoticeWrap } from "./NoticeStyle";

const Notice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <NoticeWrap>
            <div className="inner">
                <h2>NOTICE</h2>

                <NoticeList />
                <Pagination />
            </div>
        </NoticeWrap>
    );
};

export default Notice;
