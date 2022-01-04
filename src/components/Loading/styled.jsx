import styled from "styled-components";

export const LoadingWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    text-shadow: ${(props) => props.theme.textShadowActive};
    background-color: ${(props) => props.theme.docBlack};
`

