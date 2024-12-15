import React from 'react'
import { Link } from 'react-router-dom';
import icon from "./icon.png";
import icon2 from "./TESLA.png";
import { AiFillProduct } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { MdAutoDelete, MdEMobiledata } from "react-icons/md";
import { UserAddOutlined } from '@ant-design/icons';

function Sidebar() {
  return (
    <div>
      <div className="w-[300px] h-[100vh] pt-5 px-3 bg-[#F9F9F9]">
        <div className="flex gap-4 mb-7 justify-center items-center">
          <img className="w-[150px]" src={icon2} alt="" />
        </div>
        <ul className="flex flex-col  gap-8 items-center">
          <li className="font-medium text-[18px]  tracking-tight text-blue-600">
            <Link className="flex items-center gap-2" to="/dashboard/all">
              <AiFillProduct /> All Products
            </Link>
          </li>
          <li className="font-medium text-[18px] tracking-tight text-blue-600">
            <Link className="flex items-center gap-2" to="/dashboard/add">
              <UserAddOutlined />
             Add Product
            </Link>
          </li>
          <li className="font-medium text-[18px] tracking-tight text-blue-600">
            <Link className="flex items-center gap-2" to="/dashboard/edit">
              <TbEdit />
              Edit Product
            </Link>
          </li>
          <li className="font-medium text-[18px] tracking-tight text-blue-600">
            <Link className="flex items-center gap-2" to="/dashboard/delete">
              <MdAutoDelete />
              Delete Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar