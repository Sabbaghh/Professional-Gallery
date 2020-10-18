import React from 'react';
import './index.css'
import useFireStore from '../../../../../FireBase/useFireStore'

const ImgList = ({ item }) => {
    const { docs } = useFireStore('images');
    return (
        <>
            {docs && docs.map((item) => {
                return (
                    <div key={item.id} className='img-container'>
                        <img src={item.URL} alt="img" />
                    </div>
                )
            })}
        </>
    );
};

export default ImgList;