import { type NavigationProp, useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useCurrency } from '../hooks/useCurrency'
import { type Currency } from '../d.types'
import { Chart } from '../components'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

export const CurrencyScreen: React.FC = () => {
    const { params } = useRoute<any>()
    const navigation = useNavigation<NavigationProp<any>>()

    useEffect(() => {
        navigation.setOptions({
            title: params.title
        })
    }, [])

    const [currency] = useState<Currency>(params.currency)
    const { data } = useCurrency({ currency })
    const numericVariation = (parseFloat(currency.variacion.replace(',', '.')) * parseFloat(currency.valorCierreAnterior.replace(',', '.')) / 100).toFixed(2).replace('.', ',')
    const [valueClicked, setValueClicked] = useState<{ x: number, y: string }>({ x: 0, y: '' })

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ gap: 10 }}>

                <Text style={styles.sectionTitle}>RESUMEN GRÁFICO</Text>
                <View style={styles.sectionLine}>
                    <View style={{ gap: 5 }}>
                        <Text style={styles.sectionLineTitle}>Cotización venta</Text>
                        <Text style={styles.sectionLineDate}>{valueClicked.y || currency.fecha}</Text>
                    </View>
                    <Text style={styles.sectionLineValue}>{valueClicked.x || currency.venta}</Text>
                </View>
                <Chart data={data} classVariacion={currency.classVariacion} setValueClicked={setValueClicked} />
            </View>

            <View style={{ gap: 10 }}>
                <Text style={styles.sectionTitle}>RESUMEN DE JORNADA</Text>
                <View style={styles.section}>
                    <View style={styles.sectionLine}>
                        <Text style={styles.sectionLineTitle}>Variación porcentual</Text>
                        <Text style={styles.sectionLineValue}>{currency.variacion}</Text>
                    </View>
                    <View style={styles.sectionLine}>
                        <Text style={styles.sectionLineTitle}>Variación numerica</Text>
                        <Text style={styles.sectionLineValue}>{numericVariation}</Text>
                    </View>
                    <View style={styles.sectionLine}>
                        <Text style={styles.sectionLineTitle}>Cierre anterior</Text>
                        <Text style={styles.sectionLineValue}>{currency.valorCierreAnterior}</Text>
                    </View>
                </View>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.sectionTitle}>HISTORIAL</Text>
                <View style={styles.section}>
                    <View style={styles.sectionLine}>
                        <View style={{ gap: 5 }}>
                            <Text style={styles.sectionLineTitle}>Máximo histórico</Text>
                            <Text style={styles.sectionLineDate}>{currency.fechaMaximo}</Text>
                        </View>
                        <Text style={styles.sectionLineValue}>{parseFloat(currency.maximo.replace(',', '.')).toFixed(2).replace('.', ',')}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.sectionLine}
                        activeOpacity={0.5}
                        onPress={() => { navigation.navigate('SearchScreen', { name: currency.nombre }) }}
                    >
                        <Text style={styles.sectionLineTitle}>Buscar cotización por fecha</Text>
                        <Icon
                            name="chevron-forward-outline"
                            size={20}
                            color="#aaa"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 30
    },
    sectionTitle: {
        fontSize: 16,
        color: '#aaa',
        fontWeight: '500',
        paddingLeft: 10
    },
    section: {
        gap: 10
    },
    sectionLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    sectionLineTitle: {
        fontWeight: '400',
        fontSize: 18
    },
    sectionLineValue: {
        fontWeight: '400',
        fontSize: 18,
        color: '#aaa'
    },
    sectionLineDate: {
        color: '#aaa',
        fontWeight: '500',
        fontSize: 14
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#fff',
        flex: 1
    },
    buttonText: {
        padding: 10,
        textAlign: 'center'
    }
})
