import BreadcrumbIcon from "../UI/BreadcrumbIcon";

function BreadCrumb({ groupingFa, brandFa, title }) {
  return (
    <div className="flex items-center justify-start w-full gap-x-2 font-light ">
      <div className="text-orange-500 cursor-pointer">{groupingFa}</div>
      <div className="flex items-center justify-center gap-x-2">
        <span>
          <BreadcrumbIcon />
        </span>
        <span className="text-orange-500 cursor-pointer">{brandFa}</span>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <span>
          <BreadcrumbIcon />
        </span>
        <span className="text-slate-600">{title}</span>
      </div>
    </div>
  );
}

export default BreadCrumb;
