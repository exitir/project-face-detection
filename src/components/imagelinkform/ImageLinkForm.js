import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ customInputChangeProp, customOnSubmitProp }) => (
    <div>
        <p className='f3'>
            {'This Magic Brain will detect faces in your pictures, give it a try!'}
        </p>
        <h6>Sample image url: https://www.screengeek.net/wp-content/uploads/2019/10/avengers-engame-tony-stark.jpg</h6>
        <div className='center'>
            <div className='form center pattern pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={customInputChangeProp} />
                <button
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={customOnSubmitProp}
                >Detect</button>
            </div>
        </div>
    </div>
);

export default ImageLinkForm;