import { useEffect, useState } from 'react'
import { API_URL, CURRENCIES_ENDPOINTS } from '../data/data'

interface useSearchMethods {
    data: any
    loading: boolean
    error: string
}

interface Props {
    from: string
    to: string
    name: string
}

export const useSearch = ({ from, to, name }: Props): useSearchMethods => {
    const [data, setData] = useState([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        search()
            .then((response) => {
                setData(response)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [from, to])

    const search: () => Promise<any> = async () => {
        try {
            const endpoint = CURRENCIES_ENDPOINTS.find((endpoint) => endpoint.startsWith(name))
            const endpointToFetch = `${API_URL}${endpoint?.split(':')[1]}historico-general/${from}/${to}`
            const data = await fetch(endpointToFetch)
            const dataJson = await data.json()
            dataJson.shift()

            return dataJson.reverse()
        } catch (error) {
            setError('Servicio de cotización de divisas no disponible')
            console.log(error)
        }
    }

    return {
        data,
        loading,
        error
    }
}
