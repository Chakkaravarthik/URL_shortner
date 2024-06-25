import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { redirecturl } from "../../apis/auth.js";

const Redirecturl = () => {
    const { url_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await redirecturl(url_id);
                console.log(result)
                if (result && result.urlobj.longurl) {
                    window.location.replace(result.urlobj.longurl);
                } else {
                    setError(true); // Set error state if result is not as expected
                }
            } catch (error) {
                console.log("Error redirecting:", error.message);
                setError(true); // Set error state on fetch failure
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error occurred while redirecting</h1>;
    }

    // If loading and error conditions are false, this point is never reached,
    // as the page will have been redirected in the fetchData function.

    return null; // Or any other fallback UI if needed
};

export default Redirecturl;
