import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button className="btn" {...rest}>
            <i
                className={status ? "bi bi-person-check-fill" : "bi bi-person"}
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default BookMark;
