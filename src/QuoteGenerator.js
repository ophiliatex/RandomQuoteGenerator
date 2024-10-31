import React from 'react';

const QuoteGenerator = () => {
    const [quote, setQuote] = React.useState("");


    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data.content);
    }



    return (
        <div className={"quote-container"}>
            <h1>Quote Generator</h1>
            <p className={"quote-text"}>Quote Text</p>
            <p className={"quote-author"}>Quote Author</p>
            <button className={"btn"}>Generate Quote</button>
        </div>
    );
};

export default QuoteGenerator;