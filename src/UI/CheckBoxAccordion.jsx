import { useState } from "react";
import ChevronIcons from "./ChevronIcons";

function CheckBoxAccordion({ children, title, options }) {
    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      {/*this is header*/}
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between my-4 cursor-pointer text-lg hover:bg-slate-100 px-2"
      >
        <div className="flex justify-center items-center">
          {children}
          <span className="text-slate-500 p-2">{title}</span>
        </div>
        <span
          className={`transition-all duration-300 ${
            accordionOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronIcons className={`px-2`} />
        </span>
      </div>
      {/* this is body  */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-5 flex flex-col gap-y-2">
          {options.map((option) => {
            return (
              <label
                key={option.title}
                htmlFor={option.id}
                className="flex items-center justify-start gap-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="form-checkbox rounded focus:ring-0 hover:border-orange-500 text-orange-400"
                  name={option.name}
                  id={option.id}
                />
                <span>{option.title}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CheckBoxAccordion;
