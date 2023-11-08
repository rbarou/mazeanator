import Row from '../molecules/row';
import PropTypes from 'prop-types';

const Grid = ({matrix, path}) => {

    return (
        <div className="grid">
            {matrix.map((row, i) => (
                <Row key={`row-${i}`} rowId={i} row={row} path={path}/>
            ))}
        </div>
    );
};

Grid.propTypes = {
    matrix: PropTypes.array.isRequired,
    path: PropTypes.array.isRequired
};

export default Grid;
