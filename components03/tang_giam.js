import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from "react-native";
class TangGiam extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        num:0
    }
    Tang(){
        this.setState({
            num:this.state.num +1
        })
    }
    Giam(){
        this.setState({
            num:this.state.num -1
        })
    }
    render() { 
        return ( 
            <View style={{flexDirection:"row",alignSelf:"center"}}>
                {/* <TouchableOpacity onPress={()=>this.setState({num:this.state.num+1})}> */}
                <TouchableOpacity onPress={()=>this.Tang()}>
                    <Text style={{padding:10}}>+</Text>
                </TouchableOpacity>
                <Text>{this.state.num}</Text>
                <TouchableOpacity onPress={()=>this.setState({num:this.state.num-1})}>
                    <Text>-</Text>
                </TouchableOpacity >
            </View>
         );
    }
}

export default TangGiam;