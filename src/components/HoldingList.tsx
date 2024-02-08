import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";
import { listType } from "../utils/types";

const Holding = (props: PropsWithChildren<{item : listType}>) => {
    return(
        <View style={styles.row}>
            <View>
                <Text style={[styles.boldText,styles.paddingBottom]}>{props.item.symbol}</Text>
                <Text style={styles.text}>{props.item.quantity}</Text>
            </View>
            <View style={styles.rightContent}>
                <Text style={[styles.paddingBottom,  styles.text]}>LTP: <Text  style={styles.boldText}>₹{props.item.ltp}</Text></Text>
                <Text  style={styles.text}>P/L: <Text  style={styles.boldText}>₹{props.item.pnl}</Text></Text>
            </View>
        </View> 
    )
}

const HoldingList = (props: PropsWithChildren<{list : listType[]}>) => 
props.list.map((item:listType, index: number) =><Holding item={item} key={index} />)

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15 ,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#00000020',
        backgroundColor: '#fff'
    },
    boldText: {
        fontWeight: 'bold',
        color: '#000'
    },
    rightContent:{
        alignItems: 'flex-end'
    },
    paddingBottom: {
        paddingBottom: 10
    },
    text:{
        color:'#000'
    }
  });

export default HoldingList;