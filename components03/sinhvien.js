import React, { Component } from "react";
import { View, Text, Alert, TouchableOpacity} from "react-native";

export default class sinhvien extends Component {
    constructor(props) {
        super(props);
    }

    XL_Nhan(sv) {
        Alert.alert(sv.Lop, sv.Hoten)
    }
    render() {
        return (
            <View>
                {
                    this.props.ds.map((sv, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => this.XL_Nhan(sv)}>
                                    <Text key={index} style={{ marginLeft: 10, color: "green","width":"80%" }}>
                                        {index + 1}/. {sv.Hoten} - {sv.Lop}
                                    </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

}