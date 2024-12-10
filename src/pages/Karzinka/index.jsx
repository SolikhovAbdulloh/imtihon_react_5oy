import { Button, Modal } from 'antd';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopAppContext } from '../../context';

function Karzinka() {
    const navigate = useNavigate();
    const {state} = useContext(ShopAppContext)
    const {dispatch} = useContext(ShopAppContext)
    
    const [isOpen,SetOpen] = useState(false)
    const [select,Setselect] = useState(null)


    function OpenModal(product){
        Setselect(product)
        SetOpen(true)
    }

    function CloseModal(){
        SetOpen(false)
        Setselect(null)
    }
  return (
    <section>
      {state.data.length === 0 ? (
        <div className="text-center mt-4 mb-4 ">
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
            <div key={e.id} className="flex justify-between items-center">
              <li className="list-none bg-[#ffffff68] p-3 justify-between items-center flex">
                <img
                  onClick={() => OpenModal(e)}
                  className="w-[10%]"
                  src={e.images[1]}
                  alt={e.name}
                />
                <p className='text-[blue]'>{e.name}</p>
                <em className='text-[red]'>{e.model}</em>
                <p className='text-[green]'>{e.price}$</p>
                <div className="flex items-center gap-3">
                  <Button onClick={()=> dispatch({type:'qoshish', })}>+</Button>
                  {e.quantity}
                  <Button>-</Button>
                </div>
                <div className="flex gap-3">
                  <Button
                    type="primary"
                    danger
                    onClick={() =>
                      dispatch({ type: "delete", value: { id: e.id } })
                    }
                  >
                    Delete
                  </Button>
                  {select && (
                    <Modal
                      className="w-[100%]"
                      open={isOpen}
                      onCancel={CloseModal}
                      footer={null}
                    >
                      <div key={select.id} className="modal-content">
                        <div className="flex justify-arounditems-center">
                          <strong>{select.brand}</strong>
                          <strong>{select.name}</strong>
                        </div>
                        <strong>{select.category}</strong>
                        <br />
                        <div className="grid gap-5 mb-5 mt-5  grid-cols-3">
                          <img src={select.images[1]} alt={select.name} />
                          <img src={select.images[0]} alt={select.name} />
                          <img src={select.images[2]} alt={select.name} />
                        </div>
                        <strong>Price : {select.price}$</strong>
                        <p>
                          <em>{select.desc}</em>
                        </p>
                      </div>
                    </Modal>
                  )}
                </div>
              </li>
            </div>
          ))}
          <p className='text-2xl my-4'>Total price : 0</p>
        </div>
      )}
    </section>
  );
}

export default Karzinka