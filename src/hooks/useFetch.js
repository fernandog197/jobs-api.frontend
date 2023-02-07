import { useState } from 'react'

import { sendRequest } from '../services/sendRequest'

const useFetch = () => {
    const [fetchState, setFetchState] = useState({
        isLoading: false,
        isSuccess: false,
        isFailed: false,
        data: null,
        err: null
    })

    const fetchData = async ({ url, method, body }) => {
        try {
            setFetchState({
                ...fetchState,
                isLoading: true
            })

            const result = await sendRequest({ url, method, body })

            setFetchState({
                ...fetchState,
                isLoading: false,
                isSuccess: true,
                data: result
            })

            return result
        } catch (err) {
            setFetchState({
                ...fetchState,
                isFailed: true,
                err: err
            })
        }
    }

    return [fetchState, fetchData]
}

export default useFetch