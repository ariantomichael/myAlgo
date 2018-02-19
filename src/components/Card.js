import React from 'react';
import { View } from 'react-native';

const Card = (props) => 
    <View style={styles.container}>
        {props.children}
    </View>
;

const styles = {
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 25,
        marginRight: 25,
        padding: 10,
        marginTop: 20,
        marginBottom: 30,
        flexDirection: 'row'
    }
};

export default Card;
