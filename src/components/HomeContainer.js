import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { ConvertMoney } from "../utils/ConvertMoney";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-lime-100 px-4 py-1 rounded-full">
          <p className="text-base text-lime-500 font-semibold">
            Giao hàng nhanh chóng
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-lime-600 ">
          Granola
          <span className="text-[3rem] lg:text-[5rem] text-black"> là gì?</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Ngũ cốc Granola là loại ngũ cốc ăn nhanh của Mỹ được mix từ 7 loại hạt
          dinh dưỡng: óc chó, hạnh nhân, hạt điều, hạt bí, yến mạch, nho đen,
          nho vàng, nam việt quất, mật ong .Toàn bộ các hạt đều là hạt nhập khẩu
          Úc, Mỹ đảm bảo chất lượng. Các loại hạt được nướng giòn với màu nâu
          vàng trông rất đẹp mắt và hấp dẫn đặc biệt là với trẻ em, nó có thể
          coi như một món snack ăn vặt.
        </p>

        {/* <button
          type="button"
          className="bg-gradient-to-br from-lime-400 to-lime-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Đặt hàng ngay
        </button> */}
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" h-60 lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 object-contain"
                  alt="I1"
                />
                <p className="lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  {ConvertMoney(n.price)}{" "}
                  <span className="text-sm text-red-600">VNĐ</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
