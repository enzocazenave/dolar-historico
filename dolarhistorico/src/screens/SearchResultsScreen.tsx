import { type RouteProp, useRoute } from '@react-navigation/native'
import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import { useSearch } from '../hooks/useSearch'
import { useEffect } from 'react'
import { CurrencySkeleton } from '../components'

interface Props {
    date: string
    compra: string
    venta: string
}

const Item: React.FC<Props> = ({ date, compra, venta }: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemContainerDate}>{date}</Text>
            <Text style={styles.itemContainerValues}>{compra} - {venta}</Text>
        </View>
    )
}

export const SearchResultsScreen: React.FC = () => {
    const { params } = useRoute<RouteProp<any>>()

    const { data, loading } = useSearch({
        from: params?.from,
        to: params?.to,
        name: params?.name
    })

    return (
        <>
            {loading
                ? <View style={{ padding: 20, borderRadius: 10 }}><CurrencySkeleton backgroundColor='#fff' height={50} /></View>
                : (
                    <View style={styles.container}>
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
        padding: 20
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
