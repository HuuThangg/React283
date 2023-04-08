import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import Du_lieu from '../data/Du_lieu'

export default class welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            matKhau: '',
            thongBao: ''
        }
    }
    XL_Nhan() {
        if (this.state.email == Du_lieu.Nguoi_dung.Ten_Dang_nhap &&
            this.state.matKhau == Du_lieu.Nguoi_dung.Mat_khau)
            this.setState({"thongBao":"Đăng nhập thành công"})
        else
            this.setState({"thongBao":"Đăng nhập thất bại"})
    }
    render() {
        return (

            <View style={styles.main}>
                <Image style={styles.images}
                    source={require('../images/user.png')} />
                <View>
                    <Text style={styles.title}>Signln</Text>
                    <Text style={styles.titles}>Speak, friend and enter</Text>
                </View>
                <View>
                    <TextInput onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        style={styles.button}
                        placeholder='Email'>
                    </TextInput>
                    <TextInput onChangeText={(matKhau) => this.setState({ matKhau })}
                        value={this.state.matKhau}
                        style={styles.button}
                        placeholder='Password'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}
                    style={styles.button_sgin}>
                    <Text style={styles.button_sgintext}>SGIN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.register}>Register ?</Text>
                </TouchableOpacity>
                <Text style={styles.thongbao}>{this.state.thongBao}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(0,186,209)',
        flex: 1
    },
    images: {
        width: '40%',
        height:'40%',
        justifyContent: 'center',
        alignSelf: 'center',
        //marginTop: 30,
    },
    title: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'rgba(255,255,255,0.9)',
        fontSize: 45,
    },
    titles: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 25
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15,
        padding: 5,
        height: 30,
        width: '80%',
        backgroundColor: '#fff',
    },
    button_sgin: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15,
        //borderWidth:0.3,
        height: 30,
        width: '80%',
        backgroundColor: '#000',
        //borderRadius:2,
        marginTop: 30
    },
    button_sgintext: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'rgba(255,255,255,1)',

    },
    thongbao:{
        textAlign: 'center',
        color:'red',
        marginTop:10
    },
    register:{
        textAlign:'center',
        marginTop:15,
        color:'red',
        
    }

})