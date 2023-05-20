import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { type Currency as CurrencyProps } from '../d.types'
import { useNavigation, type NavigationProp } from '@react-navigation/native'

export const Currency: React.FC<CurrencyProps> = ({ nombre, compra, venta, fecha, variacion, valor_cierre_ant: valorCierreAnterior, 'class-variacion': classVariacion, maximo, fecha_maximo: fechaMaximo }: CurrencyProps) => {
    const navigator = useNavigation<NavigationProp<any>>()

    const refactoredNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    const numericVariation = (parseFloat(variacion.replace(',', '.')) * parseFloat(valorCierreAnterior.replace(',', '.')) / 100).toFixed(2)
    const hour = fecha.split('-')[1]
    const showTodayOrDate = parseInt(fecha.split('/')[0]) === (new Date().getDate())

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={() => {
                navigator.navigate('Currency', {
                    title: `Dólar ${refactoredNombre}`,
                    currency: { nombre, compra, venta, fecha, variacion, valorCierreAnterior, classVariacion, maximo, fechaMaximo }
                })
            }}
        >
            <View style={styles.line}>
                <Text style={styles.name}>Dólar {refactoredNombre}</Text>
                <View style={styles.prices}>
                    <Text style={styles.price}>{compra} - </Text>
                    <Text style={styles.price}>{venta}</Text>
                </View>
            </View>

            <View style={styles.line}>
                <Text style={styles.date}>
                    {showTodayOrDate
                        ? `Hoy${hour}`
                        : fecha
                    }
                </Text>
                <Text
                    style={[
                        styles.variacion,
                        { color: classVariacion === 'up' ? '#00B982' : '#CD261C' },
                        numericVariation === '0.00' && { color: '#0337e6' }
                    ]}
                >
                    {classVariacion === 'up' && '+'} {numericVariation.toString().replace('.', ',')} ({classVariacion === 'up' && '+'}{variacion}) {classVariacion === 'equal' ? '＝' : (classVariacion === 'up' ? '↑' : '↓')}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        gap: 5
    },
    line: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontWeight: '500',
        fontSize: 17
    },
    prices: {
        flexDirection: 'row'
    },
    price: {
        fontWeight: '400',
        fontSize: 18
    },
    date: {
        color: '#888',
        fontWeight: '300',
        fontSize: 13
    },
    variacion: {

    }
})
