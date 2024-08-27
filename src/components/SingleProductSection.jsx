import MobileIcon from "../UI/MobileIcon";
import LaptopIcon from "../UI/LaptopIcon";
import WatchIcon from "../UI/WatchIcon";
import { NavLink } from "react-router-dom";

import BreadCrumb from "./BreadCrumb";
import ColorBullet from "../UI/ColorBullet";

import SellerInfoIcon from "../UI/SellerInfoIcon";
import GauranteeIcon from "../UI/GauranteeIcon";
import LogisticIcon from "../UI/LogisticIcon";
import { toPersianNumbersWithComma } from "../utilities/toPersianNumbers";
import ProductFeatures from "./ProductFeatures";

export function SingleProductSection({ ...product }) {
  return (
    <div className="2xl:max-w-screen-2xl mx-auto grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 mt-4 px-4">
      <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2">
        <SideBar />
      </div>
      <div className=" hidden md:block col-span-8 lg:col-span-9 ">
        <div className="p-6 mb-5 bg-white rounded-xl ">
          <BreadCrumb {...product} />
        </div>
      </div>
      <div className=" col-span-12 md:col-span-8 lg:col-span-9">
        <ProductDetail {...product} />
      </div>
    </div>
  );
}

function ProductDetail({
  brandFa,
  groupingFa,
  title,
  colors,
  imgUrl,
  engTitle,
  price,
  usage,
  faceForm,
  strapMaterial,
}) {
  return (
    <div className="hidden md:flex items-start bg-white justify-between w-full p-6 rounded-xl  ">
      <div className="w-3/4 flex">
        <div className="w-5/12 flex flex-col items-center justify-start ">
          <MainImage imgUrl={imgUrl} />
          <SubImages imgUrl={imgUrl} />
        </div>
        <div className="w-7/12 px-8 bg-white flex flex-col  ">
          <div className="flex items-center justify-start gap-x-3 text-sm text-orange-500 font-light mb-2 lg:mb-4">
            <span className="flex items-center justfy-center gap-x-1">
              <WatchIcon /> {groupingFa}
            </span>
            <span> {brandFa}</span>
          </div>
          <div className="flex flex-col gap-y-2 text-slate-800 mb-2 lg:mb-4">
            <div className="text-sm lg:text-lg font-normal">{title}</div>
            <div className="font-extralight text-xs lg:text-lg ">
              {engTitle}
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-5 lg:gap-x-14 w-3/4 lg:pr-4 pt-8 border-t-[1px] border-gray-300/30 mb-3 lg:mb-5">
            <span className="text-slate-800 text-xs lg:text-base font-light ">انتخاب رنگ </span>
            <ColorBullet colors={colors} />
          </div>
          <ProductFeatures faceForm={faceForm} usage={usage} strapMaterial={strapMaterial}  />
        </div>
      </div>
      {/* left section  */}
      <div className=" w-3/8 lg:w-1/4  text-slate-800 ">
        <div className="flex flex-col items-start p-4 justify-between bg-stone-100 gap-y-7 lg:gap-y-14 rounded-xl">
          {/* upper section  */}
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col lg:flex-row items-start justify-start gap-x-2 w-full">
              <span className="hidden lg:block text-sm lg:text-base">
                <SellerInfoIcon />
              </span>{" "}
              <span>فروشنده: </span>
              <span className="font-extralight text-sm lg:text-base ">
                دیجی‌تایز
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-start gap-x-2 w-full">
              <span className="hidden lg:block text-sm lg:text-base">
                <GauranteeIcon />
              </span>{" "}
              <span>گارانتی: </span>
              <span className="font-extralight text-sm lg:text-base ">
                ۱۸ ماه زرین خدمت
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-start gap-x-2 w-full">
              <span className="hidden lg:block text-sm lg:text-base">
                <LogisticIcon />
              </span>{" "}
              <span>ارسال از: </span>
              <span className="font-extralight text-sm lg:text-base ">
                انبار تهران
              </span>
            </div>
          </div>
          {/* bottom section  */}
          <div className="flex flex-col w-full items-center gap-y-4">
            <div className="text-orange-600 font-medium  self-end text-sm lg:text-lg">
              {toPersianNumbersWithComma(price)}
              <span className="font-extralight">تومان</span>
            </div>
            <button className="text-stone-50 bg-orange-500 w-full py-3 rounded-lg text-sm lg:text-base">
              اضافه به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Grouping() {
  return (
    <div>
      <div className="text-xl font-bold text-orange-400 ">دسته بندی</div>
      <ul>
        <li>
          <NavLink
            to="/mobile"
            className="flex items-center my-4 cursor-pointer text-lg hover:bg-slate-100 px-2"
          >
            <span>
              <MobileIcon />
            </span>
            <span className="text-slate-500 p-2">تلفن همراه</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/laptop"
            className="flex items-center my-4 cursor-pointer text-lg hover:bg-slate-100 px-2"
          >
            <span>
              <LaptopIcon />
            </span>
            <span className="text-slate-500 p-2">لپ تاپ</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/smart-watch"
            className="flex items-center my-4 cursor-pointer text-lg hover:bg-slate-100 px-2"
          >
            <span>
              <WatchIcon />
            </span>
            <span className="text-slate-500 p-2">ساعت هوشمند</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

function SideBar() {
  return (
    <div className="bg-white p-6 rounded-xl mb-5">
      <Grouping />
    </div>
  );
}


function SubImages({ imgUrl }) {
  return (
    <div className="flex items-center justify-center gap-x-1 w-1/3 px-2">
      <img
        src={imgUrl}
        className=" border border-gray-300 p-2 rounded-lg "
        alt=""
      />
      <img
        src={imgUrl}
        className=" border border-gray-300 p-2 rounded-lg "
        alt=""
      />
      <img
        src={imgUrl}
        className=" border border-gray-300 p-2 rounded-lg "
        alt=""
      />
    </div>
  );
}
function MainImage({ imgUrl }) {
  return (
    <div className="my-4  p-2 w-full  flex items-center justify-center">
      <img src={imgUrl} className="shadow-sm" alt="" />
    </div>
  );
}
