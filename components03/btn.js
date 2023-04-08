import React from "react";
import { View,Button, Alert } from "react-native";

export default class Btn extends React.Component{
    render(){
        return(
            <View>
                <Button
                    title="Hello"
                    color={"red"}
                    onPress={()=> Alert.alert('Hello','Hello')}
                    
                />
            </View>
        )
    }
}