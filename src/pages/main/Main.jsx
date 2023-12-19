import { MainWrap, VisualWrap } from './MainStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

const Main = () => {
    return (
        <>
            <VisualWrap>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                >
                    <SwiperSlide>
                        <img src="./images/visual1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/visual2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/visual3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/visual4.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </VisualWrap>
            <MainWrap className="main">
                <Content1 />
                <Content2 />
                <Content3 />
            </MainWrap>
        </>
    );
};

export default Main;
