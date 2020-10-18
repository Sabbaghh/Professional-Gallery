import React, { useState } from 'react';
import './index.css'
//comps
import ImgList from './ImagList'
//
import IMGModal from '../../../UI/ImgModal';


const SecondSection = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [URL, setURL] = useState(null);
    const ShowModalOnClick = (url) => {
        if (url) {
            setURL(url)
            setShowModal(true);
        }
    }

    return (
        <>
            <div
                ref={props.createRef}
                className='SecondSection'>
                {showModal &&
                    <IMGModal
                        setShowModal={setShowModal}
                        URL={URL} />
                }
                <div
                    className='quote'>
                    <h1>BLESS YOUR EYES</h1>
                </div>
                <div
                    className='imges-container-grid'>
                    <ImgList ShowModalOnClick={ShowModalOnClick} />
                </div>
            </div>
        </>
    );
};

export default SecondSection;