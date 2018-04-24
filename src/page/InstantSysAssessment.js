import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import { Stacknavigator } from 'react-navigation';

import InstanFootBar from '../component/InstanFootBar'
import Cityitem from '../component/Cityitem'
import CityList from '../component/CityList'

export default class App extends Component {
    static navigationOptions = {
        title: '哈哈哈哈'
    }
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
    backgroundColor: '#F3F3F3',
  }
});

