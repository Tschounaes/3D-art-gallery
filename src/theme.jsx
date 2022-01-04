import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
    //COLORS
    docWhite: '#c5bdb1',
    docWhiteTransparent: '#68635c',
    docBlack: '#1a1918',
    docBlackTransparent: '#1a19186a',

    //SHADOWS
    guiShadow: '0px 0px 9px 1px #1a1918',
    guiShadowActive: '0px 0px 9px 1px #c5bdb1',
    textShadowActive: '0px 0px 10px #c5bdb1'
};

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        background-color: ${props => props.theme.docBlack};
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
        color: ${props => props.theme.docWhite};
        * {
            border-radius: 3px;
        }
        button:active {
            transform: scale(0.95)
        }
    }

    #root {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    
`;
