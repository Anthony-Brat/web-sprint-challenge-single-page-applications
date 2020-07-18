import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Form from './Form';


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Form/>
    </>
  );
};
export default App;
