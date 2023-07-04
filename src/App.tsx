import React from "react";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart/Cart";
import { Main } from "./pages/Main";
import { CartContextProvider } from "./store/clices/Cart";
import "./styles/reset.scss";
import "./styles/app.scss";

function App() {
  return (
    <CartContextProvider>
      <div className="app">
       <div className="app__wrapper">
       <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
       </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
