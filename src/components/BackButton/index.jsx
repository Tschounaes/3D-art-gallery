import React from 'react';
import { useHistory } from 'react-router-dom';
import { BackButtonWrapper } from './styled';

const BackButton = (props) => {
    const history = useHistory();
    return (
        <BackButtonWrapper onClick={() => history.push('/')}>
            Back
        </BackButtonWrapper>
    )
}

export default BackButton;
