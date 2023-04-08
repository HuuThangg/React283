import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text,Alert} from 'react-native';
import {tBao} from './libs';

const thongBao=(title,msg)=>{
    Alert.alert(title,msg)
}

export default class componentEvent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Phương thức khởi tạo");
    }

    XL_Nhan() {
        console.log("Phương thức tự định nghĩa");
    }

    UNSAFE_componentWillMount() {
        console.log("Phương thức componentWillMount");
    }
    render() {
        console.log('render');
        return (
            
            <View style={styles.middle}>
                <TouchableOpacity onPress={()=> this.XL_Nhan()}>
                {/* <TouchableOpacity onPress={this.XL_Nhan.bind(this)}> */}
                    <Text>Gọi Phương thức nhấn</Text>
                </TouchableOpacity>
               
                <View style={[styles.box, styles.big_green_box]}>
                    <View style={[styles.inner_box, styles.orange_box]}></View>
                </View>
                <TouchableOpacity onPress={()=> thongBao('Thông báo','Chiều nay Lớp mình Họp khẩn')}>
                    <Text>Gọi Hàm thongBao</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> tBao('Thông báo','Chiều nay Lớp mình Họp khẩn')}>
                    <Text>Gọi Hàm tBao từ thư viện</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    componentDidMount() {
        console.log(" * Phương thức componentDidMount");
    }
    componentWillUnmount() {
        console.log("Phương thức componentWillUnmount");
    }
}


const styles = StyleSheet.create({
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#333'
    },
    big_green_box: {
        backgroundColor: 'green'
    },
    inner_box: {
        width: 20,
        height: 20,
    },
    orange_box: {
        position: 'absolute',
        backgroundColor: 'orange',
        bottom: 5,
        right: 10
    }
})