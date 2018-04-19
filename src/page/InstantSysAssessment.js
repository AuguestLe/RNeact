import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';

import InstanFootBar from '../component/InstanFootBar'
import Cityitem from '../component/Cityitem'
import CityList from '../component/CityList'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            page: 'HomeScreen'
        }
    }
  render() {
    return (
        <View style={styles.container}>
            <Cityitem />
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

