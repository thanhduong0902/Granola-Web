import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Checkout,
  Contact,
  CreateContainer,
  Footer,
  Header,
  Login,
  MainContainer,
  SingUp,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import About from "./components/About";

import { fetchCart } from "./utils/fetchLocalStorageData";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  //console.log("cart", fetchCart());

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen flex flex-col bg-primary overflow-hidden">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default App;
