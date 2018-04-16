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
import {  Button, Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import NetUtil from '../data/NetUtil';

const {width,height} = Dimensions.get('window');

export default class Cityitem extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cities: [],
            refreshing: false
        }
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
                item.label=item.Name;
                item.value=item.Id;
            })
            _this.setState({
                cities:res.Data
            })
            console.log(res.Data)
        }) 
    } 
    render() {
        const menuEl = (
            <Menu style={styles.singlefoomenu} 
                className='singlefoomenu'
                data={this.cities}
                level={1}
                height={height}
            />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: height * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        )
        return (
            <View style={styles.container}>
                <Button>我出来了</Button>
                { this.state.cities ? menuEl : loadingEl }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
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


