import React, { PureComponent,Component  } from 'react';
import {
    Animated,
    StyleSheet,
    FlatList,
    Text,
    Dimensions,
    TouchableOpacity,
    FlatListItem,
    ToastAndroid,
    View
} from 'react-native';
import {  Button } from 'native-base';
import NetUtil from '../data/NetUtil';

const {width,height} = Dimensions.get('window');
export default class CityList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            cities: [],
            addClass:false
        }
    }
    _keyExtractor = (item, index) => index;
    _onPressItem = (item) => {
        let Cytis = this.state.cities;
        Cytis.map((liks)=>{
            if(liks === item){
                liks.checkeds = true
            }else{
                liks.checkeds = false
            }
        })
        let data = Object.assign([],this.state.cities,Cytis)
        this.setState({
            cities:data,
        })
    };

    _renderItem = ({item}) =>{
        return(
            <TouchableOpacity
                id={item.Id}
                onPress={()=>this._onPressItem(item)}
                style={item.checkeds ? styles.itemactive : styles.item}
            >
                <Text style={item.checkeds ? styles.itemactiveChid : null}>{ item.Name}</Text>
            </TouchableOpacity>
        )    
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
                    extraData={ this.state }
                    keyExtractor={ this._keyExtractor }
                    renderItem ={ this._renderItem}
                    refreshing={ this.state.refreshing }

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
        height:40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor:'#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    text:{
        fontSize: 14,
    },
    itemactive: {
        height:40,
        borderBottomWidth: 1,
        borderBottomColor: '#518FF4',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: '#518FF4',
    },
    itemactiveChid: {
        fontSize: 14,
        color:'#fff'
    }
});


