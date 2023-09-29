import React, {Component} from 'react';
import {Image, Text, View,LogBox} from 'react-native';

const backgroundColor="#007256";
// Error Warning
LogBox.ignoreAllLogs();
export default class Gio_hang extends Component{
    constructor(props){
        super(props)
        
        const { key }  = this.props.route.params
        console.log(key)
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:backgroundColor, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight:"bold", fontSize:22 ,color:"#ffffff"}}>
                    Màn hình Giỏ hàng - {this.props.route.params.key}
                </Text>                
            </View>
        );
    }
}