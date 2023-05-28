import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { type RouteProp, useRoute, useNavigation, type NavigationProp } from '@react-navigation/native'
import { colors } from '../data/colors'

export const SearchScreen: React.FC = () => {
    const [date, setDate] = useState({
        from: new Date(),
        to: new Date()
    })
    const { params } = useRoute<RouteProp<any>>()
    const navigation = useNavigation<NavigationProp<any>>()

    const formatDate = (date: Date, type: 'show' | 'request'): string => {
        return type === 'show'
            ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    const [openFrom, setOpenFrom] = useState(false)
    const [openTo, setOpenTo] = useState(false)

    const condition = formatDate(date.to, 'show') !== formatDate(date.from, 'show')

    const theme = useColorScheme() ?? 'light'

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].background1 }]}>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => { setOpenFrom(true) }}
                style={[styles.datePicker, { backgroundColor: colors[theme].background2 }]}
            >
                <Text style={[styles.datePickerText, { color: colors[theme].color1 }]}>Seleccionar fecha desde</Text>
                <Text style={{ color: colors[theme].color2 }}>{formatDate(date.from, 'show')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => { setOpenTo(true) }}
                style={[styles.datePicker, { backgroundColor: colors[theme].background2 }]}
            >
                <Text style={[styles.datePickerText, { color: colors[theme].color1 }]}>Seleccionar fecha hasta</Text>
                <Text style={{ color: colors[theme].color2 }}>{formatDate(date.to, 'show')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={!condition}
                activeOpacity={0.6}
                style={[styles.datePicker, { backgroundColor: colors[theme].background2 }]}
                onPress={() => { navigation.navigate('SearchResultsScreen', { from: formatDate(date.from, 'request'), to: formatDate(date.to, 'request'), name: params?.name }) }}
            >
                <Text style={[styles.textButton, { color: colors[theme].color1 }, !condition && { color: '#aaa' }]}>Buscar</Text>
            </TouchableOpacity>

            {!condition && <View style={styles.error}><Text style={styles.errorText}>Las fechas de busqueda no pueden ser iguales</Text></View>}

            <DatePicker
                modal
                open={openFrom}
                date={date.from}
                onConfirm={(date) => {
                    setOpenFrom(false)
                    setDate((prev) => ({ ...prev, from: date }))
                }}
                onCancel={() => {
                    setOpenFrom(false)
                }}
                locale='es-ES'
                title="Seleccionar desde"
                confirmText='Confirmar'
                cancelText='Cancelar'
                mode='date'
                maximumDate={date.to}
            />
            <DatePicker
                modal
                open={openTo}
                date={date.to}
                onConfirm={(date) => {
                    setOpenTo(false)
                    setDate((prev) => ({ ...prev, to: date }))
                }}
                onCancel={() => {
                    setOpenTo(false)
                }}
                locale='es-ES'
                title="Seleccionar hasta"
                confirmText='Confirmar'
                cancelText='Cancelar'
                mode='date'
                maximumDate={new Date()}
                minimumDate={date.from}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
        height: '100%'
    },
    datePicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    datePickerText: {
        fontWeight: '500'
    },
    textButton: {
        fontSize: 16,
        textAlign: 'center',
        flex: 1,
        fontWeight: '500'
    },
    error: {
        padding: 10,
        backgroundColor: '#rgba(255, 0, 0, 0.32)',
        borderRadius: 10
    },
    errorText: {
        color: '#f00',
        textAlign: 'center'
    }
})
