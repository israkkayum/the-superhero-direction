import React from 'react';
import './Selected.css';

const Selected = (props) => {
    const {name} = props;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Selected;