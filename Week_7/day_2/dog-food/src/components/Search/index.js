import React from 'react';

export const Search = ({ handleChange }) => {
    return (
        <div>
            <input onChange={handleChange} />
        </div>
    );
};
