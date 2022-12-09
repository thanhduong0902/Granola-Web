import React from "react";
import { useStateValue } from "../context/StateProvider";
import background from "../img/background.jpg";
import CartContainer from "./CartContainer";
import note1 from "../img/note1.jpg";
import note2 from "../img/note2.jpg";
import note3 from "../img/note3.jpg";
import image1 from "../img/granola-1-1.png";
import { motion } from "framer-motion";
const About = () => {
  const [{ cartShow }] = useStateValue();
  const data = [
    {
      title: "Cuộc sống tự nhiên hơn",
      desp: "Với rất nhiều lời khuyên mâu thuẫn ngoài kia, có thể khiến bạn bối rối không biết bắt đầu từ đâu. Nhưng tận dụng tối đa những gì chúng ta có ở nhà có thể trở thành bản chất thứ hai",
      imageUrl: note1,
    },
    {
      title: "Bất ngờ với sự tiện lợi của ngũ cốc",
      desp: "Với rất nhiều lời khuyên mâu thuẫn ngoài kia, có thể khiến bạn bối rối không biết bắt đầu từ đâu. Nhưng tận dụng tối đa những gì chúng ta có ở nhà có thể trở thành bản chất thứ hai",
      imageUrl: note2,
    },
    {
      title: "Thời gian biểu hạnh phúc",
      desp: "Ngừng sợ hãi về sự khởi đầu căng thẳng trong ngày bắt đầu kiểm soát buổi sáng. Một vài mẹo và thủ thuật đơn giản sẽ biến cơn sốt buổi sáng thành thuận buồm xuôi gió.",
      imageUrl: note3,
    },
  ];
  return (
    <div className="w-full min-h-screen items-center flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 1.2,
          bounce: 0.2,
        }}
        className="w-full h-520 relative bg-black"
      >
        <img
          src={background}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="w-full flex flex-col items-center justify-center absolute top-[30%]  text-white">
          <span className=" text-3xl mb-10">Granola</span>
          <span className="text-5xl">Dinh dưỡng & Nguyên chất</span>
        </div>
      </motion.div>

      <div className="w-[80%] flex flex-col items-center justify-center my-10 ">
        <span className=" text-textColor text-5xl font-bold text-center">
          Hơn bốn mươi năm trước, chúng tôi bắt đầu cuộc hành trình của mình.
          Hành trình Granola của những hạt dinh dưỡng nguyên chất, thơm ngon,
          giàu dinh dưỡng. Sản phẩm thiết yếu dành cho mọi người
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1.3,
            bounce: 0.5,
          }}
          viewport={{ once: true }}
          className="text-textColor text-xl font-bold text-center py-5
        relative before:absolute before:rounded-lg before:content before:w-460  before:h-2 before:-bottom-2 before:left-80 before:bg-gradient-to-tr from-lime-400 to-lime-600 transition-all ease-in-out duration-100
        "
        >
          Có thể lịch sử thế giới, sự phát triển của nền văn minh trong các mô
          hình chế độ ăn của con người, việc trồng ngũ cốc đã đóng một vai trò
          quan trọng. Những cây trồng đầu tiên của thời kỳ đồ đá mới bắt đầu
          phát triển nông nghiệp bao gồm lúa nước, lúa mì và lúa mạch.
        </motion.span>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[50%] flex flex-row items-center justify-center my-10"
      >
        <img src={image1} className=" w-60  object-contain" />
        <div className="flex flex-col ml-28 ">
          <span className="text-3xl text-lime-700 font-bold mb-10">
            Dinh Dưỡng
          </span>
          <span className="text-xl">
            Ngũ cốc dinh dưỡng là sự kết hợp một cách hoàn hảo từ tinh hoa của
            các loại ngũ cốc từ thiên nhiên như bột mì, đậu nành, bắp, đại mạch,
            gạo… và còn được bổ sung thêm vitamin A, D3, E, C. Sản phẩm có thể
            thay thế bữa ăn nhẹ giúp cung cấp năng lượng và bổ sung dưỡng chất
            thiết yếu cho cơ thể.
          </span>
        </div>
      </motion.div>

      <div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[50%] flex flex-row items-center justify-center my-10 "
      >
        <div className="flex flex-col mr-28">
          <span className="text-3xl text-lime-700 font-bold mb-10">
            Thành phần
          </span>
          <span className="text-xl">
            Ngũ cốc dinh dưỡng là sự kết hợp một cách hoàn hảo từ tinh hoa của
            các loại ngũ cốc từ thiên nhiên như bột mì, đậu nành, bắp, đại mạch,
            gạo… và còn được bổ sung thêm vitamin A, D3, E, C. Sản phẩm có thể
            thay thế bữa ăn nhẹ giúp cung cấp năng lượng và bổ sung dưỡng chất
            thiết yếu cho cơ thể.
          </span>
        </div>
        <img src={image1} className="w-60  object-contain" />
      </div>
      <div className="flex flex-col items-center justify-center w-[80%]">
        <span
          className="text-textColor text-3xl font-bold text-center py-5
      relative before:absolute before:rounded-lg before:content before:w-460  before:h-2 before:-bottom-2 before:-left-44 before:bg-gradient-to-tr from-lime-400 to-lime-600 transition-all ease-in-out duration-100"
        >
          Mách bạn
        </span>
      </div>
      <div className="w-[60%] flex flex-row items center justify-center">
        {data.map((item, index) => (
          <div
            className="flex flex-col items-center justify-start mx-5"
            key={index}
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 0.3,
              }}
              src={item.imageUrl}
              className=" w-80 h-64 object-contain"
            />
            <span className="text-2xl my-5 font-bold  text-lime-900">
              {item.title}
            </span>
            <span>{item.desp}</span>
          </div>
        ))}
      </div>

      {cartShow && <CartContainer />}
    </div>
  );
};

export default About;
