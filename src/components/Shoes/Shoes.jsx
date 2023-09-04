import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {

    const first = 10;
    const second = 20;
    const result = multiply(first, second);
    const sum = add(first, second);

    return (
        <div>
            <h4>{result}</h4>
            <h4>{sum}</h4>
        </div>
    );
};

export default Shoes;

    const first = 10;
    const second = 20;
