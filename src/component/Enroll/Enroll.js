import React from 'react';
import dataData from'../../courseData/dataData';
import mobileData from'../../courseData/mobileData';
import webData from'../../courseData/webData';
import { useState } from 'react';
import Web from '../WebData/web';
import Cart from '../Cart/Cart';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';




const Enroll = () => {
    
    const [cart,setCart] =useState([]);
    const [money,setMoney]=useState(0);
    
       const handlePrice= (taka) =>{ 
           const newMoney=(money+taka);
           const newCart=[...cart,taka];
           setCart(newCart);
           setMoney(newMoney);
       }
       const resetValue =()=>{
        setCart([]);
        setMoney(0);
        console.log("clicked");
       }
    return (
        <div>
            <Cart cart={cart.length} resetValue={resetValue} Money={money}></Cart>
           <div class="card-container container ">
           <h1>Our Web Development Course</h1>
            <div className="row d-flex justify-content-start">
                {
                webData.map(data => <Web data={data} taka={0}  handlePrice={handlePrice}> </Web>)
                }
                
            </div>
        </div>

        <div class="card-container container ">
           <h1>Our Android App Development Course</h1>
            <div className="row d-flex justify-content-start">
                {
                mobileData.map(data => <Web data={data} taka={0} handlePrice={handlePrice}> </Web>)
                }
                
            </div>
        </div>

        <div class="card-container container ">
           <h1>Our Data Science Course</h1>
            <div className="row d-flex justify-content-start">
                {
                dataData.map(data => <Web data={data} taka={0} handlePrice={handlePrice}> </Web>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default Enroll;