import React from 'react';
import Selected from '../Selected/Selected';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const person of cart) {
        total = total + person.price;
        totalQuantity = totalQuantity + 1;
    }

    return (
        <div>
            <h3>Physicists Added : {totalQuantity}</h3>
            <h3>Total Cost : ${total.toFixed(2)}</h3>
            <h3>List : </h3>
            <ul>
            {
                    cart.map(person => <Selected
                        key = {person.id}
                        name = {person.name}>
                        </Selected>
                    )
                }
            </ul>
        </div>
    );
};

export default Cart;