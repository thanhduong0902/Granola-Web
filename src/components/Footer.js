import React, { useEffect, useState } from "react";
import { MdFmdGood, MdMail, MdPhone } from "react-icons/md";
import logo from "../img/logo.png";
const Footer = () => {
  const [title, setTitle] = useState();
  const [show, setShow] = useState();
  useEffect(() => {}, [show]);
  return (
    <div className="w-full h-auto">
      <div className="w-full flex items-center justify-center flex-col pt-3">
        <span className="text-3xl">Đăng kí để nhận tin</span>
        <div className=" w-508 flex flex-row py-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập địa chỉ Email"
            className=" w-96 h-full text-lg bg-transparent outline-none border-2 placeholder:text-gray-400 text-textColor p-2"
          />
          <button
            className=" w-28  bg-yellow-400"
            onClick={() => {
              title && title.includes("@gmail.com")
                ? setShow(true)
                : setShow(false);
            }}
          >
            Đăng kí
          </button>
        </div>
        {show == true ? (
          <div className="w-508 mb-3">Cảm ơn bạn đã đăng kí!</div>
        ) : show == false ? (
          <div className="w-508 mb-3">Email không hợp lệ</div>
        ) : (
          <div />
        )}
        <div className="w-full h-40  bg-green-900 flex items-center justify-center">
          <div className="w-[70%] h-full flex flex-wrap gap-20 py-2 text-white ">
            <img className="h-full" src={logo} />
            <div className="flex flex-col">
              <span className="text-2xl pb-2 cursor-pointer">
                Hỗ trợ khách hàng
              </span>
              <span className="py-1 cursor-pointer hover:text-lime-300">
                Chính sách giao hàng
              </span>
              <span className="py-1 cursor-pointer hover:text-lime-300">
                Chính sách đổi hàng
              </span>
              <span className="py-1 cursor-pointer hover:text-lime-300">
                Điều khoản dịch vụ
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-2xl pb-2">Thông tin liên hệ</span>
              <div className="flex flex-row items-center cursor-pointer hover:text-lime-300">
                <MdFmdGood className="text-xl mr-2" />
                <span className="py-1 ">
                  Địa chỉ: Khu đô thị Geleximco – Hà Đông – Hà Nội
                </span>
              </div>
              <div className="flex flex-row items-center cursor-pointer hover:text-lime-300">
                <MdMail className="text-xl mr-2" />
                <span className="py-1"> Email: granola@gmail.com</span>
              </div>
              <div className="flex flex-row items-center cursor-pointer hover:text-lime-300">
                <MdPhone className="text-xl mr-2" />
                <span className="py-1"> Số điện thoại: 0325 861 088</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
