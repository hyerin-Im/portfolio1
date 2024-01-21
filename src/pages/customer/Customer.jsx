import { useEffect } from "react";
import CustomerLIst from "../../components/customer/CustomerLIst";
import Pagination from "../../components/pagination/Pagination";
import { CustomerWrap } from "./CustomerStyle";

const Customer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <CustomerWrap>
            <div className="inner">
                <h2> 고객문의 </h2>
                <CustomerLIst />
                <Pagination />
            </div>
        </CustomerWrap>
    );
};

export default Customer;
