import { useEffect } from "react";
import { LookbookWrap } from "./LookbookStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const LookBook = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LookbookWrap>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="./images/lookbook1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook10.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook11.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook12.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook13.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook14.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/lookbook15.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </LookbookWrap>
    );
};

export default LookBook;
