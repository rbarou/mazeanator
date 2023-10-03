import React from 'react';

import Cell from '../atoms/cell';

const Row = ({ row }) => {

    return (
        <div className='row-container'>
            {row.map((col, j) => (
                <Cell key={`cell-${j}`} value={col}/>
            ))}
        </div>
    );
};

export default Row;