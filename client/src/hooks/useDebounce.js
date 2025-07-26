import { useRef } from "react";
function useDebounce(cb,delay=2000){
  const timerRef = useRef();

return (...args)=>{
    console.log(args);
    clearTimeout (timerRef.current);
    timerRef.current = setTimeout(()=>{
        cb(...args);
    },delay);
}
}
export default useDebounce;