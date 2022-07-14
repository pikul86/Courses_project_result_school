import React from "react";

const BookMark = ({status, ...rest}) => {
    return (
    <button className="btn" {...rest}>
        <i class={status? 'bi bi-person-check-fill' : 'bi bi-person'}></i>
    </button>)
}

export default BookMark;