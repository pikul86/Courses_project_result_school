import React from 'react';

const BookMark = ({status, toggleBook, id}) => {
    return <button className='btn btn-light' onClick={() => toggleBook(id)}>
        <i className={status? 'bi bi-person-check-fill' : 'bi bi-person'}></i>
    </button>
};

export default BookMark;