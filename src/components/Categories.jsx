import { ChevronRightIcon } from "@heroicons/react/16/solid"
import Header from "./Header"
import { Navbar } from "./Navbar"
import BottomNavigation from "./BottomNavigation"


function Categories() {
  return (
    <div className="px-4">
      <Header />
      <Navbar addressToNavigate={-1} title="دسته بندی ">
        <ChevronRightIcon className="size-8" />
      </Navbar>
      <Body />
      <BottomNavigation />
    </div>
  )
}

export default Categories


function Body (){
  return (
  <div className="flex flex-col w-full gap-y-6 ">
    <div className="relative flex items-center justify-center bg-white shadow-md rounded-lg cursor-pointer">
      <span className="absolute top-3 right-auto text-slate-600 font-light">تلفن همراه</span>
      <img src="images/SortImgs/mobilePhone.png" className="  w-32" alt="" />
    </div>
    <div className="relative flex items-center justify-center bg-white shadow-md rounded-lg cursor-pointer">
      <span className="absolute top-3 right-auto text-slate-600 font-light">لپ تاپ</span>
      <img src="images/SortImgs/laptop.png" className="  w-32" alt="" />
    </div>
    <div className="relative flex items-center justify-center bg-white shadow-md rounded-lg cursor-pointer">
      <span className="absolute top-3 right-auto text-slate-600 font-light">ساعت هوشمند</span>
      <img src="images/SortImgs/smartWatch.png" className="  w-32" alt="" />
    </div>
  </div>
  )
}