import { Good } from "../../types/types";
import "../../styles/main.scss";
import { Like } from "../Like";
import { Bag } from "../Bag";
import { useDispatch, useCartState } from "../../store/clices/Cart";
import good from "./good.module.scss";
import { useLikes } from "../../hooks/useLIkes";

export function GoodItem(item: Good) {
  const { name, description, img, price, currency, id } = item;
  const { isLike, setIsLike } = useLikes(id);

  const dispatch = useDispatch();
  const state = useCartState();
  const storeState = state[id];

  const onAddCartItem = () => {
    dispatch({
      type: "addItem",
      payload: {
        id,
        item: {
          ...item,
        },
      },
    });
  };

  const onSetLikeCartItem = () => {
    setIsLike();
  };

  return (
    <div className={good["good"]}>
      <div className={good["good__actions"]}>
        <div className={good["good__actions-wrapper"]}>
          <button
            data-count={storeState?.count || 0}
            className={`${good["good__action"]} ${
              storeState?.count > 0 ? good["good__bag"] : ""
            }`}
            onClick={onAddCartItem}
          >
            <Bag />
          </button>
          <button
            className={good["good__action"]}
            onClick={onSetLikeCartItem}
          >
            <Like isLike={isLike} />
          </button>
        </div>
      </div>
      <img alt={name} src={img} />
      <div className={good["good__text-box"]}>
        <h4 className="card__title">{name}</h4>
        <span className="card__description">{description}</span>
        <p className="card__price">
          <span>{price.toLocaleString("ru")}</span>
          <span>&nbsp;</span>
          <span>{currency}.</span>
        </p>
      </div>
    </div>
  );
}
