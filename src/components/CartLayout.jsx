import {
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";

import { Navbar } from "./Navbar";
import Header from "./Header";
import BottomNavigation from "./BottomNavigation";
import data from "../data/data.json";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../utilities/toPersianNumbers";
import XMarkIcon from "../UI/XMarkIcon";
import { useState } from "react";

function CartLayout() {
  const product = data.find((element) => element.id == 1);

  return (
    <div className="px-4">
      <Header />
      <Navbar addressToNavigate={-1} title="سبد خرید">
        <ChevronRightIcon className="size-8" />
      </Navbar>
      <BasketSingleItem product={product} />
      <BottomNavigation />
    </div>
  );
}

export default CartLayout;

function BasketSingleItem({ product }) {
  const [accordionOpen, setAccordionOpen] = useState();
  return (
    <div className="flex flex-col md:flex-row items-cnter justify-between xl:max-w-screen-xl mx-auto gap-x-4">
      <div className="flex items-center h-32 justify-between w-full md:w-3/4 shadow-lg rounded-lg bg-stone-50 px-3 py-2 mt-4 ">
        {/* rightSide */}
        <div className="flex items-center h-full justify-center gap-x-3">
          {/* ImageHolder  */}
          <div className=" flex items-center justify-center w-32">
            <img src={product.imgUrl} alt="" />
          </div>
          {/* DescriptionHolder  */}
          <div className="flex flex-col w-full h-full items-start justify-between py-4 px-2">
            <div className="text-slate-900">{product.title}</div>
            <div className="text-orange-700">
              {toPersianNumbersWithComma(product.price)} تومان
            </div>
          </div>
        </div>
        {/* LeftSide */}
        <div className="flex h-full flex-col items-end justify-between px-2 py-4">
          <span className="cursor-pointer ">
            <XMarkIcon />
          </span>
          <Quantification />
        </div>
      </div>
      
      <div className="w-full md:w-1/4 ">
        <div className=" flex-col items-center justify-between shadow-lg rounded-lg bg-stone-50 px-5 py-3 mt-4">
          <div className="flex items-center justify-between w-full flex-wrap gap-y-3 ">
            <span className="text-slate-800">مجموع قیمت </span>
            <span className=" text-orange-600 font-light">
              {toPersianNumbersWithComma(product.price)} تومان
            </span>
            <div className=" text-slate-600 w-full">
              <span
                className="text-xs cursor-pointer"
                onClick={() => setAccordionOpen(!accordionOpen)}
              >
                کد تخفیف دارید ؟
              </span>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
                  accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 flex flex-col  w-full">
                  <div className="flex items-center justify-between my-2">
                    <span className=" w-20 h-9 flex items-center justify-start font-light text-sm">
                      کد تخفیف
                    </span>
                    <div className="flex items-center justify-center">
                      <OffCodeBox />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2">
                    <span className="text-sm">تخفیف شما </span>
                    <span className="text-sm">
                      {toPersianNumbersWithComma(0)} تومان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-5 mb-4">
                <span className="text-slate-800 border-t-[1px] grow pt-4">
                  قیمت نهایی{" "}
                </span>
                <span className=" text-orange-600 font-light pt-4">
                  {toPersianNumbersWithComma(product.price)} تومان
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-orange-400 hidden md:block text-white w-full py-2 rounded-lg  font-light mt-3 hover:bg-orange-300 transition-all duration-300 ">
          اضافه به سبد خرید
        </button>
        <button className=" border-[1.35px] hidden md:block border-orange-400 text-orange-400 w-full py-2 rounded-lg  font-light mt-3 hover:bg-stone-50 transition-all duration-300 ">
          انصراف از خرید
        </button>
      </div>

      <div className=" md:hidden w-full px-4 fixed bottom-24 left-0">
        <button className="bg-orange-500 text-white w-full py-5 rounded-lg text-xl font-semibold">
          ادامه فرآیند خرید
        </button>
      </div>
    </div>
  );
}

function Quantification() {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <span className="text-slate-600 rounded-full bg-slate-200 p-0.5">
        <PlusIcon className="size-4" />
      </span>
      <span className="border border-orange-600 px-2 py-1 rounded">
        {toPersianNumbers(1)}
      </span>
      <span className="text-orange-400 rounded-full bg-orange-200 p-0.5">
        <MinusIcon className="size-4" />
      </span>
    </div>
  );
}

function OffCodeBox() {
  return (
    <div className="flex items-center justify-between gap-x-0 ">
      <input
        type="text"
        placeholder="123ABC"
        className="border-none bg-slate-200 my-2 rounded-tr-lg rounded-br-lg focus:ring-0  w-20 h-9"
      />
      <button className="bg-orange-500 text-stone-50 rounded-tl-lg rounded-bl-lg w-14 h-9 ">
        تایید
      </button>
    </div>
  );
}
