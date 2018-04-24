import {StackNavigator} from "react-navigation";
import MainPage from './InstantSysAssessment';
import Citylist from '../component/Cityitem';

const routers = StackNavigator({
    Main:{
        screen: MainPage
    },
    Citylist: {
        screen: Citylist
    }
})
module.exports = routers;