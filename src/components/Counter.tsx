import React, { useState } from 'react';

import '../styles/Counter.css';

const Counter = (props:any) => {
    const [contador,setContador] = useState(0);
    const handleRemove = ()=>{
        let cont = contador-1;
        if(contador>0){
            props.actualizaCount(cont);
            setContador(cont);
        }
    }

    const handleAdd = ()=>{
        let cont = contador +1;
        if(contador<props.stock){
            props.actualizaCount(cont);
            setContador(cont);
        }
    }
    return (
        <div className='container-counter'>
            <button className='btn-counter counter-remove' onClick={handleRemove}>-</button>
            <input className='input-counter' type="text" name="countProduct" id="countProduct" placeholder='0 pz' value={contador} readOnly/>
            <button className='btn-counter counter-add' onClick={handleAdd}>+</button>
        </div>
    );
}

export default Counter;