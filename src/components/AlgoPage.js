import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import Card from './Card';

const AlgoPage = (props) => 
<ScrollView style={styles.container}>
    <Text> The Problem </Text>
    <Text> {props.problem} </Text> 
    
    <Text style={{ marginTop: 20, marginBottom: 20 }}>{props.example}</Text>
        

    <Text> Program Structure: </Text>
    <Card>
        <Text>{props.structure}</Text>
    </Card>
    <Text> Solution </Text>
    <Text> {props.explanation} </Text>
    <Card> 
        <Text>{props.solution}</Text>
    </Card>
</ScrollView>;

const styles = {
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        
        
    }
};

export default AlgoPage;
