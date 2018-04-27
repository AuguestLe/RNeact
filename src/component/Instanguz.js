import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import {  Button } from 'native-base';
import { StackNavigator } from 'react-navigation';

import rightBack from '../source/PublicImage/fastOnlineJianTou.png';

const {width,height} = Dimensions.get('window');

export default class Instanguzi extends Component {
    constructor(props){
        super(props)
        this.state={
            shangpai:'请选择上牌地区'
        }
    }
    _onPress=(item)=>{
        console.log(item)
        this.setState({
            shangpai: item.cityName
        })
        this.props.navgatio.goBack(null);
    }
  render() {
    const navigates =this.props.navgatio.navigate;
    return (
        <View style={styles.container}>
            <View style={[styles.instItem,styles.margint]}>
                <Text>品牌车型</Text>
                <TouchableOpacity style={styles.instItemRit}>
                    <Text style={styles.defauFont}>请选择品牌车型</Text>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.instItem}>
                <Text>上牌时间</Text>
                <TouchableOpacity style={styles.instItemRit}>
                    
                    <Text style={styles.defauFont}>请选择品牌车型</Text>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.instItem}>
                <Text>行驶公里</Text>
                <View style={styles.instItemRit}>
                    <TextInput 
                        style={styles.inputBox} 
                        underlineColorAndroid={'transparent'}
                        keyboardType ={'numeric'}
                        caretHidden ={true}
                        placeholder="请输入行驶公里"/>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </View>
            </View>
            <View style={styles.instItem}>
                <Text>上牌地区</Text>
                <TouchableOpacity style={styles.instItemRit} onPress={()=> navigates('cityItem',{Prentpress: (item)=>this._onPress(item),open: this.state.open})}>
                    <Text style={styles.defauFont}>{this.state.shangpai}</Text>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonBox}>
                <Button block style={styles.inButton}>
                    <Text style={{color:'#fff'}}>立即评估</Text>
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
    zIndex: 999,
  },
  instItem: {
    height:40,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f3f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft: width*0.04,
  },
  instItemRit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instItemRitImg:{
    marginLeft: 10,
    marginRight: 10,
  },
  defauFont: {
      fontSize: 12,
      color: '#999'
  },
  margint: {
        marginTop:30
  },
  inputBox: {
        borderWidth: 0,
        width:width*0.6,
        textAlign: 'right',
        fontSize: 12
  },
  buttonBox: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
  },
  inButton: {
        height: 40,
        borderRadius: 5,
        backgroundColor:'#4b92ec'
  }
});

