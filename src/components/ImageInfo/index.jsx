import React, { useEffect, useState } from 'react';
import use3dStore from '../../store3D';
import { InfoWrapper } from './styled';


const Info = (props) =>{
    const { selectImage, setSelectImage, imageSpreadsheet } = use3dStore();
    const [info, setInfo] = useState();
    const [url, setUrl] = useState('');
    //const [visible, setVisible] = useState(false);


    useEffect(() => {
        const info = imageSpreadsheet.filter((elem) => elem.id === selectImage)[0];
        setInfo(info);

        const patt = new RegExp(selectImage);
        const url = props.images.filter((url) => patt.test(url))[0];
        setUrl(url);   
    },[selectImage])

    useEffect(() => {
        if(props.pointerLock) {
            const selectImageTimeout = setTimeout(() => setSelectImage(''), 5000);
            return () => clearTimeout(selectImageTimeout);
        } 
    },[props.pointerLock])



    return (
        <InfoWrapper vis={selectImage}>
            {info ? (
            <div className="info">
                <img src={url} alt='selection'/>
                <div className="specs">
                    <h1> { info.title } </h1> 
                    <p> { info.year +  ' - '+info.technique}</p>
                </div>
                <p> { info.description }</p>   
            </div> ) : null}
        </InfoWrapper>
    )
}

export default Info;
