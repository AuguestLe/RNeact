import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
} from 'react-native';

import InstanFootBar from '../src/component/InstanFootBar'
import Cityitem from '../src/component/Cityitem'
export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
            <InstanFootBar />
        </View>
      );
    }
  }
const styles = StyleSheet.create({
    container: {
      flex: 1, 
    }
}); 