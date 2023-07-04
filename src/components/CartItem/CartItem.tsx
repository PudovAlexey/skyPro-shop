import React from "react";
import cartItem from "./cartItem.module.scss";
import "../../styles/main.scss";
import { useDispatch, useCartState } from "../../store/clices/Cart";
import { CartGood } from "../../types/types";
import { Divider } from "../Divider";
import { useLikes } from "../../hooks/useLIkes";
import { Like } from "../Like";

type CartItem = {
  id: number;
  isLast: boolean;
};

export const CartItem = React.memo(function CartItem({ id, isLast }: CartItem) {
  const dispatch = useDispatch();
  const cartState = useCartState();
  const { name, description, img, price, currency, count } = cartState[id];

  const { isLike, setIsLike } = useLikes(id);

  const onChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    dispatch({
      type: "changeCount",
      payload: {
        id,
        count: value,
      },
    });
  };

  const onRemove = () => {
    dispatch({
      type: "removeItem",
      payload: {
        id,
      },
    });
  };

  const onSetLiked = () => {
    setIsLike();
  };

  return (
    <>
      <div className={cartItem["cart-item"]}>
        <img className={cartItem["cart-item__img"]} alt={name} src={img} />
        <div className={cartItem["cart-item__content-block"]}>
          <div className={cartItem["cart-item__text-block"]}>
            <h4 className="card__title">
              {name}&nbsp;
              <Like isLike={isLike} />
            </h4>
            <span className="card__description">{description}</span>
            <p className={cartItem["cart-item__price"]}>
              <span>{price}</span>
              <span>&nbsp;</span>
              <span>{currency}.</span>
            </p>
            <div className={cartItem["cart-item__actions"]}>
              <button
                onClick={onSetLiked}
                className={cartItem["cart-item__action"]}
              >
                Избранные
              </button>
              <button
                className={cartItem["cart-item__action"]}
                onClick={onRemove}
              >
                Удалить
              </button>
            </div>
          </div>
          <div>
            <input
              className="input-number"
              onChange={onChangeCount}
              value={count || 0}
              type="number"
            />
          </div>
        </div>
      </div>
      {!isLast && <Divider />}
    </>
  );
});
