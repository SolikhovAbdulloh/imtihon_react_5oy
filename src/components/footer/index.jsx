import React from "react";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { TbMessageMinus } from "react-icons/tb";
import { BsTelephoneForward } from "react-icons/bs";
import { Button, Input, Space } from "antd";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
function Footer() {
    const handleClick = () => {
      window.location.href = "https://www.facebook.com/?locale=ru_RU"; 
    };
    const handleClick1 = () => {
      window.location.href = "https://www.instagram.com/";
    };
    const handleClic2 = () => {
      window.location.href = "https://www.youtube.com/";
    };
    const handleClick3 = () => {
      window.location.href = "https://t.me/Solikhov_Fronted";
    };
  return (
    <footer className="bg-[#021736] p-6 font-light text-[#CBCBCB]">
      <div className="flex flex-col md:!flex-row justify-between items-start">
        {/* Company */}
        <div className="flex  flex-col cursor-pointer items-start gap-3 ">
          <p className="text-white  font-medium text-[16px]">Company</p>
          <a>about us</a>
          <a>blog</a>
          <a>returns</a>
          <a>order status</a>
        </div>

        {/* Info */}
        <div className="flex flex-col cursor-pointer items-start gap-3 mt-6 sm:mt-0">
          <a className="text-white font-medium text-[16px]">Info</a>
          <a>How it works?</a>
          <a>FAQ</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col cursor-pointer items-start gap-3 mt-6 sm:mt-0">
          <a className="text-white font-medium text-[16px]">Contact</a>
          <a className="flex items-center gap-2">
            <CiLocationOn /> 123 Main Street, Anytown, USA
          </a>
          <a className="flex items-center gap-2">
            <BsTelephoneForward /> +1 (555) 123-4567
          </a>
          <a className="flex items-center gap-2">
            <TbMessageMinus /> TechHeimSupport@gmail.com
          </a>
        </div>

        {/* Sign up and social media */}
        <div className="flex flex-col items-start gap-3 mt-6 sm:!mt-0">
          <h2 className="text-white font-medium text-[16px]">Sign</h2>
          <Input className="text-white"
            prefix={<CiUser />}
            style={{ background: "transparent", color: "white" }}
            placeholder="E-mail Address"
          />
          <Space className="flex gap-2 items-center">
            <Button
              onClick={handleClick}
              style={{ background: "transparent", color: "white" }}
            >
              <FacebookOutlined className="text-2xl" />
            </Button>
            <Button
              onClick={handleClick3}
              style={{ background: "transparent", color: "white" }}
            >
              <TwitterOutlined className="text-2xl" />
            </Button>
            <Button
              onClick={handleClick1}
              style={{ background: "transparent", color: "white" }}
            >
              <InstagramOutlined className="text-2xl" />
            </Button>
            <Button
              onClick={handleClic2}
              style={{ background: "transparent", color: "white" }}
            >
              <YoutubeOutlined className="text-2xl" />
            </Button>
          </Space>
        </div>
      </div>

      {/* Payment icons */}
      <div className="flex cursor-pointer text-2xl items-center gap-3 mt-[39px]">
        <FaCcPaypal />
        <SiAmericanexpress />
        <FaCcVisa />
        <FaCcMastercard />
      </div>

      {/* Footer links */}
      <div className="flex flex-col sm:flex-row mt-3 justify-between">
        <p>2023 Tech Heim.</p>
        <div className="flex flex-wrap items-center gap-6 mt-3 sm:!mt-0">
          <a href="">cookie settings</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms and Conditions</a>
          <a href="">Imprint</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
