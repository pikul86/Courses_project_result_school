import React from "react";


const SearchStatus = ({length}) => {
    switch (true) {
        case length === 0:
        return (
            <h2>
                <span className="badge bg-danger">
                Никто с тобой не тусанет
                </span>
            </h2>
        );
        case length === 2 || length === 3 || length === 4:
        return (
            <h2>
                <span className="badge bg-primary">
                {length} человека тусанет с тобой сегодня
                </span>
            </h2>
        );
        default:
        return (
            <h2>
                <span className="badge bg-primary">
                {length} человек тусанет с тобой сегодня
                </span>
            </h2>
        );
    }

}

export default SearchStatus;