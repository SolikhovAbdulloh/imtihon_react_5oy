import { Button, Popconfirm, Table } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopAppContext } from "../../context";

function Like_page() {
  const { state } = useContext(ShopAppContext);
  const { dispatch } = useContext(ShopAppContext);

  // Jadval ustunlarini belgilash
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={text} alt="product" width={50} />, // Rasmni ko'rsatish
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },

    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Category",
      dataIndex: "price",
      key: "price1",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Maxsulot ochirilsinmi ? "
          onConfirm={() => handleDelete(record.id)}
          okText="Ha"
          cancelText="Yo'q"
        >
          <Button type="dashed" variant="outlined" color="danger">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const handleDelete = (id) => {
    dispatch({ type: "Deleteliked", value: { id } });
  };

  const navigate = useNavigate();

  return (
    <section>
      {state.liked.length === 0 ? (
        <div className="m-auto mb-3 text-center ">
          <img
            className="w-[20%] m-auto"
            src="https://uzum.uz/static/img/hearts.cf414be.png"
            alt="empty heart"
          />
          <p className="font-semibold">Sizga yoqqanini qoʻshing</p>

          <Button onClick={() => navigate("/")} className="mt-3">
            Asosiy sahifa
          </Button>
        </div>
      ) : (
        <div>
          <Table
            dataSource={state.liked.map((e) => (
              {
              key: e.id,
              id: e.id,
              name: e.name,
              model: e.model,
              brand: e.brand,
              price: e.category,
              image: e.image,
            
            }
          ))}
            columns={columns}
            pagination={false}
            scroll={{ x: "max-content" }}
            className="min-w-full"
          />
        </div>
      )}
    </section>
  );
}

export default Like_page;
