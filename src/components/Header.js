import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => 
<View style={styles.view}>
    <Text style={styles.text}> {props.headerText} </Text>
</View>;

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    text: {
        fontSize: 20
    }
});

export default Header;
