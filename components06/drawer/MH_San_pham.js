import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

const backgroundColor="#0067a7";
export default class San_pham extends Component{
       
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:backgroundColor, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:22 ,color:"#ffffff"}}>
                        Màn hình Sản phẩm
                    </Text>
                </View>
            </View>
        );
    }
}