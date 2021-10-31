import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  useEffect(() => {
    fetch(`http://localhost:4000/orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>You have placed: {orders.length} Orders</h1>
      {orders.map((order) => (
        <li key={order._id}>
          {order.name} : {order.email}
        </li>
      ))}
    </div>
  );
};

export default Orders;
