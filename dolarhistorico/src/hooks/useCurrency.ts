import { useEffect, useState } from 'react'
import { type Currency } from '../d.types'
import { API_URL, CURRENCIES_ENDPOINTS } from '../data/data'

interface useCurrencyMethods {
    loading: boolean
    error: string
    data: any
}

export const useCurrency = ({ nombre, compra, venta }: Currency): useCurrencyMethods => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        getCurrencyData()
            .then((response) => {
                setData(response)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const getCurrencyData: () => Promise<any | undefined> = async () => {
        try {
            const endpoint = CURRENCIES_ENDPOINTS.find((endpoint) => endpoint.startsWith(nombre))
            const data = await fetch(`${API_URL}${endpoint?.split(':')[1]}grafico/semanal`)
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
        data
    }
}
