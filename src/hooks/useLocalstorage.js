import { useEffect, useState } from "react";

export default function useLocalstorage(key, initialValue) {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(value)) || initialValue);

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))

},[value])

return [value, setValue]
}
    