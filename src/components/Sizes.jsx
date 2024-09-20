// Icons
import Chevron from "../icons/chevron";

// Components
import Size from "./Size";

//Hooks
import { useState } from "react";
import { useSelector } from "react-redux";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full",
  icon: "duration-100 w-4 h-4",
  ul: "flex flex-wrap gap-2",
};

const Sizes = (props) => {
const sizes = useSelector((state) => state.size.sizes ); 

  const [isOpen, setIsOPen ] = useState(false)
  const toggleSizes = () =>{
    setIsOPen(!isOpen)
  }
  
  return (
    <div>
      <button onClick={toggleSizes} className={styles.btn}>
        <span className="font-bold">Size</span>
        <div>
          <Chevron className={`${styles.icon} ${isOpen && "rotate-180"} `} color="black" />
        </div>
      </button>
     { isOpen && ( <ul className={styles.ul}>
      {sizes.map(size => (<Size key={size}>{size}</Size>))}
       
      </ul>)}
    </div>
  );
};

export default Sizes;
