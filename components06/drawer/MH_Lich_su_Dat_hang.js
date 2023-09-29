import React, {Component} from 'react';
import {Image,  Text, View} from 'react-native';

const backgroundColor="#007256";
export default class Lich_su_Dat_hang extends Component{
    
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:backgroundColor, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:22 ,color:"#ffffff"}}>
                        Màn hình Lịch sử đặt hàng
                    </Text>
                </View>
            </View>
        );
    }
}