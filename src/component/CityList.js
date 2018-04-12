import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    FlatList,
    Text,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';
import {  Button } from 'native-base';
import NetUtil from '../data/NetUtil';

const {width,height} = Dimensions.get('window');

export default class CityList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cities: [],
            tabs:false
        }
    }
    _onPressItem = (key )=>{
        console.log(key);

    }
    componentDidMount (){
        let params = {
            op:'GetProvJson',
            tokenID: '6',
            userid:'3',
            sign:'600D3600068B4E2D23C37105BE135D4F'
        }
        let _this = this;
        NetUtil.post('/api/AreaCity/GetAreaCity',params,function(res){
            res.Data.map((item)=>{
                item.key=item.Name;
            })
            _this.setState({
                cities:res.Data
            })
        }) 
    } 
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.cities}
                    renderItem ={({item}) => 
                    <TouchableOpacity 
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={() => this._onPressItem(item)}>
                        <View style={styles.item}><Text style={styles.text}>{item.key}</Text></View>
                    </TouchableOpacity  >
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    item: {
        height:30,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor:'#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    text:{
        fontSize: 14,
    }
});

