import React from 'react';
import './Cart.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Cart = (props) => {
    console.log("cart value",props);
    const vat=((props.Money)/100)*1;
    const cashBack=((props.Money)/100)*2;
    console.log("ki jalaton re vai",typeof(cashBack),cashBack,vat);
    let total =(props.Money)-(cashBack+vat);
    console.log("ki jalaton re vai",typeof(cashBack),cashBack,vat,total);
   
    return (
        <div>
            
            <div class="products">
      
      
                <div class="buy">
                    <div class="total-price">
                        <h4>Order Summary <br></br> Totall Order : {props.cart}</h4>
                        
                        <ul>
                            <li><span>Course-price</span><span>{props.Money}</span></li>
                            <li><span>Vat(1%)</span><span>{vat}</span></li>
                            <li><span>Cash-back(2%)</span><span>{cashBack}</span></li>
                            {/* <li><span>Order 4</span><span>12</span></li>
                            <li><span>Order 5</span><span>12234</span></li> */}
                            <li><span><b>Total Price</b></span><span><b>{total}</b></span></li>
                        </ul>
                        <button class="delete" >Delete</button>
                        <button class="btn btn-primary " onClick={props.resetValue}> Buy</button>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Cart;