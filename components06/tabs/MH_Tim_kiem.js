import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

const backgroundColor="#964f8e";
export default class MH_Tim_kiem extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:backgroundColor, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontWeight:"bold", fontSize:22 ,color:"#ffffff"}}>
                    Màn hình Tìm kiếm
                </Text>
            </View>
        );
    }
}