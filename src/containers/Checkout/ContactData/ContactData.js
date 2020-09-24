import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import axios from "../../../axios-orders";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Bob Bee",
        address: {
          street: "Fake Street",
          zipCode: "123432",
          country: "United States",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((respone) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        ></Input>
        <Input
          inputtype="input"
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your Email"
        ></Input>
        <Input
          inputtype="input"
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        ></Input>
        <Input
          inputtype="input"
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        ></Input>
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
