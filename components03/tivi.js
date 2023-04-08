import React, { Component } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";

export default class Tivi extends Component {
    constructor(props) {
        super(props);
    }

    XL_Nhan(tv) {
        Alert.alert(tv.Ten, tv.Don_gia.toLocaleString())
    }
    render() {
        return (
            <View>
                {
                    this.props.ds.map((tv, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.XL_Nhan(tv)  }>
                                <Text key={index} style={{ marginLeft: 10, color: "green" }}>{index + 1}/. {tv.Ten} - {tv.Don_gia.toLocaleString()}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

}