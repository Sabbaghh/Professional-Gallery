import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const ChnageHanlder = (e) => {
        let seleted = e.target.files[0];
        if (seleted && types.includes(seleted.type)) {
            setFile(seleted);
            setError(null);
        } else {
            setFile(null);
            setError('Please select a valid type (png/jpeg)');
        }
    };

    useEffect(() => {

    }, [setFile])

    return (
        <div>
            <form >
                <input type="file" onChange={(e) => ChnageHanlder(e)} />
                <div className='outPut'>
                    {error && <p className='error'>{error}</p>}
                    {file && <p className='file'>{file.name}</p>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>

            </form>
        </div>
    );
};

export default UploadForm;