import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';
const URL_Server = `https://react-native-test.onrender.com`

export default class TrangChu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hoten: '',
            sdt: ''
        }
    }
    componentDidMount() {
        // lấy thông tin từ AsyncStorage bộ nhớ local
        AsyncStorage.getItem('hoten').then(result => {
            this.setState({ hoten: result })
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={require('../images/user.png')}
                                style={styles.header_img_user} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>{this.state.hoten}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={require('../images/notification.png')}
                            style={styles.header_img_tb} />
                    </TouchableOpacity>
                </View>
                {/* màn hinh slide */}
                <View style={{ flex: 0.3 }}>
                    <Swiper
                        showsButtons={false}
                        activeOpacity={0.5} //thời gian lướt hình
                        autoplay={true} // tự động lướt hình
                        autoplayTimeout={3}>
                        <View style={styles.slide}>
                            <Text>HÌNH 1</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text>HÌNH 2</Text>
                        </View>
                        <View style={styles.slide}>
                            <Text>HÌNH 3</Text>
                        </View>
                    </Swiper>
                </View>
                <View>
                    <View style={styles.content}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate("HoSoBenhAn")}>
                            <Image source={require('../images/TIVI_22.png')}
                                style={styles.img_button} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate("XemToaThuoc")}>
                            <Image source={require('../images/TIVI_1.png')}
                                style={styles.img_button} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate("XemXetNghiem")}>
                            <Image source={require('../images/TIVI_17.png')}
                                style={styles.img_button} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate("XemCDHA")}>
                            <Image source={require('../images/TIVI_17.png')}
                                style={{
                                    width: '100%',
                                    height: 110,
                                }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#4F98ED'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    header_img_user: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 1,
        tintColor: '#FFFFFF'
    },
    header_text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 10
    },
    header_img_tb: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        tintColor: '#FFFFFF',
        marginRight: 15
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    img_button: {
        width: 125,
        height: 110,
    }
})