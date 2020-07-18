import React, { useState } from 'react';

function Form () {

    const [orderForm, setOrderForm] = useState({
    name:"",
    pizza_size:"",
    toppings:"",
    special_instructions:""
    });
    
    const placeOrder = event =>{
    event.preventDefault();
    console.log("order placed");
    };
    const makeOrder = event => {
    console.log("added Input", event.target.value);
    setOrderForm({ name: event.target.value});
    };
    
    
    return (
    <div className="placed-order">
    <form onSubmit={placeOrder}>
    
   <p> <label htmlFor="name">
    Name
    <input 
    type="text" 
    id="name" 
    name="name"
    onChange={ makeOrder }
    value={orderForm.name}
    />
    </label>
    </p>
    <p><label htmlFor="pizzaSize">
    Pizza Size
    <input 
    type="dropdown" id="pizzaSize"
    />
    </label>
    </p>
    <label htmlFor="toppings">
    
    </label>
      
      
    
    
     <p><label htmlFor="instructions">
         Special Instructions
        <textarea id="instructions"
         name="instructions" />
        
        </label> 
        </p>
    
    
    <button type="submit">Add to Order</button>
    </form>
    </div>
    );
    }
    
    export default Form;







