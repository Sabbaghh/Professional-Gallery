import { useState, useEffect } from 'react';
import { ProjectFireStore } from './FireBaseConfig';

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = ProjectFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            });

        return () => unsub();
    }, [collection]);

    return { docs };
}

export default useFireStore;