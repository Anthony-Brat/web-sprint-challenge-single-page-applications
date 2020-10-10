import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2,"name must be at least 2 characters long")
    .required("Name is a required"),
    pizza_size: yup
    .string(),                              
    ham: yup
    .boolean()
    .oneOf([true], "please choose a topping"),
    pineapple: yup
    .boolean()
    .oneOf([true], "please choose a topping"),
    sausage: yup
    .boolean()
    .oneOf([true], "please choose a topping"),
    pepperoni: yup
    .boolean()
    .oneOf([true], "please choose a topping"),
    special_instructions: yup
    .string()
    .required("enter none if no special instructions")
    })
    

function PizzaForm (props) {

    const [orderForm, setOrderForm] = useState({
    name:"",
    pizza_size:"",
    special_instructions:""
    });
    
    const[errors, setErrors] = useState({
    name:"",
    special_instructions:""
    })
    
    const [buttonDisabled, setButtonDisabled]= useState(true);
    
    
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        formSchema.isValid(orderForm).then(valid => {
            setButtonDisabled(!valid)
        })
    
    },[orderForm])
    
    const validateChange = event =>{
        yup.reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid =>{
            setErrors({
                ...errors, [event.target.name] : ""
            });
        })
        .catch(error =>{
            setErrors({
                ...errors, [event.target.name] : error.errors[0]
            })
        })
    }
    
    
    const handleChanges = event =>{
    //     console.log(orderForm);
    // setOrderForm({...orderForm, [event.target.name]: event.target.value});
    event.persist();
    const newOrderForm = {
        ...orderForm, [event.target.name] : event.target.type ===
        "checkbox" ? event.target.checked : event.target.value
    }
    validateChange(event);
    setOrderForm(newOrderForm);
    };
    const submitOrder = event => {
        event.preventDefault();
        // console.log("order placed")
        axios.post("https://reqres.in/api/users", orderForm)
        .then(response => {
                setPost(response.data)
                console.log("success", post);
    
                setOrderForm({
                    name:"",
                    // ham:"",
                    // pineapple:"",
                    // sausage: "",
                    // pepperoni: "",
                    special_instructions:""
                })
        })
                .catch(error =>{
                    console.log(error.response)
                })
        
    
    };
    
    
    return (
        <div>
        <div className="header">
                <nav className = "nav-links">
                    <Link to="/">Home</Link>
                    <Link to= "/">Menu</Link>
                    <Link to="/pizza">Order</Link>
                    <Link to="/">Deals</Link>
                    <Link to="/">Careers</Link>
                </nav>
                 </div>
    <div className="placed-order">
    <form onSubmit={submitOrder}>
    
    <label htmlFor="name">
    Name
    <input 
    type="text" 
    id="name" 
    name="name"
    onChange={ handleChanges }
    value={orderForm.name}
    />
    {errors.name.length > 2 ? <p className="error">
    {errors.name}</p> : null}
    </label>
    
    <label htmlFor="pizza_size">
    Choose your pizza size
    <select 
    id="pizza_size" 
    name="pizza_size"
    onChange={ handleChanges }>
    <option value="Small">Small</option>   
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
    <option value="Xlarge">XLarge</option>
    </select>
    </label>
    
    
    Choose you toppings
    <label htmlFor="ham" className= "ham">
    Ham
    <input 
    type= "checkbox" 
    name="ham" 
    checked={orderForm.ham}
    onChange={ handleChanges }/>
    </label>
    
    <label htmlFor="pineapple"className= "pineapple">
    Pineapple
    <input 
    type= "checkbox" 
    name="pineapple" 
    checked={orderForm.pineapple}  
    onChange={ handleChanges }/>
    </label>
    
    <label htmlFor="sausage" className= "sausage">
    Sausage
    <input 
    type= "checkbox" 
    name="sausage" 
    checked={orderForm.sausage}
    onChange={ handleChanges }/>
    </label>
    
    <label htmlFor="pepperoni" className= "pepperoni">
    Pepperoni
    <input type= "checkbox" 
    name="pepperoni" 
    checked={orderForm.pepperoni}
    onChange={ handleChanges }/>
    </label>
    
    <label htmlFor="special_instructions">
    Special Instructions
    <textarea 
    id="special_instructions"
    name="special_instructions" 
    onChange={ handleChanges }
    value= {orderForm.special_instructions}/>
    {errors.special_instructions.length > 4 ? (<p className="error">
    {errors.special_instructions}</p>) :null}
    </label> 
    
    <pre>{JSON.stringify(post, null, 2)}</pre>  
    
    
    <Button disabled={buttonDisabled} color="success">Add to Order</Button>
    </form>
    </div>
    </div>
    );
    }
    
    export default PizzaForm;