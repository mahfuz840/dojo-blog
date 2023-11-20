import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Couldn\'t fetch data!');
                    }

                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setError(null);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log('got error');
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setData(null);
                        setError(err.message);
                        setIsLoading(false);    
                    }
                });
        }, 1000);

        return () => {
            abortController.abort();
        }
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;
