import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import r1 from "./Clip path group.png";
import r3 from "./g3.png";
import r5 from "./sony.png";
import r6 from "./Vector.png";
import banner from "./banner.png"

import { Pagination } from "swiper/modules";
import { Button } from "antd";

export default function Swiper_card() {


  

//   const {
//     id,
//     name,
//     category,
//     brand,
//     model,
//     compatibility,
//     material,
//     price,
//     description,
//     images,
//   } = props;

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper contiener"
      >
        <SwiperSlide>
          <img src={r1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={r1} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="banner rounded-md  flex mt-5 text-center  gap-6 p-10  py-[15vh] items-start flex-col">
        <p className="text-[44px] font-medium text-white">SMART WATCH</p>
        <p className="text-[24px] text-white font-light">
          Various designs and brands
        </p>
        <Button className="bg-[#ff6951] btn  ">View</Button>
      </div>
    </>
  );
}
