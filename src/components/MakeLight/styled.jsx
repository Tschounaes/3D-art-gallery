import styled  from 'styled-components';

export const LightScreenWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
        text-align: center;
        line-height: 2fr;
        margin: 180px;
        transform: ${(props) => !props.light ?  `scale(1)`: `scale(1.2)`};
        
        transition: transform 3s;

        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    .darkness {
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        opacity: ${(props) => !props.light ? (1 - props.energy) : 0};
        background-color: ${(props) => props.theme.docBlack}
    }
    .energy {
        position: absolute;
        bottom: 0px;
        width: ${ (props) => !props.light ? `${Math.round(props.energy*100)}vw` : `100vw` };
        height: 5px;
        background-color: ${(props) => props.theme.docWhite};
        box-shadow: ${(props) => !props.light ?  `0px 0px 0px #ffffffff` : props.theme.guiShadowActive};
        transition: box-shadow 0.4s;
        z-index: 3;
        
    }
`

