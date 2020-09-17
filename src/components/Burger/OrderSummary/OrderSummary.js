import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <button>Cancel</button>
      <button>Continue</button>
    </Auxiliary>
  );
};

export default orderSummary;
