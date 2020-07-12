import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ url, box }) => {
    return (
        <div className="ma center">
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={url} width='500px' height='auto'></img>
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}

export default FaceDetection;