import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const nrOfCartItems = cartCtx.items.reduce((cur, item) => {
        return cur + item.amount
    }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nrOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
