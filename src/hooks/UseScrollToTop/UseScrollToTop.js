import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UseScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    //  use setimeout tricks to scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0)
  }, [pathname]);

  return null;
}
