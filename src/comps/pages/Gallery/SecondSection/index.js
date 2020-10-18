import React from 'react';
import './index.css'
//comps
import ImgList from './ImagList'
//
import UploadForm from '../../../UI/UploadForm'


const SecondSection = (props) => {
    return (
        <div
            ref={props.createRef}
            className='SecondSection'>
            <div className='quote'> <h1>BLESS YOUR EYES</h1>
                <UploadForm />
            </div>
            <div className='imges-container-grid'>
                <ImgList />
            </div>
        </div>
    );
};

export default SecondSection;