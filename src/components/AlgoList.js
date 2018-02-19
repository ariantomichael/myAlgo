import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Card from './Card';
import algodata from './algodata';
import Icon from 'react-native-vector-icons/Feather';

const AlgoList = (props) => {
    return (
    <View style={{ paddingTop: 50, backgroundColor: '#FFF', flex: 1 }}> 
        {algodata.map((data) => 
        <TouchableOpacity key={data.title} onPress={() => props.navigation.navigate('Details', data)}>
            
            <Card>
                <Icon name='arrow-right' size={25} color='#000' />
                <Text style={{ fontSize: 20, marginLeft: 20 }}>{data.title}</Text>
            </Card>
            
        </TouchableOpacity>    
        )}
    </View>
    );
};

export default AlgoList;
