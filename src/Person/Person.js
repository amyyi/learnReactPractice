import React from 'react';
import Radium from 'radium';

import './Person.css';
const style = {
    color: 'pink',
    ':hover': {
        color: 'grey'
    },
    '@media (max-width:450px)': {
        color: 'yellow'
    }
};
const person = (props) => {
    return (
        <div className="Person">
            <p style={style}>person</p>
            {props.name} person {props.age} {props.children}
            <input onChange={props.change}/>
        </div>
    );
}
export default Radium(person);
