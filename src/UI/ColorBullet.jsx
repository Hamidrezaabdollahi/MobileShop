import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

function ColorBullet({ colors }) {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className="flex">
      {colors?.map((color) => {
        let bgColor =
          color === "red"
            ? "bg-red-400"
            : color === "blue"
            ? "bg-blue-400"
            : color === "gray"
            ? "bg-gray-400"
            : color === "amber"
            ? "bg-amber-400"
            : color === "green"
            ? "bg-green-400"
            : color === "violet"
            ? "bg-violet-400"
            : color === "purple"
            ? "bg-purple-400"
            : color === "stone"
            ? "bg-stone-400"
            : "";
        return (
          <span
            key={color}
            id={color}
            onClick={(e) => setSelectedColor(e.target.id)}
            className={`w-6 h-6 lg:h-7 lg:w-7 border border-white rounded-full  flex items-center justify-center  ${bgColor} -mr-1.5  ${
              color === selectedColor && "ring-2 ring-orange-300"
            }`}
          >{color === selectedColor && <CheckIcon className="text-stone-50 size-5" />}</span>
        );
      })}
    </div>
  );
}

export default ColorBullet;
