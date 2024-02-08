import React, { PropsWithChildren, useState } from "react";
import {View, Text, Modal, TouchableOpacity, StyleSheet, LayoutAnimation} from 'react-native'
import { summaryType } from "../utils/types";

const BottomDrawer = (props: PropsWithChildren<{summary : summaryType}>) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsExpanded(!isExpanded);
    };

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
            <Text style={styles.headerText}>{isExpanded ? '▼' : '▲'}</Text>
          </TouchableOpacity>
          <View style={[styles.content]}>
            {isExpanded && (
              <>
                <View style={styles.row}>
                    <Text style={styles.boldText}>Current Value</Text>
                    <Text style={styles.text}>₹{props.summary.currentValue}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.boldText}>Total Investment</Text>
                    <Text style={styles.text}>₹{props.summary.totalInvestment}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.boldText}>Today's Profit & Loss</Text>
                    <Text style={styles.text}>₹{props.summary.todayPnl}</Text>
                </View>
              </>
            )}
             <View style={[styles.row, isExpanded ? styles.expandedRow : styles.collapsedRow]}>
                <Text style={styles.boldText}>Profit & Loss:</Text>
                <Text style={styles.text}>₹{props.summary.totalPnl}</Text>
            </View>
          </View>
        </View>
      );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
      },
      header: {
        alignItems: 'center',
      },
      headerText: {
        color: '#7D007D',
        fontSize: 20,
      },
      content: {
        overflow: 'hidden',
        borderRadius: 5,
        padding: 10
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      expandedRow: {
        paddingVertical: 10,
      },
      collapsedRow: {
        paddingBottom: 10
      },
      boldText:{
        fontWeight: 'bold',
        paddingVertical: 5,
        color: '#000'
      },
      text: {
        color: '#000'
      }
  });

export default BottomDrawer;