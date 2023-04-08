import React, { Component } from 'react';
import { View,Text,StyleSheet} from "react-native";
import { dinhdangchung } from "./myStyle";
class StyleReactNative extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <View style={dinhdangchung.body}>
                <Text style={{textAlign:"center",fontSize:24,color:"red"}}>Inline</Text>
                <Text style={[dinhdang.text,dinhdang.container,{fontSize:40}]}>Internal</Text>
                <Text style={dd.title}>Hello</Text>
            </View>
         );
    }
}

const dinhdang= StyleSheet.create({
    text:{
        color:"white",
        fontSize:10,
        textAlign:"center"
    },
    container:{
        backgroundColor:"chocolate"
    }
})

const dd={
    title:{
        color:"green",
        fontSize:30,
        textAlign:"center"
    }
}
 
export default StyleReactNative;