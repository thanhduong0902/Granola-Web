import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const Login = () => {
  const [emaillog, setEmaillog] = useState();
  const [passwordlog, setPasswordlog] = useState();
  const navigate = useNavigate();
  const [{ foodItems }, dispatch] = useStateValue();
  const singin = async () => {
    try {
      const auth = getAuth();
      if (!emaillog || !emaillog.includes("@gmail.com") || !passwordlog) {
        alert("Vui lòng điền đúng định dạng");
      } else {
        const {
          user: { refreshToken, providerData },
        } = await signInWithEmailAndPassword(auth, emaillog, passwordlog);
        console.log(providerData[0]);
        dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        navigate("/");
      }
    } catch (error) {
      alert("Thông tin đăng nhập không đúng");
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex  items-center justify-center">
      <div className="gap-5 flex flex-col">
        <p className=" text-3xl text-headingColor font-bold">Đăng nhập</p>
        <p className="text-xl font-bold">Email</p>
        <input
          value={emaillog}
          className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
          onChange={(e) => {
            setEmaillog(e.target.value);
          }}
        />
        <p className="text-xl font-bold">Mật khẩu</p>
        <input
          type="password"
          value={passwordlog}
          className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
          onChange={(e) => {
            setPasswordlog(e.target.value);
          }}
        />
        <button
          onClick={singin}
          className=" w-40 h-10 bg-lime-500 rounded-lg text-white p-2"
        >
          Đăng nhập
        </button>

        <p>
          Khách hàng mới?
          <span
            onClick={() => {
              navigate("/signup");
            }}
            className=" text-lime-500 cursor-pointer"
          >
            {" "}
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
