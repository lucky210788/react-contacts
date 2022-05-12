import {useEffect, useState} from "react";
import api from "../services";

export const useContacts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    async function getContacts() {
        try {
            setIsLoading(true);
            const {data: {results, error}} = await api.auth.getUsers();
            if (error) {
                throw new Error(error);
            }
            setData(results);
        } catch (e) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getContacts();
    }, []);

    return {
        data,
        isLoading,
        isError
    }
}