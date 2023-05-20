import { useEffect, useState } from 'react'
import { type Currency } from '../d.types'
import { API_URL, CURRENCIES_ENDPOINTS } from '../data/data'

interface useCurrencyMethods {
    loading: boolean
    error: string
    data: any
}

interface Props {
    currency: Currency
}

export const useCurrency = ({ currency }: Props): useCurrencyMethods => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState({
        semanal: []
    })
    const [error, setError] = useState<string>('')

    useEffect(() => {
        getCurrencyData('semanal')
            .then((response) => {
                setData((prevState) => ({
                    ...prevState,
                    semanal: response
                }))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const getCurrencyData: (range: string) => Promise<any | undefined> = async (range: string) => {
        try {
            const endpoint = CURRENCIES_ENDPOINTS.find((endpoint) => endpoint.startsWith(currency.nombre))
            const data = await fetch(`${API_URL}${endpoint?.split(':')[1]}grafico/${range}`)
            const dataJson = await data.json()
            dataJson.shift()

            return dataJson
        } catch (error) {
            setError('Servicio de cotización de divisas no disponible')
            console.log(error)
        }
    }

    return {
        loading,
        error,
        data: data.semanal
    }
}
