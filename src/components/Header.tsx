import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Header = () => 
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Upstox Holding</Text>
    </View>

const styles = StyleSheet.create({
    headerContainer:{
        padding: 5,
        backgroundColor: '#7D007D'
    },
    headerText:{
        color: '#fff',
        fontWeight: 'bold',
        padding: 5    
    }
})

export default Header;