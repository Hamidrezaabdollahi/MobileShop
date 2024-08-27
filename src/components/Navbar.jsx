
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";


export function Navbar({ children, title, addressToNavigate }) {
  const navigate = useNavigate()
  return (
    <div className="md:hidden flex items-center justify-between mt-10 px-4 mb-6">
      <div className="shadow-lg  bg-white w-12 h-12 flex items-center justify-center" onClick={()=>navigate(addressToNavigate)}>
        {children}
      </div>
      <div className="text-lg font-bold text-slate-800">{title}</div>
      <div className="w-12 h-12 text-slate-800 rounded  bg-white shadow-lg flex items-center justify-center">
        {<MagnifyingGlassIcon className="size-8" />}
      </div>
    </div>
  );
}
