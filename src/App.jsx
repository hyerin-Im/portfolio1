import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyle";
import Layout from "./components/Layout";
import NotFiles from "./pages/notfiles/NotFiles";
import Main from "./pages/main/Main";
import Join from "./pages/login/Join";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./components/notice/NoticeDetail";
import Customer from "./pages/customer/Customer";
import CustomerDetail from "./components/customer/CustomerDetail";
import CustomerAdd from "./components/customer/CustomerAdd";
import CustomerEdit from "./components/customer/CustomerEdit";
import LookBook from "./pages/lookbook/LookBook";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/lookbook" element={<LookBook />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />

                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route path=":noticeID" element={<NoticeDetail />} />
                        </Route>
                        <Route path="/customer">
                            <Route index element={<Customer />} />
                            <Route path=":customerID" element={<CustomerDetail />} />
                            <Route path="customeradd" element={<CustomerAdd />} />
                            <Route path="customeredit" element={<CustomerEdit />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFiles />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
