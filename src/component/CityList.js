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
//const selectArr =[];


class ClatListItem extends React.PureComponent  {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        //console.log(this.props.selected )
        return(
           
            <TouchableOpacity
                {...this.props}
                onPress={this._onPress}
                style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
            >
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default class CityList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            cities: [],
            selected:(new Map(): Map<String,boolean>),
            refreshing: false
        }
    }
    
    // _onPressItem = (item)=>{
    //     let array = this.state.cities
    //     array.map((item) =>{
    //         item.sleced=false;
    //     })
    //     let index = array.indexOf(item);
    //     array[index].sleced = true;
    //     this.setState({
    //         cities: array
    //     })
    // }
    _keyExtractor = (item, index) => index;
    _onPressItem = (item) => {
        //console.log(item);
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(item, !selected.get(item));
            return {selected}
        });
        console.log(this.state.selected);
        ToastAndroid.show(JSON.stringify(item), ToastAndroid.SHORT);
    };

    _renderItem = ({item}) =>{
        return(
            <ClatListItem
                id={item.Id}
                onPressItem={ ()=>this._onPressItem(item) }
                selected={ !!this.state.selected.get(item.Id) }
                title={ item.Name }
            />
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
            res.Data.map((item)=>{
                item.key=item.Name;
            })
            _this.setState({
                cities:res.Data
            })
            //console.log(res.Data)
        }) 
    } 
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.cities}
                    extraData={ this.state.selected }
                    keyExtractor={ this._keyExtractor }
                    renderItem ={ this._renderItem}
                    refreshing={ this.state.refreshing }
                    // <TouchableOpacity 
                    //     activeOpacity = {0.5}
                    //     onPress={() => this._onPressItem(item)}>
                        
                    //     {/* <View style={item.sleced ===true ? styles.itemactive : styles.item}>
                    //         <Text>{item.sleced ? '真':'假'}</Text>
                    //         <Text style={ item.sleced === 'true' ? styles.itemactiveChid : styles.text}>{item.key}</Text>
                    //     </View> */}

                    // </TouchableOpacity  >
                    
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


