import React from 'react';

const Cell = ({rowId, columnId, value, path}) => {

    const emptyCellColor = (rowId, columnId) => (rowId + columnId) % 2 === 0 ? 'white' : '#E6E6E9';
    const isPartOfPath = (path,rowId,columnId) => {
        const targetArray = [rowId,columnId];
        let res = path.some((array) => JSON.stringify(array) === JSON.stringify(targetArray));
        return res;
    };

    let backgroundColor;
    if (value === -1) {
        backgroundColor = 'black';
    } else {
        backgroundColor = isPartOfPath(path, rowId, columnId) ? 'red' : emptyCellColor(rowId, columnId);
    }

    return(
        <div className='cell' style={{backgroundColor: backgroundColor,}}></div>
    )
}

export default Cell;