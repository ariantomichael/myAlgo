import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AlgoPage from './AlgoPage';
import AlgoList from './AlgoList';

const HomeScreen = ({ navigation }) => (
   // <View style={{ flex: 1 }}>
      <AlgoList navigation={navigation} />
      
  //  </View>
  );

const DetailsScreen = ({ navigation: { state: { params: { problem, example, structure, explanation, solution } } } }) => {
  return (
  
    <AlgoPage problem={problem} example={example} structure={structure} explanation={explanation} solution={solution} />
  
);
};

const RootNavigator = StackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Algorithm List',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerTitle: 'Details',
      },
    },
  });

export default RootNavigator;
