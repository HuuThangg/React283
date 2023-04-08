import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";
import Header from "./header";
import Footer from "./footer";
import Content from "./contents";


export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: 'Nguyễn Anh Tèo',
            aaa:''

        }
    }
    handleChangeInput = (text) => {
        this.setState({ input: text })
    }

    render() {
        return (
            <View style={style.container}>
                <Header message={'Trung Tâm Tin Học'} message1={'Bài 3 - Chức năng Xem Thông tin'} />
                <Content noi_dung={'Minh họa State'} />
                <View>
                    <TextInput style={style.input}
                        //onChangeText={this.handleChangeInput}
                        //onChangeText={(input)=> this.setState({input})}
                        onChangeText={(value)=>{this.setState({input:value})}}
                        placeholder='Nhập Họ tên của bạn'
                        value={this.state.input}
                    />
                     <TextInput style={style.input}
                        onChangeText={(aaa)=> this.setState({aaa})}
                        placeholder='Nhập Họ tên của bạn'
                        value={this.state.aaa}
                    />


                    <Text style={style.text}>{this.state.input}</Text>
                    <Text style={style.text}>{this.state.aaa}</Text>

                </View>
                <Footer tieu_de={'137E Nguyễn Chí Thanh P9 Quận 5 '} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5f6ff',
        justifyContent: 'center'
    },
    input: {
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 5
    },
    text: {
        color: 'blue',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "bold"
    }
})
