// import data from "../data/data.json";
import { useState } from "react";
import { toPersianNumbersWithComma } from "../utilities/toPersianNumbers";
import MobileIcon from "../UI/MobileIcon";
import LaptopIcon from "../UI/LaptopIcon";
import WatchIcon from "../UI/WatchIcon";
import { Link, NavLink } from "react-router-dom";
import BrandIcon from "../UI/BrandIcon";
import ColorsIcon from "../UI/ColorsIcon";
import PriceLimitationIcon from "../UI/PriceLimitationIcon";
import CheckBoxAccordion from "../UI/CheckBoxAccordion";
import RangeAccordion from "../UI/RangeAccordion";
import ColorBullet from "../UI/ColorBullet";
import AccendingIcon from "../UI/AccendingIcon";

import { useProducts } from "../context/ProductsContext";

export function ProductSession() {
  const [sort, setSort] = useState("");
  const { data } = useProducts();

  return (
    <div className="2xl:max-w-screen-2xl mx-auto grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 mt-4 px-4">
      <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2">
        <SideBar />
      </div>
      <div className=" hidden md:block col-span-8 lg:col-span-9 ">
        <div className="bg-white px-3 lg:px-4 py-2 rounded-xl gap-x-1 lg:gap-x-2  text-gray-400 flex items-center">
          <div className=" bg-orange-200/50 p-1 rounded-md flex justify-center items-center ">
            <AccendingIcon height="42" width="42" />
          </div>
          <Popular sort={sort} setSort={setSort} />
          <HighPrice sort={sort} setSort={setSort} />
          <LowPrice sort={sort} setSort={setSort} />
          <BestSeller sort={sort} setSort={setSort} />
        </div>
      </div>
      <div className=" col-span-12 md:col-span-8 lg:col-span-9">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 md:px-0 sm:gap-x-4 md:gap-x-8 md:gap-y-8">
          {data?.map((item) => (
            <SingleItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleItem({ brandFa, title, price, colors, imgUrl, id }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-2">
      <div className="mb-3 bg-gray-100 rounded-xl p-3">
        <img src={imgUrl} alt={brandFa} className=" object-cover" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-slate-300 text-sm md:text-base">{brandFa}</span>
        <div className="flex justify-center items-center">
          <ColorBullet colors={colors} />
        </div>
      </div>
      <div className="text-slate-800 text-xs font-bold mb-3 md:text-base">
        {title}
      </div>
      <div className="text-orange-600 font-meduim text-left text-sm mb-3 md:text-lg">
        {toPersianNumbersWithComma(price)} تومان
      </div>
      <hr className="mb-2" />
      <Link
        to={`/products/${id}`}
        className="w-full flex items-center justify-center font-bold text-orange-600 py-1 md:text-lg "
      >
        مشاهده و سفارش
      </Link>
    </div>
  );
}

function Category() {
  return (
    <div>
      <div className="text-xl font-bold text-orange-400 ">دسته بندی</div>
      <ul>
        <li>
          <NavLink
            to="mobile"
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
            to="laptop"
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
            to="smart-watch"
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

function FilterOnBrand() {
  return (
    <CheckBoxAccordion
      title="برند محصول"
      options={[
        { name: "brand", id: "xiaomi", title: "شیائومی" },
        { name: "brand", id: "apple", title: "اپل" },
        { name: "brand", id: "samsung", title: "سامسونگ" },
      ]}
    >
      <BrandIcon />
    </CheckBoxAccordion>
  );
}

function FilterOnColor() {
  return (
    <CheckBoxAccordion
      title="رنگ محصول"
      options={[
        { name: "color", id: "red", title: "قرمز" },
        { name: "color", id: "white", title: "سفید" },
        { name: "color", id: "black", title: "مشکی" },
        { name: "color", id: "blue", title: "آبی" },
        { name: "color", id: "green", title: "سبز" },
        { name: "color", id: "yellow", title: "زرد" },
      ]}
    >
      <ColorsIcon />
    </CheckBoxAccordion>
  );
}
function FilterOnPrice() {
  return (
    <RangeAccordion title="محدوده قیمت">
      <PriceLimitationIcon />
    </RangeAccordion>
  );
}

function Popular({ sort, setSort }) {
  return (
    <button
      onClick={() => setSort("popular")}
      className={`relative px-3 lg:px-4 py-2 ${
        sort === "popular" ? "text-slate-800" : ""
      }`}
    >
      {sort === "popular" && (
        <span className="w-2 h-2 bg-orange-400 absolute top-2 left-0 rounded-full"></span>
      )}
      محبوب ترین
    </button>
  );
}

function HighPrice({ sort, setSort }) {
  return (
    <button
      onClick={() => setSort("high-priced")}
      className={`relative px-3 lg:px-4 py-2 ${
        sort === "high-priced" ? "text-slate-800" : ""
      }`}
    >
      {sort === "high-priced" && (
        <span className="w-2 h-2 bg-orange-400 absolute top-2 left-0 rounded-full"></span>
      )}
      گران ترین
    </button>
  );
}

function LowPrice({ sort, setSort }) {
  return (
    <button
      onClick={() => setSort("low-priced")}
      className={`relative px-3 lg:px-4 py-2 ${
        sort === "low-priced" ? "text-slate-800" : ""
      }`}
    >
      {sort === "low-priced" && (
        <span className="w-2 h-2 bg-orange-400 absolute top-2 left-0 rounded-full"></span>
      )}
      ارزان ترین
    </button>
  );
}

function BestSeller({ sort, setSort }) {
  return (
    <button
      onClick={() => setSort("top-sale")}
      className={`relative px-3 lg:px-4 py-2 ${
        sort === "top-sale" ? "text-slate-800" : ""
      }`}
    >
      {sort === "top-sale" && (
        <span className="w-2 h-2 bg-orange-400 absolute top-2 left-0 rounded-full"></span>
      )}
      پرفروش ترین
    </button>
  );
}

function SideBar() {
  return (
    <div className="bg-white p-6 rounded-xl mb-5">
      <Category />
      <div>
        <div className="text-xl font-bold text-orange-400 ">فیلتر</div>
        <FilterOnBrand />
        <FilterOnColor />
        <FilterOnPrice />
      </div>
    </div>
  );
}
