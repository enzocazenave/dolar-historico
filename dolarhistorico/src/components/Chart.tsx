import { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { CurrencySkeleton } from './CurrencySkeleton'
import { obtenerElementosSeparados } from '../helpers'

interface Props {
    data: Array<[string, number]>
    classVariacion: 'up' | 'down' | 'equal'
    setValueClicked: ({ x, y }: { x: number, y: string }) => void
}

const colors: any = {
    up: '#CD261C',
    down: '#00B982',
    equal: '#0337e6'
}

export const Chart: React.FC<Props> = ({ data, classVariacion, setValueClicked }: Props) => {
    const dataToShow = useMemo(() => {
        if (!data || data.length === 0) return {}

        return {
            labels: data.map((quote) => quote[0].slice(0, 5) + '/' + quote[0].slice(8, 10)),
            quotes: data.map((quote) => quote[1])
        }
    }, [data])

    return (
        <>
            {!dataToShow.labels
                ? <CurrencySkeleton height={220} backgroundColor={colors[classVariacion]} color={'#fff'} marginVertical={8} />
                : <LineChart
                    data={{
                        labels: dataToShow.labels,
                        datasets: [
                            {
                                data: dataToShow.quotes
                            }
                        ]
                    }}

                    width={Dimensions.get('screen').width * 0.9}
                    yLabelsOffset={20}
                    xLabelsOffset={4}
                    height={220}
                    yAxisInterval={1}
                    onDataPointClick={({ value, index }) => {
                        setValueClicked({ x: value, y: dataToShow.labels[index] })
                    }}
                    chartConfig={{
                        backgroundColor: colors[classVariacion],
                        backgroundGradientFrom: colors[classVariacion],
                        backgroundGradientTo: colors[classVariacion],
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        propsForLabels: {
                            fontSize: 10
                        },
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: '4',
                            strokeWidth: '1',
                            stroke: colors[classVariacion]
                        }
                    }}
                    segments={5}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            }
        </>
    )
}
