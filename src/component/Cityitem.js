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