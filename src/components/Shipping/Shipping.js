import React from "react";
import "./Shipping.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;

    fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Processed Successfully");
          clearTheCart();
          reset();
        }
      });
  };
  return (
    <div className="shipping-container">
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          placeholder="Enter your name"
          {...register("name")}
        />

        <input
          defaultValue={user.email}
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />

        <input placeholder="Enter your address" {...register("address")} />

        <input placeholder="Enter your phone" {...register("phone")} />

        <input placeholder="Enter your city" {...register("city")} />

        {errors.email && <span className="error">This field is required</span>}

        <input className="regular-btn" type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
