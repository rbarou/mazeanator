import React from 'react';

import Cell from '../atoms/cell';

const Row = ({rowId,row, cellSize}) => {

    return (
        <div className='row-container'>
            {row.map((col, j) => (
                <Cell key={`cell-${j}`} rowId={rowId} columnId={j} value={col} cellSize={cellSize}/>
            ))}
        </div>
    );
};

export default Row;