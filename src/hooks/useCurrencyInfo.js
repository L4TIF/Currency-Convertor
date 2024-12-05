import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    //calling the api
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))


    }, [currency, api])
    return data
}