import React, {useEffect} from 'react';
import axios from "axios";

const QuoteGenerator = () => {
    const [quote, setQuote] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://api.quotable.io/random");
            const {data} = response;
            setQuote(data);
        } catch (error) {
            console.error("Error fetching quote: ", error);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchQuote().then(() => {
            console.log("Quote fetched");
        });


        const intervalId = setInterval(async () => {
            await fetchQuote();
        }, 10000);

        return () => clearInterval(intervalId);

    }, []);


    const handleClick = async () => {
        await fetchQuote();
    }


    return (
        <div className={"quote-container"}>
            <h1>Quote Generator</h1>
            {loading ? (
                <p className={"loading"}>Loading...</p>
            ) : (
                <>
                <p className={"quote-text"}>{quote?.content}</p>
                    <p className={"quote-author"}>{quote?.author}</p>
                </>
            )}
            <button className={"btn"} onClick={handleClick} disabled={loading}>
                {loading ? "Loading..." : "Generate Quote"}
            </button>
        </div>
    );
};

export default QuoteGenerator;