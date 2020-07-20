import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Form from './Form';
import Homepage from './Homepage';


const App = () => {

  
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path="/">
        <Homepage />
        </Route>
       <Route path= "/pizza">
         <Form />
       </Route>
    
    </>
  );
};
export default App;
