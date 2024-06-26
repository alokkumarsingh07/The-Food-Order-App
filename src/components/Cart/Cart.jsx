import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>
          {item.name}
          <li>
            {" "}
            {item.price} {`x${item.amount}`}
          </li>
        </li>
      ))}
      <hr></hr>
      {[{ id: "c2", name: "Schnitzel", amount: 1, price: 16.99 }].map(
        (item) => (
          <li>
            {item.name}
            <li>
              {" "}
              {item.price} {`x${item.amount}`}
            </li>
          </li>
        )
      )}
    </ul>
  );

  return (
    <>
      <Modal onClickBackdrop={props.onCloseCart}>
        {cartItems}
        <div className={styles["total"]}>
          <span>Total Amount</span>
          <span>35.62</span>
        </div>
        <div className={styles["actions"]}>
          <button className={styles["button--alt"]} onClick={props.onCloseCart}>
            Close
          </button>
          <button className={styles["button"]}>Order</button>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
