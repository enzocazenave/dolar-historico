import { type RouteProp, useRoute } from '@react-navigation/native'
import { FlatList, FlatListProps, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { useSearch } from '../hooks/useSearch'
import { useEffect } from 'react'
import { CurrencySkeleton } from '../components'
import { colors } from '../data/colors'

interface Props {
    date: string
    compra: string
    venta: string
}

const Item: React.FC<Props> = ({ date, compra, venta }: Props) => {
    const theme = useColorScheme() ?? 'light'

    return (
        <View style={[styles.itemContainer, { backgroundColor: colors[theme].background2 }]}>
            <Text style={[styles.itemContainerDate, { color: colors[theme].color2 }]}>{date}</Text>
            <Text style={[styles.itemContainerValues, { color: colors[theme].color1 }]}>{compra} - {venta}</Text>
        </View>
    )
}

export const SearchResultsScreen: React.FC = () => {
    const { params } = useRoute<RouteProp<any>>()
    const theme = useColorScheme() ?? 'light'

    const { data, loading } = useSearch({
        from: params?.from,
        to: params?.to,
        name: params?.name
    })

    return (
        <>
            {loading
                ? <View style={[styles.container, { backgroundColor: colors[theme].background1 }]}><CurrencySkeleton backgroundColor={colors[theme].background2} color={colors[theme].color1} height={50} /></View>
                : (
                    <View style={[styles.container, { backgroundColor: colors[theme].background1 }]}>
                        {data.length > 0
                            ? (
                                <FlatList
                                    contentContainerStyle={styles.flat}
                                    data={data}
                                    renderItem={({ item }) => <Item date={item[0]} compra={item[1]} venta={item[2]} />}
                                    keyExtractor={(_, index): any => index}
                                />
                            )
                            : <View style={styles.message}><Text style={styles.messageText}>No se encontraron resultados de busqueda para esa fecha.</Text></View>
                        }

                    </View>
                )
            }

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%'
    },
    flat: {
        gap: 10
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    itemContainerDate: {
        fontSize: 18,
        color: '#aaa'
    },
    itemContainerValues: {
        fontWeight: '500',
        fontSize: 18
    },
    message: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    messageText: {
        fontSize: 16
    }
})
