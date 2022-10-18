import React from 'react';

import '../styles/Counter.css';

const Counter = () => {
    return (
        <div className='container-counter'>
            <button className='btn-counter counter-remove'>-</button>
            <input className='input-counter' type="text" name="countProduct" id="countProduct" placeholder='0 pz'/>
            <button className='btn-counter counter-add'>+</button>
        </div>
    );
}

export default Counter;