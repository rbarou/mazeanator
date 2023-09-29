import React, {useState} from 'react';

const Row = ({columns}) => {

    const [cols, setCols] = useState(Array(columns).fill(false));

    return(
        <h1> Hello i'm a row component !!! and I have {columns} columns to display!</h1>
    )
}

export default Row;