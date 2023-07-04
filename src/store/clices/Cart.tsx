import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { CartAction, CartGoods } from "../../types/types";

const CartStateContext = createContext<CartGoods>({});
const CartDispatchContext = createContext<Dispatch<CartAction> | null>(null);

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [saveStorage, setSaveStorage] = useState(false);
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const storage = localStorage.getItem("skyPro/shop");
    const items = storage ? JSON.parse(storage) : {};
    dispatch({
      type: "init",
      payload: {
        items: items,
      },
    });
  }, []);

  useEffect(() => {
    if (saveStorage) {
      localStorage.setItem("skyPro/shop", JSON.stringify(state));
    }
  }, [state, saveStorage]);

  const onDispatch = (state: CartAction) => {
    setSaveStorage(true);
    dispatch(state);
  };

  return (
    <CartDispatchContext.Provider value={useMemo(() => onDispatch, [])}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

const reducer = (
  state: CartGoods,
  { type, payload }: CartAction
): CartGoods => {
  switch (type) {
    case "addItem":
      return {
        ...state,
        [payload.id]: {
          ...payload.item,
          count: state?.[payload.id]?.count
            ? state?.[payload.id]?.count + 1
            : 1,
        },
      };
    case "changeCount":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          count: payload.count,
        },
      };
    case "removeItem":
      const cloneState = { ...state };
      delete cloneState[payload.id];
      return cloneState;
    case "clearCart":
      return {};
    case "init":
      if (payload.items) {
        return payload.items;
      }
      return state;
    default:
      return state;
  }
};

const useCartState = () => {
  return useContext(CartStateContext);
};

const useDispatch = (): Dispatch<CartAction> => {
  return useContext(CartDispatchContext) as Dispatch<CartAction>;
};

export { CartContextProvider, useDispatch, useCartState };
