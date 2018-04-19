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
    _keyExtractor = (item, index) => index;
    _renderItem = ({item}) =>{
        return(
            <TouchableOpacity
                id={item.Id}
                onPress={()=> this.props.handlePress(item)}
                style={item.checkeds ? styles.itemactive : styles.item}
            >
                <Text style={item.checkeds ? styles.itemactiveChid : null}>{ item.Name}</Text>
            </TouchableOpacity>
        )    
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fals}>
                    <FlatList 
                        data={this.props.cities}
                        extraData={ this.props }
                        keyExtractor={ this._keyExtractor }
                        renderItem ={ this._renderItem}
                    />
                 </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F3F3F3',
    },
    fals:{
        position: 'absolute',
        width:width,
        top:0,
        left:0,
        backgroundColor:'#fff'
    },
    falsouter:{
        position: 'absolute',
        top:0,
        left:0,
        zIndex: 999,
        backgroundColor:'#fff'
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


