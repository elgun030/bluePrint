// Icons
import Chevron from "../icons/chevron";

// Components
import Color from "./Color";

//hooks
import { useState } from "react";

import { useSelector } from "react-redux";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2 pb-4",
};

const Colors = (props) => {
  const [isOpen, setIsOPen ] = useState(false)
const colors  = useSelector((state) => state.colors.colors)

  const toggleColors = () =>{
    setIsOPen(!isOpen)
  }
  


  return (
    <div className="border-b">
      <button onClick={toggleColors} className={styles.btn}>
        <span className="font-bold">Color</span>
        <div>
          <Chevron className={`${styles.icon} ${isOpen && "rotate-180"}`} color="black" />
        </div>
      </button>
  { isOpen && (    <ul className={styles.ul}>
    {colors.map((color, index) =>  <Color key={index} color={color} /> )}
       
      </ul>)}
    </div>
  );
};

export default Colors;
