import { useState, useCallback } from "react";
import axios from "axios";

const useEmployeeInfo = (baseUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initial data fetching
    // useEffect(() => {
    //     if (baseUrl) {
    //         fetchData(baseUrl);
    //     }
    // }, [baseUrl]);

    // Function to fetch data
    const request = useCallback(async ({ method, url = "", body = null, headers = {} }) => {
        setLoading(true);
        try {
            const response = await axios({ method, url: `${baseUrl}${url}`, data: body, headers });
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    }, [baseUrl]);

    // `read` function for dynamic GET requests
    const read = (url = "", headers = {}) =>
        request({ method: "GET", url, headers });

    return { data, loading, error, read };
};

export default useEmployeeInfo;
