import React from 'react';

import HeaderSettings from '../atoms/headerComponent';

import Generator from '../molecules/generator';
import Solver from '../molecules/solver';

import '../../App.css';

import PropTypes from 'prop-types';

export default function Menu({size, setRequestArguments, onSendRequest, onSolveRequest,}) {
    return (
        <div className='menu'>
            <HeaderSettings headerTitle={'Settings'} />
            <Generator size={size} setRequestArguments={setRequestArguments} onSendRequest={onSendRequest}/>
            <Solver onSolveRequest={onSolveRequest} />
        </div>
    );
}

Menu.propTypes = {
    size: PropTypes.number.isRequired,
    setRequestArguments: PropTypes.func.isRequired,
    onSendRequest: PropTypes.func.isRequired,
    onSolveRequest: PropTypes.func.isRequired,
};