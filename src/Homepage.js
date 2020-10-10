import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Homepage (){


    return (
        <div>
        <div className="header">
            <nav className = "nav-links">
                <Link to="/">Home</Link>
                <Link to= "/pizza">Menu</Link>
                <Link to="/pizza">Order</Link>
                <Link to="/">Deals</Link>
                <Link to="/">Careers</Link>
            </nav>
             </div>
        <div className="home-page">
         <img
            className="home-image"
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""/>
            <Link to="/pizza"><Button className="order-pizza"
        color= "danger" size= "large">
            Order Now!
          </Button></Link>
          </div>
          </div>
      );
    }
export default Homepage