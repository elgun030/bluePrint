// Components
import Filter from "../components/Filter";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
const userId = localStorage.getItem("userId");
if (!userId) {
        navigate("/sign-in")
      }
  
  return (
    <div className="grid grid-cols-12 gap-20">
      <Filter />
      <Products />
    </div>
  );
};

export default Home;



// const navigate = useNavigate()

// const userId = localStorage.getItem("userId");
//   const checkUserId = () =>{
//     if (!userId) {
//       navigate("/sign-in")
//     }
  