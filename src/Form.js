import React, { useState, useEffect } from 'react';
import * as yup from "yup";


const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required"),                              
    toppings: yup.boolean().oneOf([true], "please choose a topping"),
    special_instructions: yup.string().required("enter none if no special instructions")
})


function Form (props) {

    const [orderForm, setOrderForm] = useState({
    name:"",
    pizza_size:"",
    toppings:"",
    special_instructions:""
    });

    const[errrors, setErrrors] = useState({
    name:"",
    toppings:"",
    special_instructions:""
    })

    const [buttonDisabled, setButtonDisabled]= useState(true);

    useEffect(() => {
        formSchema.isValid(orderForm).then(valid => {
            setButtonDisabled(!valid)
        })

    },[orderForm])




    const handlechanges = event =>{
    setOrderForm({...orderForm, [event.target.name]: event.target.value});
    console.log(orderForm);
    };
    const submitOrder = event => {
        event.preventDefault();
        props.placeNewOrder(orderForm)
        setOrderForm({name:"", pizza_size:"", toppings:"", special_instructions:""})
        
    
    };
    
    
    return (
    <div className="placed-order">
    <form onSubmit={submitOrder}>
    
    <label htmlFor="name">
    Name
    <input 
    type="text" 
    id="name" 
    name="name"
    onChange={ handlechanges }
    value={orderForm.name}
    />
    </label>

    
    
   
    <label htmlFor="pizza_size">
        Choose your pizza size
    <select id="pizza_size" name="pizza_size"
    onChange={ handlechanges }>
    <option value="small">Small</option>   
    <option value="medium">Medium</option>
    <option value="large">Large</option>
    <option value="xlarge">XLarge</option>
    </select>
    </label>

    
    Choose you toppings
    <label htmlFor="ham">
        Ham
        <input type= "checkbox" 
        name="ham" checked={orderForm.ham}
        onChange={ handlechanges }/>
    </label>
    <label htmlFor="pineapple">
        Pineapple
        <input type= "checkbox" 
        name="pineapple" checked={orderForm.pineapple}  
        onChange={ handlechanges }/>
    </label>
    <label htmlFor="sausage">
        Sausage
        <input type= "checkbox" 
        name="sausage" checked={orderForm.pineapple}
        onChange={ handlechanges }/>
    </label>
    <label htmlFor="pepperoni">
        Pepperoni
        <input type= "checkbox" 
        name="pepperoni" checked={orderForm.pepperoni}
        onChange={ handlechanges }/>
    </label>
    
     <label htmlFor="special_instructions">
         Special Instructions
        <textarea id="special_instructions"
         name="special_instructions" 
          onChange={ handlechanges }
          value= {orderForm.special_instructions}  />
        </label> 
        
    
    
    <button disabled={buttonDisabled}>Add to Order</button>
    </form>
    </div>
    );
    }
    
    export default Form;







