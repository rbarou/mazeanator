import React, { useEffect, useState } from 'react';
import Row from '../molecules/row';

const Grid = ({matrix}) => {

    return (
        <div className="grid">
            {matrix.map((row, i) => (
                <Row key={`row-${i}`} rowId={i} row={row}/>
            ))}
        </div>
    );
};

export default Grid;
