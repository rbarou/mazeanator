import React from 'react';

const Cell = ({rowId, columnId, value, cellSize}) => {

    const emptyCellColor = (rowId, columnId) => (rowId + columnId) % 2 === 0 ? 'white' : '#E6E6E9';
    const backgroundColor = (value === -1) ? 'black' : emptyCellColor(rowId,columnId);

    return(
        <div className='cell' style={
            {
                backgroundColor: backgroundColor,
                height: cellSize,
                width: cellSize
            }}>

        </div>
    )
}

export default Cell;