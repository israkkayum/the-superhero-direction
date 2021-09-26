import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Person.css';

const Person = (props) => {

    const {name, age, education, img, known, nationality, price} = props.person;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="card">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>Name : {name}</h4>
                <p>Age : {age}</p>
                <p>Nationality : {nationality}</p>
                <p>Alma mater : {education}</p>
                <p>Known for : {known}</p>
                <p>Price : ${price}</p>
            </div>
            <div className="card-footer">
                <button className="card-button" onClick={() => props.handleAddToCart(props.person)}>{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Person;