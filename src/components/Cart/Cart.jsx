import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
let total =0;
let shippingCharge =0;
for(let i of props.cart){
    total += i.price;
    shippingCharge += i.shipping;
}

let tax = total*7/100;

    return (
      <div className="Cart">
        <h4>Order Summary</h4>
        <p>Selected Items: {props.cart.length}</p>
        <p>Total Price : ${total}</p>
        <p>Total Shipping Charge : ${shippingCharge}</p>
        <p>Tax : {tax.toFixed(2)}</p>
        <h4>Grand Total : {total+tax+shippingCharge}</h4>
      </div>
    );
};

export default Cart;