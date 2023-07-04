import { Link } from "react-router-dom";
import { CartList } from "../../components/CartList/CartList";
import { Form, FormOutput } from "../../components/Form/Form";
import cart from "./cart.module.scss";
import { useDispatch, useCartState } from "../../store/clices/Cart";

const formFields = [
  { placeholder: "Имя Фамилия", key: "name", type: "text" },
  { placeholder: "Номер телефона", key: "phone", type: "phone" },
  { placeholder: "Адрес доставки", key: "address", type: "address" },
];

export function Cart() {
  const state = useCartState();
  const summary = Object.values(state).reduce(
    (acc, { count, price }) => acc + price * count,
    0
  );
  const onSubmit = (fields: FormOutput) => {
    alert(
      JSON.stringify({
        userData: fields,
        order: state,
      })
    );
  };
  return (
    <div>
      <div className={cart["cart-box"]}>
        <CartList />
       <div className={cart["cart-box__form"]}>
       <div className={cart["cart-box__actions-form"]}>
          <CartActions />
        </div>
       <Form
          title="Оформление заказа"
          buttonText="Оформить заказ"
          onSubmit={onSubmit}
          fields={formFields}
        >
          <h4 className={cart["cart-box__summary"]}>
            <span>Итого:&nbsp;</span>
            <span>{summary.toLocaleString("ru")}</span>
            <span>руб.</span>
          </h4>
        </Form>
       </div>
      </div>
       <div className={cart["cart-box__actions"]}>
        <CartActions />
      </div> 
    </div>
  );
}

function CartActions() {
  const dispatch = useDispatch();
  const onClearCard = () => {
    dispatch({
      type: "clearCart",
    });
  };
  return (
    <>
      <button onClick={onClearCard}>Очистить корзину</button>
      <Link
        className={`button black-button ${cart["cart-box__actions_continue"]}`}
        to="/"
      >
        Продолжить покупки
      </Link>
    </>
  );
}
