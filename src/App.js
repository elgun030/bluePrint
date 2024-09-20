// Router
import { Route, Routes } from "react-router-dom";

// Components
import Container from "./components/Container";
import Header from "./components/Header";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./components/Layout";

import { useLocation } from "react-router-dom";


const App = () => {
const {pathname} = useLocation()

  return (
    <Container>
    {/* {pathname === '/sign-in' || pathname === '/sign-up' ? null : <Header />} */}
      <main className="my-20 font-satoshi">
        <Routes>
          <Route  path="/" element={<Layout />}>
               <Route index element={<Home/>} />
               <Route path="products" element={<ProductsPage />} />
               <Route path="products/:id" element={<ProductPage />} />
               <Route path="cart" element={<CartPage />} />

            </Route>             
               <Route path="sign-in" element={<SignInPage />} />
               <Route path="sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </Container>
  );
};

export default App;
