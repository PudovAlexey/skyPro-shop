import { Link } from "react-router-dom";
import "../styles/app.scss";

export function Header() {
  return (
    <div className="header">
      <h2 className="header__title">Интерьер.</h2>
      <div className="link-wrapper">
        <Link className="link link__catalogue" to={"/"}>
        </Link>
        <Link className="link link__cart" to={"/cart"}>
        </Link>
      </div>
    </div>
  );
}
