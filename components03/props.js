import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./header";
import Content from "./contents"
import Footer from "./footer";

export default class Props extends Component {
    
    constructor(props){
        super(props)
        this.nv={
            "hoten":"Nguyen Anh Tai",
            "phai": true
        }
        this.arr=[1,2,3]
    }
    
    render() {
        
        return (
            
            <View style={styles.container}>
                <Header message={'Trung Tâm Tin Học - ĐHKHTN'} message1={'Bài 3 - Chức năng Xem Thông tin'} />
                <Content noi_dung={'Minh họa Props'} nhanvien={this.nv} list={this.arr} />
                <Footer tieu_de={'21-23 Nguyễn Biểu P14 Quận 5 '}  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent:"space-between",
        flexDirection:"column"
    }
    

});