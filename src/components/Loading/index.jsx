import React, { useState, useEffect } from 'react';
import { LoadingWrapper } from './styled';

const Loading = (props) => {
    const [counter, setCounter] = useState(0)

    useEffect(()=> {
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 500)
        return () => clearInterval(interval);
    }, [counter])

    return (
        <LoadingWrapper>
            <h1>{props.text}{counter % 3 === 0 ? "..." : counter % 3 === 1 ? "." : ".."}</h1>
        </LoadingWrapper>
    )
}

export default Loading;
