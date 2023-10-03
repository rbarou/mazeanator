import React from 'react';

const Cell = ({value}) => {

    const backgroundColor = (value === -1) ? 'black' : 'white';

    return(
        <div className='cell' style={{backgroundColor: backgroundColor}}></div>
    )
}

export default Cell;