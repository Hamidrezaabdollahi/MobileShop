import {  useState } from "react";
import BasketIcon from "../UI/BasketIcon";
import GroupingIcon from "../UI/GroupingIcon";
import HomeIcon from "../UI/HomeIcon";
import LikeIcon from "../UI/LikeIcon";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNavigation() {
  const desiredAddress = useLocation()
  const pathname = desiredAddress.pathname.substring(1)
  const [activeTab, setActiveTab] = useState(pathname);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full rounded-t-md md:hidden bg-white shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)]">
      <nav>
        <ul className="flex items-center justify-between px-4 py-2">
          <SingleTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            engTitle="home"
            farTitle="خانه"
            navTo="/home"
          >
            <HomeIcon />
          </SingleTab>
          <SingleTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            engTitle="categories"
            farTitle="دسته بندی"
            navTo="/categories"
          >
            <GroupingIcon />
          </SingleTab>
          <SingleTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            engTitle="cart"
            farTitle="سبد خرید"
            navTo="/cart"
          >
            <BasketIcon />
          </SingleTab>

          <SingleTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            engTitle="favorites"
            farTitle="علاقه مندی"
            navTo="/favorites"
          >
            <LikeIcon />
          </SingleTab>
        </ul>
      </nav>
    </div>
  );
}

export default BottomNavigation;

function SingleTab({
  children,
  activeTab,
  setActiveTab,
  engTitle,
  farTitle,
  navTo,
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(navTo)}
      className=" px-4 py-2 h-14 flex items-center justify-center rounded-lg duration-300 transition-all "
    >
      <div
        onClick={() => setActiveTab(engTitle)}
        className={`flex items-center justify-center gap-x-2 text-xs ${
          activeTab === engTitle ? "text-slate-600" : "text-gray-400"
        }`}
      >
        <span>{children}</span>
        {activeTab === engTitle && <span>{farTitle}</span>}
      </div>
    </li>
  );
}
