import React from "react";
import { Route } from 'react-router-dom';
import PizzaForm from './PizzaForm';
import Homepage from './Homepage';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path="/">
        <Homepage />
        </Route>
       <Route path= "/pizza">
         <PizzaForm />
       </Route>
    </>
  );
};
export default App;
