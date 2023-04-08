import React from "react";
import {View,Text} from 'react-native'

export class Header extends React.Component{
    render(){
        return(
            <View>
                <Text>đây là trang đầu Header</Text>
            </View>
        )
    }
}
export class Footer extends React.Component{
    render(){
        return(
            <View>
                <Text>đây là trang cuối Footer</Text>
            </View>
        )
    }
}
export class Content extends React.Component{
    render(){
        return(
            <View>
                <Text>đây là trang nội dung Content</Text>
            </View>
        )
    }
}