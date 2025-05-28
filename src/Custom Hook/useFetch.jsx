import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);         // Dati ricevuti
    const [loading, setLoading] = useState(true);   // Stato di caricamento
    const [error, setError] = useState(null);       // Eventuali errori

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        setError(null);

        fetch(url)
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.json();
        })
        .then((json) => {
            if (isMounted) setData(json);
        })
        .catch((err) => {
            if (isMounted) setError(err.message);
        })
        .finally(() => {
            if (isMounted) setLoading(false);
        });

        // Pulizia se il componente viene smontato
        return () => {
        isMounted = false;
        };
    }, [url]);

    return { data, loading, error };
}