import { Button, Modal } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopAppContext } from "../../context";

function Karzinka() {
  const navigate = useNavigate();
  const { state } = useContext(ShopAppContext);
  const { dispatch } = useContext(ShopAppContext);

  const [isOpen, SetOpen] = useState(false);
  const [select, Setselect] = useState(null);

  function OpenModal(product) {
    Setselect(product);
    SetOpen(true);
  }

  function CloseModal() {
    SetOpen(false);
    Setselect(null);
  }

  function FucPrice(product) {
    const count = product.quantity;
    return count * product.price;
  }

  function PriceAllProduct() {
    return state.data.reduce((acc, product) => {
      const product_total = FucPrice(product);
      return acc + product_total;
    }, 0);
  }

  return (
    <section>
      {state.data.length === 0 ? (
        <div className="text-center mt-4 mb-4">
          <img
            className="w-[20%] m-auto"
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="logo"
          />
          <div className="text-center">
            <p className="font-semibold mb-1">Savatingiz hozircha bo‘sh</p>
            <p>
              Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
              topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
            </p>
            <Button onClick={() => navigate("/")} className="mt-5">
              Asosiy sahifa
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          {state.data.map((e) => (
            <div key={e.id} className="flex justify-between items-center mb-4">
              <li className="list-none bg-[#ffffff68] p-3 flex flex-col sm:flex-row justify-between items-center">
                <img
                  onClick={() => OpenModal(e)}
                  className="w-[40%] sm:w-[10%] mb-3 sm:mb-0"
                  src={e.images[1]}
                  alt={e.name}
                />
                <div className="flex flex-col sm:flex-row sm:gap-3 w-full sm:w-auto justify-between gap-6 items-center">
                  <ins className="text-[blue] text-center sm:text-left">
                    {e.name}
                  </ins>
                  <mark className="text-[#230707] text-center sm:text-left">
                    {e.model}
                  </mark>
                </div>

                <div className="flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start">
                  <p className="text-[green] text-center sm:text-left">
                    {FucPrice(e)}$
                  </p>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <Button
                      onClick={() =>
                        dispatch({ type: "increment", value: { id: e.id } })
                      }
                    >
                      +
                    </Button>
                    {e.quantity}
                    <Button
                      onClick={() =>
                        dispatch({ type: "decrement", value: { id: e.id } })
                      }
                    >
                      -
                    </Button>
                  </div>
                  <Button
                    type="primary"
                    danger
                    onClick={() =>
                      dispatch({ type: "delete", value: { id: e.id } })
                    }
                  >
                    Delete
                  </Button>
                </div>
              </li>
            </div>
          ))}
          <div className="flex items-center gap-6 justify-between sm:justify-start mt-4">
            <strong className="text-2xl my-4">Total price :</strong>
            <strong className="text-2xl my-4">{PriceAllProduct()}$</strong>
          </div>
        </div>
      )}

      <Modal
        className="w-[90%] sm:w-[80%] lg:w-[50%] mx-auto"
        open={isOpen}
        onCancel={CloseModal}
        footer={null}
      >
        <div key={select?.id} className="modal-content">
          <div className="flex justify-between items-center">
            <strong>{select?.brand}</strong>
            <strong>{select?.name}</strong>
          </div>
          <strong>{select?.category}</strong>
          <br />
          <div className="grid gap-5 mb-5 mt-5 grid-cols-1 sm:grid-cols-3">
            <img src={select?.images[1]} alt={select?.name} />
            <img src={select?.images[0]} alt={select?.name} />
            <img src={select?.images[2]} alt={select?.name} />
          </div>
          <strong>Price : {select?.price}$</strong>
          <p>
            <em>{select?.desc}</em>
          </p>
        </div>
      </Modal>
    </section>
  );
}

export default Karzinka;
