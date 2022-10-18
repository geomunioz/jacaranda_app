import React from 'react';
import notFoundIcon from '../assets/icons/notfound.png';
import '../styles/NotFound.css';

const NotFound = () =>{
    return(
        <section className='container-notFound'>
            <div>
                <img src={notFoundIcon} alt="Not Found" />
                <h1>Ooh no!</h1>
                <p>No encontramos lo que buscas</p>
            </div>
        </section>
    );
}

export default NotFound;