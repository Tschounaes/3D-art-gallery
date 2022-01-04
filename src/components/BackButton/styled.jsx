import styled from "styled-components";

export const BackButtonWrapper = styled.button`
    position: absolute;
    top: 3vh;
    left: 3vw;
    height: 50px;
    width: 100px;
    color: ${(props) => props.theme.docBlack};
    font-size: 22px;
    font-weight: bold;
    background-color: ${(props) => props.theme.docBlackTransparent};
    box-shadow: ${(props) => props.theme.guiShadow};
    border: none;
    cursor: pointer;

    :hover {
        background-color: ${(props) => props.theme.docWhite};
        box-shadow: ${(props) => props.theme.guiShadowActive};

    }
`