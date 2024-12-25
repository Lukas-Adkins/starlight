import { useEffect } from "react";

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    const body = document.body;
    if (isLocked) {
      body.style.transition = "overflow 0.3s ease";
      body.classList.add("overflow-hidden");
    } else {
      body.style.transition = "overflow 0.3s ease";
      body.classList.remove("overflow-hidden");
    }
    return () => body.classList.remove("overflow-hidden");
  }, [isLocked]);
};

export default useBodyScrollLock;