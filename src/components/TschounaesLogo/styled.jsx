import styled from "styled-components";

export const LogoWrapper = styled.div`
    z-index: 5;
    position: absolute;
    left: 3vw;
    top: 3vh;
    
    height: 150px;
    width: 150px;
    .stroked {
        stroke: ${(props) => props.hovered ? props.theme.docWhite : props.theme.docWhiteTransparent}; 
    }

    .filled {
        fill: ${(props) => props.hovered ? props.theme.docWhite : props.theme.docWhiteTransparent};
    }
`