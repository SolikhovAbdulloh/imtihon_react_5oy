import React, { useContext } from 'react'
import { ShopAppContext } from '../../context'
import UseAxios from '../../UseAxios';
import { Button } from 'antd';
import img1 from "./img/imges6.png"
import img2 from "./img/image1.png"
import img3 from "./img/image2.png"
import img4 from "./img/image3.png";
import img5 from "./img/image4.png";
import img6 from "./img/image5.png";
import img7 from "./img/image.png";
import Swiper_card from '../../swiper';
import Sale from '../../Sale_product';
import NewProduct from '../New_product';
import NewProduct2 from '../New_product2';
import LoaderApi from '../loaders';
import Pls from '../pls';

function Products() {
  const {data,loading} = UseAxios({url:'/'})
  const {Card_pruduct_loader} = LoaderApi()
  return (
    <div className="contiener mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-[30px] lg:w-[50%] text-center lg:text-left">
          <p className="font-semibold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Tech Heim
          </p>
          <p className="font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">
            "Join the digital revolution"
          </p>
          <br />
          <Button className="bg-[#F45E0C] rounded-[8px] px-[16px] py-[8px] w-[288px] h-[56px] mx-auto lg:mx-0">
            Explore More
          </Button>
        </div>

        <div className="mt-6 lg:mt-0 lg:w-[50%]">
          <img src={img1} alt="Tech Heim" className="w-full h-auto" />
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between gap-4 mt-4 flex-wrap items-center">
        {/* Accessories Card */}
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto flex-col items-center transition-transform transform hover:scale-105 hover:z-10">
          <img src={img2} alt="ss" />
          <p className="font-light text-[16px] leading-[150%] text-center">
            Accessories
          </p>
        </div>

        {/* Camera Card */}
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto flex-col items-center transition-transform transform hover:scale-105 hover:z-10">
          <img src={img3} alt="ss" />
          <p className="font-light text-[16px] leading-[150%] text-center">
            Camera
          </p>
        </div>

        {/* Laptop Card */}
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto flex-col items-center transition-transform transform hover:scale-105 hover:z-10">
          <img src={img7} alt="ss" />
          <p className="font-light text-[16px] leading-[150%] text-center">
            Laptop
          </p>
        </div>

        {/* Smart Phone Card */}
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto flex-col items-center transition-transform transform hover:scale-105 hover:z-10">
          <img src={img4} alt="ss" />
          <p className="font-light text-[16px] leading-[150%] text-center">
            Smart Phone
          </p>
        </div>

        {/* Gaming Card */}
        <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto flex-col items-center transition-transform transform hover:scale-105 hover:z-10">
          <img src={img5} alt="ss" />
          <p className="font-light text-[16px] leading-[150%] text-center">
            Gaming
          </p>
        </div>

        {/* Smart Watch Card */}
        <div className="flex justify-center w-[200px] h-[220px] bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto flex-col items-center transition-transform transform hover:scale-105 hover:z-10">
          <img className="w-[60%]" src={img6} alt="ss" />
          <p className="font-light text-[16px] text-center">Smart Watch</p>
        </div>
      </div>
      {/*  */}
      <div className="mt-4 mb-4">
        <Sale />
      </div>
      <div className="mt-5 mb-5">
        <h2 className="font-medium text-[32px]">NewProduct</h2>
        <div className="grid2  gap-4 mt-4  p-5">
          {loading
            ? Card_pruduct_loader()
            : data.map((e) => <NewProduct key={e.id} {...e} />)}
          {data.map((e) => (
            <NewProduct2 key={e.id} {...e} />
          ))}
        </div>
      </div>
      <div className="my-1 w-full">
        <Pls />
      </div>
      <div className="mt-[10vh]">
        <h2 className="text-[32px] font-medium">Top Brands</h2>
        <br />
        <Swiper_card />
      </div>
    </div>
  );
}

export default Products