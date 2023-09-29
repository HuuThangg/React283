import React, { Component } from 'react';
import { Image, Text, View, Button } from 'react-native';

const backgroundColor = "#0067a7";


export default class Chinh extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: 22, color: "#ffffff" }}>
                    Màn hình Chính 
                </Text>
                <Button
                    title="Đi đến Giỏ hàng" 
                    onPress={() => this.props.navigation.navigate('Gio_hang',{"key":"123"})}
                />
            </View>
        );
    }
}