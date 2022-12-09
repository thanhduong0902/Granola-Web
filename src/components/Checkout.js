import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { ConvertMoney } from "../utils/ConvertMoney";

const Checkout = () => {
  const [{ cartItems }] = useStateValue();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [success, setSuccess] = useState(false);
  const [fields, setFields] = useState(false);
  const [location, setLocation] = useState();
  const validatePhone = (e) => {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return regex.test(e) === false;
  };

  const send = () => {
    if (
      !email ||
      !name ||
      !phone ||
      !email.includes("@gmail.com") ||
      validatePhone(phone)
    )
      setSuccess(false);
    else {
      setSuccess(true);
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
    setFields(true);

    setTimeout(() => {
      setFields(false);
    }, 4000);
  };
  return (
    <div className="w-full h-screen  flex flex-row  justify-center mt-36">
      <div className="w-[40%] gap-3 h-340 flex flex-col overflow-y-scroll scrollbar-none">
        <p className="text-3xl text-lime-600">Hóa đơn</p>

        {cartItems.map((item) => (
          <div className="w-full justify-between p-1 px-2 rounded-lg flex items-center gap-2">
            <img
              src={item?.imageUrl || item?.imageURL}
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              alt=""
            />

            {/* name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base ">{item?.title}</p>
              <p className="text-sm block font-semibold">
                {ConvertMoney(item?.price * item.qty)} VNĐ
              </p>
            </div>

            {/* button section */}
            <div>
              <p className=" rounded-sm  flex items-center justify-center">
                Số lượng : {item.qty}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[40%] h-340 flex flex-col ml-11 gap-5">
        <p className="text-3xl text-lime-600">Thông tin khách hàng</p>

        <div className="flex flex-col">
          <span className="font-bold">Tên</span>
          <input
            value={name}
            className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Địa chỉ Email</span>
          <input
            value={email}
            className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Số điện thoại</span>
          <input
            value={phone}
            className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Địa chỉ chi tiết</span>
          <input
            value={location}
            className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <button
          className=" w-40  h-14 bg-lime-500 rounded-lg text-white"
          onClick={send}
        >
          Xác nhận
        </button>
        {fields && success && (
          <div className="rounded-lg w-72 text-center text-sm font-semibold bg-emerald-500 text-white">
            Cảm ơn bạn đã đặt hàng
          </div>
        )}
        {fields && !success && (
          <div className="rounded-lg w-72 text-center text-sm font-semibold  bg-red-500 text-white">
            Vui lòng kiểm tra lại thông tin
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
