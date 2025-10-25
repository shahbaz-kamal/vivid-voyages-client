import { Link } from 'react-router';
import React from 'react';

const Unauthorized = () => {
    return (
        <div>
            I am unauthorized
            <Link to="/home">Home</Link>
        </div>
    );
};

export default Unauthorized;