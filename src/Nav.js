import React, {useState, useEffect} from 'react'
import "./Nav.css"
function Nav(){
 const[show, handleShow] = useState(false);
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY >100){
          handleShow(true);
        }else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);
    return (
    <div className={`Nav ${show && "nav_black"}`}>
    <img
    className="nav_logo"
    src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=41"
    alt="Netflix Logo" />
    <img
    className="nav_avatar"
    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
    alt="Netflix Logo" />
    </div>

  );
}

export default Nav;
