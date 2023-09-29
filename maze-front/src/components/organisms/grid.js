import React, {useState} from 'react';
import Row from '../molecules/row';

const Grid = ({ rows, cols }) => {

    const [matrix, setMatrix] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));

    const toggleCell = (row, col) => {
        const newMatrix = [...matrix];
        newMatrix[row][col] = !newMatrix[row][col];
        setMatrix(newMatrix);
    };

    return (
        <div className="grid">
            {matrix.map((row, rowIndex) => (
                <Row key={`row-${rowIndex}`} columns={matrix[0].length} />
            ))}
        </div>
    );
};

export default Grid;
