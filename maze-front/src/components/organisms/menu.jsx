import React from 'react';

import HeaderSettings from '../atoms/headerComponent';

import Generator from '../molecules/generator';
import Solver from '../molecules/solver';

import '../../App.css';

import PropTypes from 'prop-types';

export default function Menu({size, setSize, onSendRequest, onSolveRequest, setShowSteps}) {
    return (
        <div className='menu'>
            <HeaderSettings headerTitle={'Settings'} />
            <Generator size={size} setSize={setSize} setShowSteps={setShowSteps} onSendRequest={onSendRequest} />
            <Solver onSolveRequest={onSolveRequest} />
        </div>
    );
}

Menu.propTypes = {
    size: PropTypes.number.isRequired,
    setSize: PropTypes.func.isRequired,
    onSendRequest: PropTypes.func.isRequired,
    onSolveRequest: PropTypes.func.isRequired,
    setShowSteps: PropTypes.func.isRequired,
};
