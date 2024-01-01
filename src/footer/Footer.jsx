import { Link } from "react-router-dom";
import { FooterWrap } from "./FooterStyle";

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <ul className="fMenu">
                    <li>
                        <Link to={"/"}>COMPANY</Link>
                    </li>
                    <li>
                        <Link to={"/"}>AGREEMENT</Link>
                    </li>
                    <li>
                        <Link to={"/"}>GUIDE</Link>
                    </li>
                    <li>
                        <Link to={"/"}>PRIVACY POLICY</Link>
                    </li>
                </ul>
                <ul>
                    <li>COMPANY. 주식회사 에프티유OWNER. 임성미TEL. 02-6956-0195 E-MAIL. aqo.studiospace@gmail.com</li>
                    <li>BUSINESS NUMBER. 788-81-01262 MAIL-ORDER LICENSE. 2019-서울성동-01843</li>
                    <li>ADDRESS. 04782 서울특별시 성동구 연무장5가길 7 (성수동2가) 성수역현대테라스타워 이동 708호</li>
                    <li> Copyright © AQO_studiospace. All rights reserved.</li>
                </ul>
            </div>
        </FooterWrap>
    );
};

export default Footer;
