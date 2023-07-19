import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchData(){
        setIsLoading(true)
        const fetchData = await fetch(url);
        const response = fetchData.json();
        setData(response as T);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    }, [url])

    return { data, isLoading }
}