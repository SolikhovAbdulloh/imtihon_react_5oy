import { useContext, useState } from "react";
import logo from '../navbar/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

import {

  CiHeart,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";
import { Badge, Button } from "antd";
import { useNavigate, useNavigation } from "react-router-dom";
import { ShopAppContext } from "../../context";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

const {state} = useContext(ShopAppContext)  
  const navigate = useNavigate()
  return (
    <div className="relative header">
      <div className="flex justify-between cursor-pointer items-center px-4 py-2 sm:px-0">
        <img
          src={logo}
          onClick={() => navigate("/")}
          alt="logo"
          className="h-8 sm:h-10"
        />
        <div className="!hidden sm:!flex gap-[30px] items-center ">
          <a href="#" onClick={() => navigate("/")}>
            Home
          </a>
          <a href="#" onClick={() => navigate("/")}>
            Products
          </a>
          <a href="#" onClick={() => navigate("/")}>
            Blog
          </a>
          <a href="#" onClick={() => navigate("/")}>
            FAQ
          </a>
          <a href="#" onClick={() => navigate("/")}>
            Contact Us
          </a>
        </div>
        <div className="flex gap-[20px]">
          <Button className="border-none" onClick={() => navigate("like")}>
            <Badge count={state.liked.length}>
              <CiHeart className="text-2xl" />
            </Badge>
          </Button>
          <Button className="border-none" onClick={() => navigate("karzinka")}>
            <Badge count={state.data.length}>
              <CiShoppingBasket className="text-2xl" />
            </Badge>
          </Button>
          <Button className="border-none">
            <CiUser className="text-2xl" />
          </Button>
        </div>
        <div className="sm:hidden flex items-center gap-2">
          <button className="text-xl" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="border-[1px] mt-4 border-[#e6e6e6] w-[100%]"></div>

      {isMobileMenuOpen && (
        <div className="h-full">
          <div className="absolute  top-0 w-[70%] bg-[#063A88]  text-white shadow-lg sm:!hidden left-0   flex flex-col items-start p-4 z-[999] transition-transform transform translate-y-4 duration-1000">
            <button className="text-2xl self-end mb-4" onClick={toggleMenu}>
              <IoCloseOutline />
            </button>
            <a href="#" onClick={() => navigate("/")} className="py-2 text-2xl">
              Home
            </a>
            <a href="#" onClick={() => navigate("/")} className="py-2 text-2xl">
              Products
            </a>
            <a href="#" onClick={() => navigate("/")} className="py-2 text-2xl">
              Blog
            </a>
            <a
              href="# "
              onClick={() => navigate("/")}
              className="py-2 text-2xl"
            >
              FAQ
            </a>
            <a href="#" onClick={() => navigate("/")} className="py-2 text-2xl">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
