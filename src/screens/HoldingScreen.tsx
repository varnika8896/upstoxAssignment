// react-native screen 
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import Header from '../components/Header';
import HoldingList from '../components/HoldingList';
import BottomDrawer from '../components/BottomDrawer';
import { getHoldingFromApi } from '../utils/api';
import { trainData, initOutput } from '../utils';
import { outputType, dataType } from '../utils/types'

const HoldingScreen = () => {
    
    const [data, setData] = useState<outputType>(initOutput)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        try{
            const data: dataType[] =  await getHoldingFromApi()
            const trainedData = trainData(data)
            setData(trainedData)
            setLoading(false)
        }
        catch{
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        error? 
        <View style={styles.container}>
            <Text>! Error Fetching Holdings</Text>
        </View>
        :
        loading ? 
        <View style={styles.container}>
        <ActivityIndicator />
        </View>
        : 
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Header />
                <HoldingList list={data.list} />
            </View>
            <View style={styles.bottomContainer}>
                <BottomDrawer summary={data.summary} /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'space-between', 
        backgroundColor: '#C3C3C8'
    },
    topContainer: {
        flex: 1
    },
    bottomContainer:{
        flex: 1, 
        justifyContent: 'flex-end'
    }
})


export default HoldingScreen;