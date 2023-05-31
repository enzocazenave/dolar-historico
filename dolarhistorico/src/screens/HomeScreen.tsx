import { ScrollView, StyleSheet, useColorScheme } from 'react-native'
import { useCurrencies } from '../hooks/useCurrencies'
import { Currency, CurrencySkeleton } from '../components'
import { CURRENCIES_ENDPOINTS } from '../data/data'
import { colors } from '../data/colors'

export const HomeScreen: React.FC = () => {
    const { currencies, loading } = useCurrencies()
    const skeletons = new Array(CURRENCIES_ENDPOINTS.length).fill(1)
    const theme = useColorScheme() ?? 'light'

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            style={{ backgroundColor: colors[theme].background1 }}
        >
            {loading
                ? skeletons.map((_, index) => <CurrencySkeleton backgroundColor={colors[theme].background2} key={index} color={colors[theme].color1} />)
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
