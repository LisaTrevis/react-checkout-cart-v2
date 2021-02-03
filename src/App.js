import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// data file
import cartItems from "./cart-items";
// redux files
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
