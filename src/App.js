import React, { useState } from "react";
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Form from './Form';


const App = () => {

  const [orderForms, setOrderForms] = useState([
   { id: 1,
     name:"name",
    pizza_size:"XLarge",
    toppings:"Ham",
    special_instructions:"none"
    }
  ]);

  const placeNewOrder = orderForm => {
    const newOrder= {
      id: Date.now(),
      name: orderForm.name,
     pizza_size: orderForm.pizza_size,
     toppings: orderForm.toppings,
     special_instructions: orderForm.special_instructions
    };
    setOrderForms([...orderForms, newOrder]);
  };
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Form placeNewOrder= {placeNewOrder}/>
    </>
  );
};
export default App;
