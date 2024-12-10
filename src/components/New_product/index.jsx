import React, { useContext, useEffect, useState } from "react";
import UseAxios from "../../UseAxios";
import { FaStar } from "react-icons/fa";
import { HeartFilled } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ShopAppContext, ShopContext } from "../../context";
import NotificationApp from "../Notification";
import { LuShoppingBag } from "react-icons/lu";
import { Button } from "antd";

function NewProduct(props) {
  const { dispatch } = useContext(ShopAppContext);
  const { state } = useContext(ShopAppContext);
  const notify1 = NotificationApp();
  const {
    id,
    name,
    category,
    brand,
    model,
    price,
    description,
    rating,
    images,
  } = props;

  //   console.log(props);

  const Likeporduct = state.liked.filter((item) => item.id === id)[0];

  const isLiked = Boolean(Likeporduct);

  //   console.log(isLiked);

  return (
    <div className="flex gap-3 card justify-center items-start mb-7 rounded-[8px] p-[16px] w-[288px] h-[307px] ">
      <div
        key={id}
        className="rounded-[4px]  relative bg-[white] flex  items-center flex-col justify-evenly p-[8px]  mb-4"
      >
        <img className="w-[45%]  rounded-2xl" src={images[2]} alt="ss" />
        <p className="mt-4 text-[12px] font-light text-center">{name}</p>
        <p className="mt-4 text-[12px] font-light text-center">{category}</p>
        <div className="flex gap-[45px] items-end justify-between">
          <p className="text-[18px] mt-4 font-light text-start">{price}</p>
          {isLiked ? (
            <HeartFilled
              className="text-[red] absolute top-0 right-0"
              onClick={() => dispatch({ type: "Deleteliked", value: { id } })}
            />
          ) : (
            <HeartOutlined
              className="cursor-pointer absolute top-0 right-0"
              onClick={() => {
                dispatch({
                  type: "liked_add",
                  value: {
                    id: id,
                    name: name,
                    image: images,
                    price: price,
                    model: model,
                    brand: brand,
                    category: category,
                  },
                });

                notify1({ type: "like" });
              }}
            />
          )}

          <span className="flex justify-between gap-2 items-center ">
            <FaStar />
            <p>{rating}</p>
          </span>
          <Button>
            <LuShoppingBag
              onClick={() => {
                dispatch({
                  type: "add",
                  value: {
                    id: id,
                    name: name,
                    images: images,
                    model: model,
                    brand: brand,
                    price: price,
                    desc: description,
                  },
                });

                notify1({ type: "add" });
              }}
            />
          </Button>
        </div>
        <div className="absolute top-1 left-0 bg-[#FDDBC9] rounded-md p-1"></div>
      </div>
    </div>
  );
}

export default NewProduct;
