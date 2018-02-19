/*import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Header from './src/components/Header';
import AlgoList from './src/components/AlgoList';
import AlgoPage from './src/components/AlgoPage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Algorithm List'} />
        <AlgoList />
        <Button title='haha' onPress={()=>{}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
*/

import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import RootNavigator from './src/components/RootNavigator';

export default class App extends React.Component {
  render() {
    console.log(RootNavigator);
    return (
      <RootNavigator />
    );
  }
}
