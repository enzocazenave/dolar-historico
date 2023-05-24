import { useEffect, useState } from 'react'
import { type Currency } from '../d.types'
import { API_URL, CURRENCIES_ENDPOINTS } from '../data/data'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { HomeHeaderRight } from '../components'

type useCurrenciesMethods = () => {
    loading: boolean
    currencies: Currency[]
    error: string
}

export const useCurrencies: useCurrenciesMethods = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const navigation = useNavigation<NavigationProp<any>>()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <HomeHeaderRight onPress={refreshCurrencies} />
        })
    }, [])

    useEffect(() => {
        getCurrencies()
            .then(data => {
                if (data !== undefined) setCurrencies(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const refreshCurrencies: () => void = () => {
        setLoading(true)

        getCurrencies()
            .then(data => {
                if (data !== undefined) setCurrencies(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getCurrencies: () => Promise<Currency[] | undefined> = async () => {
        try {
            const data: Currency[] = await Promise.all(CURRENCIES_ENDPOINTS.map(
                async (currency) => {
                    const currencyEndpoint: string[] = currency.split(':')
                    const data: Response = await fetch(`${API_URL}${currencyEndpoint[1]}historico-cierre`)
                    return { ...await data.json(), nombre: currencyEndpoint[0] }
                }
            ))

            return data
        } catch (error) {
            setError('Servicio de cotización de divisas no disponible')
            console.log(error)
        }
    }

    return {
        loading,
        currencies,
        error
    }
}
