import React from 'react';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';
import './Physicists.css';
import { useEffect, useState} from 'react';

const Physicists = () => {

    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./physicist.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, []);

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div className="container">
          <div className="person-container">
              {
                    persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleAddToCart={handleAddToCart}>
                    </Person>)
                }
         </div>
         <div className="cart-container">
         <Cart cart={cart}></Cart>
         </div>
        </div>
    );
};

export default Physicists;