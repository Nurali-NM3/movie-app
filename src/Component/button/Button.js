import React from 'react';

const Button = ({navigation,title}) => {
    return (
        <button className={'btn'} onClick={() => navigation(-1)}>{title}</button>
    );
};

export default Button;