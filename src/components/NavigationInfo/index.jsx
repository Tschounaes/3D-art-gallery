import React from 'react';
import { NavInfoWrapper } from './styled';
import useKeyDown from '../../hooks/useKeyDown';
import arrow from '../../assets/arrow.svg';


const NavigationInfo = (props) => {
    const key = useKeyDown();
    
    return (  
        <> 
        <NavInfoWrapper currKey={key} pointerLock={props.pointerLock}>
            <div className='up'> <img src={arrow} alt='' /> </div>
            <div className='left'> <img src={arrow} alt='' /> </div>
            <div className='down'> <img src={arrow} alt='' /> </div>
            <div className='right'> <img src={arrow} alt='' /> </div>
            <div className='space'> <p>Space</p> </div> 
            <p className='mode'>{props.pointerLock ? 'WALK' : 'INSPECT'}</p>
        </NavInfoWrapper>
        </>
    )
}

export default NavigationInfo;
