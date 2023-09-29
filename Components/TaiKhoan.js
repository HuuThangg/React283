import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'
import api from '../api.services'
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';
const URL_Server = `https://react-native-test.onrender.com`

export default class TaiKhoan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dsNguoiDung: [],
            hoten: '',
            sdt: ''
        }
    }
    componentDidMount() {
        // lấy thông tin từ AsyncStorage bộ nhớ local
        AsyncStorage.getItem('hoten').then(result => {
            this.setState({ hoten: result })
        })
        AsyncStorage.getItem('sdt').then(result => {
            this.setState({ sdt: result })
        })
    }

    XL_Logout() {
        this.props.navigation.navigate("Home")
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.title}>TÀI KHOẢN</Text>
                </View>
                {/* thông tin tài khoản */}
                <TouchableOpacity activeOpacity={0.5}
                    style={styles.button}>
                    <View>
                        <Text style={{ color: '#4387fd', fontSize: 15 }}>{this.state.hoten}</Text>
                        <Text>{this.state.sdt}</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />
                {/* mật khẩu và bảo mật */}
                <TouchableOpacity activeOpacity={0.5}
                    style={styles.button}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../images/security.png')}
                            style={[styles.img_left, { tintColor: '#CE09F5' }]} />
                        <Text style={styles.text}>
                            Mật khẩu và bảo mật</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />
                {/* điều khoản và Quy định */}
                <TouchableOpacity activeOpacity={0.5}
                    style={styles.button}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../images/legal-document.png')}
                            style={styles.img_left} />
                        <Text style={styles.text}>
                            Điều khoản và Quy định</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />
                {/* giới thiệu */}
                <TouchableOpacity activeOpacity={0.5}
                    style={styles.button}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../images/info.png')}
                            style={styles.img_left} />
                        <Text style={styles.text}>
                            Giới thiệu</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />
                {/* câu hỏi thường gặp */}
                <TouchableOpacity activeOpacity={0.5}
                    style={styles.button}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../images/question.png')}
                            style={[styles.img_left, { tintColor: '#00FFC6' }]} />
                        <Text style={styles.text}>
                            Câu hỏi thường gặp</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />
                {/* quy trình đi khám */}
                <TouchableOpacity activeOpacity={0.5}
                    style={styles.button}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../images/compass.png')}
                            style={[styles.img_left, { tintColor: '#D0021B' }]} />
                        <Text style={styles.text}>
                            Quy trình đi khám</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />
                {/* Đăng xuất */}
                <TouchableOpacity activeOpacity={0.5}
                    onPress={this.XL_Logout.bind(this)}
                    style={styles.button}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../images/logout.png')}
                            style={styles.img_left} />
                        <Text style={styles.text}>
                            Đăng xuất</Text>
                    </View>
                    <View>
                        <Image source={require('../images/greater-than-50.png')}
                            style={styles.img_right} />
                    </View>
                </TouchableOpacity>
                <View style={styles.border_bottom} />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4387fd',
        height: 50
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    button: {
        marginHorizontal: 15,
        height: 60,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        color: '#000000',
        marginLeft: 7
    },
    img_left: {
        width: 30,
        height: 30,
    },
    img_right: {
        width: 30,
        height: 25,
        tintColor: '#CCD9D3'
    },
    border_bottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#DEE8E3'
    }
})