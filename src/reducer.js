import { CLEAR_CART, INCREASE, DECREASE, REMOVE, GET_TOTALS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case INCREASE:
      let tempCart1 = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart1 };
    case DECREASE:
      let tempCart2 = [];
      if (action.payload.amount === 1) {
        tempCart2 = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        tempCart2 = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      }
      return { ...state, cart: tempCart2 };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
};

export default reducer;
