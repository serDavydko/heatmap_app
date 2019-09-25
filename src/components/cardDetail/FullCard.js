import React from 'react';

const FullCard = (props) => {
console.log(props)
    return (
        <>
        {props.details.map(item => (
            <>
            <div>{item.created_at}</div>
            <div>{item.text}</div>
            </>
        ))}
        </>
    )
};

export default FullCard;