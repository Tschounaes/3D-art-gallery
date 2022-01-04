import styled from 'styled-components';

const setBackground = (props, name) => {
    if (props.currKey === name) {
        return props.theme.docWhite;
    } else {
        return props.theme.docBlackTransparent;
    }
}

const setShadow = (props, name) => {
    if (props.currKey === name) {
        return props.theme.guiShadowActive;
    } else {
        return props.theme.guiShadow;
    }
}

export const NavInfoWrapper = styled.div`
    position: absolute;
    width: 150px;
    z-index: 2;
    bottom: 2vh;
    left: 2vw;
    //opacity: 0%;
    animation-name: fade-in;
    animation-duration: 4s;
    //animation-delay: 1.5s;
    animation-direction: forwards;

    display: grid;
    grid-template-columns: repeat(3, 1fr) 0fr;
    grid-template-rows: repeat(3, 1fr) 0fr;

    div {
        margin: 2px;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 40px;
           
        }
        p {
           color: ${(props) => props.theme.docBlack};
           font-weight: bold;
           font-size: 22px;
        }
    }
    .up {
        visibility: ${(props) => !props.pointerLock ? 'hidden' : 'visible'};
        background-color: ${(props) => setBackground(props, 'ArrowUp')};
        box-shadow: ${(props) => setShadow(props, 'ArrowUp')};
        grid-column-start: 2;
        grid-column-end: 3;
    }
    .down {
        visibility: ${(props) => !props.pointerLock ? 'hidden' : 'visible'};
        background-color: ${(props) => setBackground(props, 'ArrowDown')};
        box-shadow: ${(props) => setShadow(props, 'ArrowDown')};
        transform: rotate(180deg);
    }
    .left {
        visibility: ${(props) => !props.pointerLock ? 'hidden' : 'visible'};
        background-color: ${(props) => setBackground(props, 'ArrowLeft')};
        box-shadow: ${(props) => setShadow(props, 'ArrowLeft')};
        transform: rotate(-90deg);
        grid-column-start: 1;
        
    }
    .right {
        visibility: ${(props) => !props.pointerLock ? 'hidden' : 'visible'};
        background-color: ${(props) => setBackground(props, 'ArrowRight')};
        box-shadow: ${(props) => setShadow(props, 'ArrowRight')};
        transform: rotate(90deg);
    }
    .space {
        background-color: ${(props) => setBackground(props, 'Space')};
        box-shadow: ${(props) => setShadow(props, 'Space')};
        grid-column-start: 1;
        grid-column-end: 4;
        width: auto;
    }

    .mode {
        position: relative;
        line-height: 22px;
        padding-left: 20px;
        font-weight: bold;
        font-size: 22px;
        text-shadow: ${(props) => props.theme.textShadowActive};
        animation: ${(props) => !props.pointerLock ? 'emph 0.5s' : 'emph 0.5s'};
    }

    @keyframes fade-in {
        from {
            opacity: 0%;
        }

        66% {
            opacity: 0%;
        }

        to {
            opacity: 100%
        }
    }
    
`