import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Du_lieu from "../data/Du_lieu";
export default class gioHang extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
    }
    Tang() {
        this.setState({
            num: this.state.num + 1
        })
    }
    Giam() {
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.row}>
                    <Image source={require('../images/back.png')} style={styles.img} />
                    <Text style={styles.title}>Giỏ hàng</Text>
                </View>
                <View style={{ backgroundColor: '#DFDFDF', flex: 1 }}>
                    <FlatList
                        data={Du_lieu.Gio_hang}
                        keyExtractor={item => item.Ma_so}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.row_item}>
                                    <View style={[styles.col, { width: '30%' }]}>
                                        <Image source={{ uri: item.Hinh }} style={styles.img_item} />
                                    </View>
                                    <View style={[styles.col, { width: '60%' }]}>
                                        <Text style={{ fontSize: 20 }}>{item.Ten}</Text>
                                        <Text style={{ fontSize: 17, color: 'red' }}>Đơn giá: {item.Don_gia.toLocaleString()} VNĐ</Text>
                                        
                                        <View>
                                        <View style={{ flexDirection: "row" }}>
                                            <TouchableOpacity onPress={() => this.Tang()}>
                                                <Text style={{ padding: 10 }}>+</Text>
                                            </TouchableOpacity>
                                            <Text style={{ padding: 10 }}>{this.state.num}</Text>
                                            <TouchableOpacity onPress={() => this.Giam()}>
                                                <Text style={{ padding: 10 }}>-</Text>
                                            </TouchableOpacity >
                                        </View>
                                        </View>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <TouchableOpacity>
                                        <Text style={styles.text}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 60
    },
    img: {
        tintColor: '#ffffff',
        alignSelf: 'center'
    },
    title: {
        marginLeft: '25%',
        alignSelf: 'center',
        fontSize: 25,
        color: '#ffffff'
    },
    row_item: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        marginTop: 20,
        height: 130
    },
    img_item: {
        height: 70,
        width: '100%'
    },
    col: {
        marginTop: 15,
        marginVertical: 5,
        paddingHorizontal: 10
    },
    text: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 15
    }
})