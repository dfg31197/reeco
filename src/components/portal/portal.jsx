import { useEffect } from "react";
import { createPortal } from "react-dom";
const mount = document.getElementById("portal-root");
const el = document.createElement("div");
const Portal = ({ children }) => {


  useEffect(() => {
    mount.appendChild(el);
    return () => {
      try {
        mount.removeChild(el);
      } catch(err) {
        console.log('Portal Removal Error');
        console.log(err)
      }
    }
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
