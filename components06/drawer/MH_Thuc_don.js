import React, {Component} from 'react';
import {Image, View, TouchableHighlight} from 'react-native';

export default class MH_Thuc_don extends Component{
    render(){
        return(           
            <View style={{
                        flexDirection:"row", height:50, 
                        justifyContent:'flex-start', 
                        padding:5,
                        alignItems:'center'}}>
                <TouchableHighlight 
                        style={{marginLeft:10}} 
                        onPress={()=>{this.props.navigation.toggleDrawer()}}>
                    <Image source={require("../../icons/menu.png")} style={{width:26, height:26}}/>
                </TouchableHighlight>                
            </View>            
        );
    }
}