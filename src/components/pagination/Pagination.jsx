import { useDispatch, useSelector } from "react-redux";
import { PaginationWrap } from "./PaginationStyle";
import { useEffect } from "react";
import { currentPage, nextPage, prevPage, totalData } from "../../store/modules/paginationSlice";

const Pagination = () => {
    const { customerData } = useSelector((state) => state.customer);
    const { noticeData } = useSelector((state) => state.notice);
    const { currPage, totalPage } = useSelector((state) => state.pagination);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalData());
    }, [customerData, noticeData]);

    // 강제 배열처리
    const arr = [...Array(totalPage)];
    console.log(arr);

    return (
        <PaginationWrap>
            <div>
                <button onClick={() => dispatch(prevPage())}>{`<<`}</button>

                {arr.map((_, idx) => (
                    <button
                        className={currPage === idx + 1 ? "on" : ""}
                        onClick={() => dispatch(currentPage(idx + 1))}
                        key={idx}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button onClick={() => dispatch(nextPage())}>{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
