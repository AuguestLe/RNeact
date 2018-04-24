import React, { Component  } from 'react';
import { AppRegistry } from 'react-native';
import { Stacknavigator } from 'react-navigation';
import InstanFootBar from './src/component/InstanFootBar';
import Instanguzi from './src/component/Instanguz';
import Cityitem from './src/component/Cityitem';

const SimpleApp = Stacknavigator({
    Home: {
        screen: InstanFootBar
    },
    Cityitem: {
        screen: Cityitem
    }
});

AppRegistry.registerComponent('pg2', () => SimpleApp);
