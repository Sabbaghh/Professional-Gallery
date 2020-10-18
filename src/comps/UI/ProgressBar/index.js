import React, { useEffect } from 'react';
import useStorage from '../../../FireBase/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { URL, progress } = useStorage(file);
    useEffect(() => {
        if (URL) setFile(null)
    }, [URL, setFile])
    return (
        <div className='ProgressBar'>
            {Math.ceil(progress)}
        </div>
    );
};

export default ProgressBar;