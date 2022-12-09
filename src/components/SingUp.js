import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SingUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cfpassword, setCfPassword] = useState();
  const [displayName, setdisplayName] = useState();
  const navigate = useNavigate();
  const signup = async () => {
    try {
      const auth = getAuth();

      if (!email || !email.includes("@gmail.com") || cfpassword !== password) {
        alert("Vui lòng điền đúng định dạng");
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex  items-center justify-center">
      <div className="gap-5 flex flex-col">
        <p className=" text-3xl text-headingColor font-bold">Đăng ký</p>

        <p className="text-xl font-bold">Email</p>
        <input
          value={email}
          className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="text-xl font-bold">Mật khẩu</p>
        <input
          value={password}
          type="password"
          className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="text-xl font-bold">Nhập lại mật khẩu</p>
        <input
          value={cfpassword}
          type="password"
          className=" w-96 h-10 border border-gray-300 rounded-lg p-2"
          onChange={(e) => {
            setCfPassword(e.target.value);
          }}
        />
        <button
          onClick={signup}
          className=" w-40 h-10 bg-lime-500 rounded-lg text-white"
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default SingUp;
