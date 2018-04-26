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
    View,
    ScrollView 
} from 'react-native';
import {  List, Drawer } from 'antd-mobile';
import NetUtil from '../data/NetUtil';
import CityList from './CityList';
const {width,height} = Dimensions.get('window');

export default class Cityitem extends Component {
    constructor(props){
        super(props)
        this.state ={
            data:[],
            cities:[],
            open:false,
            params:{
                op:'GetProvJson',
                tokenID: '6',
                userid:'3',
                sign:'600D3600068B4E2D23C37105BE135D4F'
            }
        }
    }
    _onPressItem = (item)=>{
        this.setState({
            open:false
        })
    }
    _keyExtractor = (item, index) => index;
    _renderItem=({item}) =>{
        return(
            <TouchableOpacity
                id={item.key}
                onPress={()=>this._onPressItem(item)}
                style={item.checkeds ? styles.itemactive : styles.item}
            >
                <Text style={item.checkeds ? styles.itemactiveChid : null}>{ item.Name}</Text>
            </TouchableOpacity>
        )    
    }
    _hanlePress=(item)=>{
        let _this = this;
        let Cytis = this.state.cities;
        Cytis.map((liks)=>{
            if(liks === item){
                liks.checkeds = true
            }else{
                liks.checkeds = false
            }
        })
        let data = Object.assign([],this.state.cities,Cytis)
        let parse = this.state.params;
        parse.op = 'GetCityJson';
        parse.provId = String(item.Id);
        NetUtil.post('/api/AreaCity/GetAreaCity',parse,function(res){
            console.log(res);
            _this.setState({
                data:res.Data,
                cities: data,
                open: true
            })
        }) 
    }
    componentDidMount (){
        let _this = this;
        NetUtil.post('/api/AreaCity/GetAreaCity',this.state.params,function(res){
            _this.setState({
                cities:res.Data
            })
        })  
    } 
    render(){
        return(
            <Drawer
                style={styles.myDrawer}
                className="myDrawer"
                position={'right'}
                drawerWidth={200}
                enableDragHandle
                contentStyle={{color:'#a6a6a6',textAlign:'center',paddingTop:42}}
                sidebar={(
                    <FlatList 
                        style={styles.flatl}
                        data={this.state.data}
                        extraData={ this.state }
                        keyExtractor={ this._keyExtractor }
                        renderItem ={ this._renderItem}
                    />
                )}
                open={this.state.open}
                >
                <CityList 
                    handlePress={this._hanlePress}
                    cities={this.state.cities}
                />
                
            </Drawer>  
        )
    }
}

const styles = StyleSheet.create({
    flatl:{
        zIndex: 999,
        height:900,
    },
    myDrawer: {
        backgroundColor:'#fff',
        height:900,
        zIndex: 999,
    },
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    containers: {
        flex: 1,
        backgroundColor: '#000',
    },
    singlefoomenu:{
        position:'absolute',
        width:width
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
        borderBottomColor: '#ccc',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        backgroundColor: '#518FF4'
    },
    itemactiveChid: {
        fontSize: 14,
        color:'#fff'
    }
});


