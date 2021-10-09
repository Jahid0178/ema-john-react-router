import React from "react";
import "./Shipping.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
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
          {...register("Email", { required: true })}
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
