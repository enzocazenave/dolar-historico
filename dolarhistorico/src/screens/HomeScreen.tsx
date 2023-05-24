import { ScrollView, StyleSheet, View, useColorScheme } from 'react-native'
import { useCurrencies } from '../hooks/useCurrencies'
import { Currency, CurrencySkeleton } from '../components'
import { CURRENCIES_ENDPOINTS } from '../data/data'

export const HomeScreen: React.FC = () => {
    const { currencies, loading } = useCurrencies()
    const skeletons = new Array(CURRENCIES_ENDPOINTS.length).fill(1)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {loading
                ? skeletons.map((_, index) => <CurrencySkeleton key={index} />)
                : currencies.map(currency => <Currency key={currency.nombre} {...currency} />)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 15,
        height: '100%'
    }
})
