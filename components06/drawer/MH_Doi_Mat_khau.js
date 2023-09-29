import React, {Component} from 'react';
import {Image,  Text, View} from 'react-native';
const backgroundColor="#e97600";
export default class Doi_Mat_khau extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:backgroundColor, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:22 ,color:"#ffffff"}}>
                        Màn hình Đổi mật khẩu
                    </Text>
                </View>
            </View>
        );
    }
}