import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmo = () => {

    const cosmetics = [
        {id: 1, name: "alta", price: 100},
        {id: 2, name: "plta", price: 200},
        {id: 3, name: "clta", price: 300},
        {id: 4, name: "dlta", price: 400},
        {id: 5, name: "mlta", price: 500}
    ]

    return (
        <div>
            <h2>Cosmo</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key = {cosmetics.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmo;