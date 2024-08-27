import AccendingIcon from "../UI/AccendingIcon";
import FilterIcon from "../UI/FilterIcon";

export function FilterSort() {
  return (
    <div className="md:hidden flex items-center justify-between p-4 gap-x-4 mb-9">
      <div className="bg-white rounded p-4 flex items-center justify-start w-1/2">
        <div>
         <span className="flex items-center justify-center">
        <AccendingIcon  />
         </span> 
        </div>
        <span className="text-sm text-slate-800 mr-2">محبوب ترین </span>
      </div>
      <div className="bg-white rounded p-4 flex items-center justify-start w-1/2">
        <div>
          <FilterIcon />
          
        </div>
        <span className="text-sm text-slate-800 mr-2">فیلتر : اپل</span>
      </div>
    </div>
  );
}
