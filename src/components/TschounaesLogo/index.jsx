import React, { useRef, useEffect, useState }from 'react';
import { LogoWrapper } from './styled';
//import TschounaesLogo from '../../assets/charcter_jonas_bienz.svg';
import {ReactComponent as TschounaesLogo} from '../../assets/charcter_jonas_bienz.svg';


const Tschounaes = () => {
    const [hover, setHover] = useState(false)
    const svg = useRef();

    const handleHover = (e) => {
        switch(e.type) {
            case 'mouseenter':
                setHover(true)
                break;
            case 'mouseleave':
                setHover(false)
                break;
        } 
    }

    useEffect(() => {
        
    },[])
    
    return (
        <LogoWrapper onMouseEnter={handleHover} onMouseLeave={handleHover} hovered={hover}>
            <TschounaesLogo ref={svg}/>
        </LogoWrapper>
    )
}

export default Tschounaes;
