import { useEffect } from "react";
import { PressWrap } from "./PressStyle";

const LookBook = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <PressWrap>
            <div className="inner">
                <h2>LookBook 페이지 입니다</h2>
            </div>
        </PressWrap>
    );
};

export default LookBook;
