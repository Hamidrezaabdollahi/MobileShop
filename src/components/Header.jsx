import SearchIcon from "../UI/SearchIcon";

function Header() {
  return (
    <div className="hidden md:block w-full p-6  bg-white  sticky top-0 shadow-lg z-50 ">
      <div className="2xl:max-w-screen-2xl mx-auto flex items-center  justify-between text-sm ">
        <ul className="flex shrink-0 items-center  justify-around font-light text-slate-800 pl-8 gap-x-0  lg:gap-x-2 ">
          <li>
            <a href="#" className="p-4 text-lg hover:bg-gray-200 rounded-lg transition-all duration-300 w-full">Logo</a>
          </li>
          <li>
            <a href="#" className="p-4 text-lg hover:bg-gray-200 rounded-lg transition-all duration-300 w-full">خانه</a>
          </li>
          <li>
            <a href="#" className="p-4 text-lg hover:bg-gray-200 rounded-lg transition-all duration-300 w-full">تلفن همراه</a>
          </li>
          <li>
            <a href="#" className="p-4 text-lg hover:bg-gray-200 rounded-lg transition-all duration-300 w-full">لپ تاپ</a>
          </li>
          <li>
            <a href="#" className="p-4 text-lg hover:bg-gray-200 rounded-lg transition-all duration-300 w-full">ساعت هوشمند</a>
          </li>
        </ul>
        <div className="flex items-center p-2 rounded flex-1 bg-gray-100 xl:max-w-xl">
            <SearchIcon />
            <input className="w-full bg-transparent px-4 text-slate-600 outline-none rounded-xl border-slate-700  focus:ring-0 focus:outline-none border-none  " type="search" name="search" placeholder="جست و جوی نام محصول، نام برند، نام مدل و ...."/>
        </div>
      </div>
    </div>
  );
}

export default Header;
 