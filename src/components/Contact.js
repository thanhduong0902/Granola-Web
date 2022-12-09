import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [fields, setFields] = useState(false);
  const validatePhone = (e) => {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return regex.test(e) === false;
  };
  const send = () => {
    if (
      !email ||
      !name ||
      !phone ||
      !message ||
      !email.includes("@gmail.com") ||
      validatePhone(phone)
    )
      setSuccess(false);
    else setSuccess(true);
    setFields(true);
    setTimeout(() => {
      setFields(false);
    }, 4000);
  };

  return (
    <div className="w-full h-screen items-start justify-center flex">
      <div className="w-[60%] flex flex-row items-center justify-center ">
        <div className="flex flex-col gap-3">
          <span className="text-5xl font-bold">Liên hệ với chúng tôi</span>
          <img src={logo} className="object-contain" />
          <span className="font-bold">
            Granola đảm bảo dịch vụ và chất lượng sản phẩm tốt nhất cho khách
            hàng
          </span>
        </div>

        <div className="flex flex-col gap-8 ml-16">
          <div>
            <span className="font-bold">Tên</span>
            <input
              value={name}
              className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <span className="font-bold">Địa chỉ Email</span>
            <input
              value={email}
              className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <span className="font-bold">Số điện thoại</span>
            <input
              value={phone}
              className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="font-bold">Nội dung</p>
            <textarea
              value={message}
              className=" w-96 h-32 border border-gray-300 rounded-lg p-2"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button
            className=" w-40 h-10 bg-lime-500 rounded-lg text-white"
            onClick={send}
          >
            Gửi
          </button>
          {fields && success && (
            <div className="rounded-lg text-center text-sm font-semibold bg-emerald-500 text-white">
              Cảm ơn vì đã liên hệ chúng tôi. Granola sẽ phản hồi bạn sớm nhất
              có thể
            </div>
          )}
          {fields && !success && (
            <div className="rounded-lg text-center text-sm font-semibold  bg-red-500 text-white">
              Vui lòng kiểm tra lại thông tin
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
