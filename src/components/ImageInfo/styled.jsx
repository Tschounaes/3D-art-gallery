import styled from 'styled-components';

export const InfoWrapper = styled.div`
    visibility: ${(props) => props.vis ? 'visible' : 'hidden'};
    position: absolute;
    width: 220px;
    top: 2vh;
    right: 2vw;
    z-index: 2;
    padding: 15px 30px;
    background-color: ${(props) => props.theme.docBlackTransparent};
    background-blend-mode: darken;
    box-shadow: ${(props) => props.theme.guiShadow};;
    

    .info {
        display: flex;
        flex-direction: column; 
    }

    h1 {
        font-size: 16px;
    }
    .specs {
        padding-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            text-align: right;
            font-size: 10px;
            padding: 0px 20px;
        }
    }
    p {
        text-align: center;
        font-size: 14px;

    }
`