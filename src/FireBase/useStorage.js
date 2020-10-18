
import { useState, useEffect } from 'react';
import { ProjectStorage, ProjectFireStore, timeStamp } from './FireBaseConfig';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [URL, setURL] = useState(null);

    useEffect(() => {
        //refs
        const storageRef = ProjectStorage.ref(file.name);
        const collectionRef = ProjectFireStore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let uploadPrecentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(uploadPrecentage);
        }, (err) => {
            setError(err)
        }, async () => {
            const DownloadURL = await storageRef.getDownloadURL();
            setURL(DownloadURL);
            collectionRef.add({ URL: DownloadURL, createdAt: timeStamp() })
        });
    }, [file])

    return { progress, error, URL };
}

export default useStorage;