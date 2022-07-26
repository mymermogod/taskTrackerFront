import { useState, useEffect } from "react";
import axios from 'axios';

export function useFetch(url) {
const [data,setData ] = useState(null)
const [isFetching, setIsFetching] = useState(true)

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

    useEffect(() => {
        api.get(url)
        .then(response => {
            setData(response.data)
        })
        .finally(() => setIsFetching(false))
    }, [])

    return { data, isFetching }
}