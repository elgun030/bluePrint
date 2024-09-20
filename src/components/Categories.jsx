// Icons
import Chevron from "../icons/chevron";

// Components
import  Category from "../components/Category";
//hooks
import { useState } from "react";

//redux hooks
 import { useSelector } from "react-redux";

// Styles
const styles = {
  btn: "flex justify-between items-center py-4 w-full ",
  ul: "text-sm font-medium flex flex-col gap-5 pb-4",
  icon: "duration-200 w-4 h-4",
};

const Categories = (props) => {
 const categories =  useSelector((state) => state.categories.categories)
const [isOpen, setIsOPen ] = useState(false)
const toggleCategories = () =>{
  setIsOPen(!isOpen)
}


  return (
    <div className="border-b">
      <button onClick={toggleCategories} className={styles.btn}>
        <span className="font-bold">Category</span>
        <div>
          <Chevron className={`${styles.icon} ${isOpen && "rotate-180"}  `} color="black" />
        </div> 
      </button>
      { isOpen && (<ul className={styles.ul}>
     {categories.map((category,index) => {
      return <Category key={index} >{category}</Category>
     })}
      </ul>)}
    </div>
  );
};

export default Categories;
