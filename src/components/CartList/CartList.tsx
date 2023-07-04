import { useCartState } from "../../store/clices/Cart";
import { CartItem } from "../CartItem/CartItem";
import cartList from './cartList.module.scss'
import { Divider } from "../Divider";

export function CartList() {
  const cartItems = useCartState();
  return (
    <div className={cartList['cart-list']}>
      <div className={cartList['cart-list__toolbar']}>
        <p className={cartList['cart-list__title']}>Товар</p>
        <p className={cartList['cart-list__title']}>К-во</p>
      </div>
      <Divider />
      <div className={cartList['cart-list__list']}>
        {Object.keys(cartItems).map((id, idx, all) => {
          const isLast = all.length - 1 === idx 
          return <CartItem isLast={isLast} id={+id} />;
        })}
      </div>
    </div>
  );
}
