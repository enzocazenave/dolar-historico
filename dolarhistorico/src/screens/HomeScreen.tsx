import { ScrollView, StyleSheet, View } from 'react-native'
import { useCurrencies } from '../hooks/useCurrencies'
import { Currency, CurrencySkeleton } from '../components'

export const HomeScreen: React.FC = () => {
    const { currencies, loading, error } = useCurrencies()
    const skeletons = new Array(5).fill(1)

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
        gap: 15
    }
})
