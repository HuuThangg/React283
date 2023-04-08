import React from "react";
import { View,Text,Image } from "react-native";

export default class Img extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Hiển thị Hình trong Dự án
                </Text>
                <Image source={require("../images/QUANLY.png")} />
                <Text>
                    Hiển thị Hình URL: https://reactnative.dev/img/tiny_logo.png
                </Text>
                <Image source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} style={{"width":100,"height":50}} />
            </View>

        )
    }
}