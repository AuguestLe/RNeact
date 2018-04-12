import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  View
} from 'react-native';
import {  Button } from 'native-base';

const {width,height} = Dimensions.get('window');

export default class InstanVin extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{color:'#000',fontSize:14,height:30}}>VIN码</Text>
                <TextInput style={styles.texInput} placeholder="请输入VIN码"/>
            </View>
            <View style={styles.buttonBox}>
                <Button block style={styles.inButton}>
                    <Text style={{color:'#fff'}}>查询</Text>
                </Button>
            </View>           
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    padding: 10,
  },
  buttonBox: {
        marginTop: 20
  },
  inButton: {
        height: 40,
        borderRadius: 5,
        backgroundColor:'#4b92ec'
  },
  texInput: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ccc',
      height:40,
      fontSize: 14,
      paddingLeft:10,
      paddingRight:10
  }
});

