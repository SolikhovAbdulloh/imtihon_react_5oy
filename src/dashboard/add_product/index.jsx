import { Button, Form, Input, message, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

function Add_product() {
  const [model, setModel] = useState("");
  const [price, Setprice] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Rasm URL'ini saqlash uchun

  // Faylni tanlash
  const handleImageChange = async (info) => {
    if (info.file.status === "done") {
      // Rasm yuklandi, URLni oling
      setImageUrl(info.file.response.url); // response.url serverdan qaytgan URL
    }
  };

  // Formani yuborish
  const Submit = (value) => {
    const newCard = {
      model: value.model,
      price: value.price,
      images: [...imageUrl], // Rasm URL'ini qo'shish
    };

    axios
      .post("http://localhost:3000/products", newCard, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        message.success("Malumot muvaffaqiyatli yuborildi!");
        setModel("");
        Setprice("");
        setImageUrl("");
      })
      .catch((error) => {
        console.log(error);
        message.error("Xatolik yuz berdi!");
      });
  };

  return (
    <div>
      <h2 className="font-bold text-[22px]">Add New Product</h2>
      <div>
        <Form onFinish={Submit}>
          <Form.Item
            label="Model"
            name="model"
            rules={[{ required: true, message: "Iltimos modelni kiriting" }]}
          >
            <Input
              value={model}
              placeholder="Model"
              onChange={(e) => setModel(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Iltimos Narx kiriting" }]}
          >
            <Input
              value={price}
              placeholder="Price"
              onChange={(e) => Setprice(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Image" name="image">
            <Upload
              name="file" // Bu yerda fayl nomini belgilaymiz
              action="http://localhost:3000/upload" // Fayl yuklanadigan URL
              beforeUpload={(file) => false} // Rasmni avtomatik yubormaslik
              onChange={handleImageChange} // Rasmni tanlagan paytda URLni olish
              listType="picture" // Rasmni ko'rsatish
              accept="image/*" // Faqat rasm fayllari
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Button htmlType="submit" type="primary">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Add_product;
