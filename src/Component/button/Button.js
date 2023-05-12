import React from 'react';

const Button = ({navigation,title}) => {
    return (
        <button className={'btn btn-back'} onClick={() => navigation(-1)}>{title}</button>
    );
};

export default Button;