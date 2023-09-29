import React from "react";
import { View,Text} from "react-native";

export default class ListTivi extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text>Call API</Text>
            </View>
        )
    }
    componentDidMount(){
        let url=`http://172.23.38.4:8080/listTivi`;
        fetch(url)
        .then((result)=> result.json())
        .then((data)=>{
            console.log(data)
        })
    }
    
}