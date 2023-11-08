import React from 'react';

import Cell from '../atoms/cell';

const Row = ({rowId,row, cellSize, path}) => {

    return (
        <div className='row-container'>
            {row.map((col, j) => (
                <Cell key={`cell-${j}`} rowId={rowId} columnId={j} value={col} path={path}/>
            ))}
        </div>
    );
};

export default Row;