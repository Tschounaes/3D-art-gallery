import React from 'react';
import styled from 'styled-components';
import MakeLight from  '../../components/MakeLight';
import Tschounaes from '../../components/TschounaesLogo';
import { BackButtonWrapper } from '../../components/BackButton/styled';

const VisitGalleryButtonWrapper = styled(BackButtonWrapper)`
    z-index: 5;
    background-color: ${(props) => props.theme.docWhite};
    font-size: 16px;
    right: 3vw;
    left: auto;

`



const Home = () => {
    return (
        <>
        <Tschounaes />
        <a href='/three-de-scene'>
        <VisitGalleryButtonWrapper >
            Visit Gallery
        </VisitGalleryButtonWrapper>
        </a>

        <MakeLight />
        </>
    )
}

export default Home;
