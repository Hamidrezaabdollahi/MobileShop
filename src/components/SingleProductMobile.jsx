
import ColorBullet from "../UI/ColorBullet";
import SellerInfoIcon from "../UI/SellerInfoIcon";
import GauranteeIcon from "../UI/GauranteeIcon";
import LogisticIcon from "../UI/LogisticIcon";
import ProductFeatures from "./ProductFeatures";
import { toPersianNumbersWithComma } from "../utilities/toPersianNumbers";

function SingleProductMobile({...product}) {
  if (product) return (
    <div className="md:hidden mb-20">
      <div className="flex flex-col gap-y-9 items-center px-4">
        <ImageHolder imgUrl={product.imgUrl} />
        <TitleHolder product={product} />
        <PickColor colors={product.colors} />
        <div className="flex flex-col w-full  gap-y-4 text-slate-700 text-xs">
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center justify-center gap-x-2">
              <div className="flex items-center justify-center gap-x-2">
                <SellerInfoIcon /> فروشنده :
              </div>
              <span className="font-extralight">دیجی‌تایز</span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <div className="flex items-center justify-center gap-x-2">
                <GauranteeIcon /> گارانتی :
              </div>
              <span className="font-extralight">۱۸ ماه زرین خدمت</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <div className="flex items-center justify-center gap-x-4">
              <div className="flex items-center justify-center gap-x-2">
                <LogisticIcon /> ارسال توسط :
              </div>
              <span className="font-extralight">انبار تهران</span>
            </div>
          </div>
        </div>
        <div className="bg-white w-full py-4 px-8 rounded-lg">
          <ProductFeatures
            faceForm={product.faceForm}
            usage={product.usage}
            strapMaterial={product.strapMaterial}
          />
        </div>
        <div className="w-full ">
        <AddToCartSection price={product.price} />
        </div>
      </div>
    </div>
  );
}

export default SingleProductMobile;

function PickColor({ colors }) {
  return (
    <div className="flex justify-between items-center max-w-xs w-full">
      <div>انتخاب رنگ </div>
      <div className="flex">
        <ColorBullet colors={colors} />
      </div>
    </div>
  );
}

function ImageHolder({ imgUrl }) {
  return (
    <div className="w-4/5 max-w-xs p-4">
      <img src={imgUrl} className="w-full h-auto" alt="" />
    </div>
  );
}

function TitleHolder({ product }) {
  return (
    <div className="flex items-center justify-center flex-col gap-y-2">
      <span className="text-xl font-medium ">{product.title}</span>
      <span className="text-stone-600 text-md font-light">
        {product.engTitle}
      </span>
    </div>
  );
}

function AddToCartSection ({price}){
  return(
    <div className="flex items-center justify-between">
      <div className="">
        <button className="w-full flex items-center justify-center bg-orange-500 text-white font-semibold py-4 px-10 rounded-lg">اضافه به سبد خرید</button>
      </div>
      <div className="flex flex-col items-start justify-center pl-4 "><span className="text-2xl">{toPersianNumbersWithComma(price)}</span> <span className="font-light">تومان</span></div>
    </div>
  )
}