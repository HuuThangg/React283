import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
const URL_server=`http://mqsoft.ddns.net:6767`
import api from '../api.services'
import duLieu from "../data/duLieu";


export default class welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userid: 'tannv',
            matKhau: '2468:<00()*+,-./0123456789:;<=>FFFFF',
            thongBao: '',
            makp:''
        }
    }
    KiemTraDangNhap(){
        
        fetch(`${URL_server}/EmrUseridLogin/GetEmrUseridLogin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userid: 'tannv',
                password: '2468:<00()*+,-./0123456789:;<=>FFFFF'
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
           // debugger
           this.state.makp =responseData.makp
            if (responseData.userid != this.state.userid) {
                this.setState({"thongBao":"Đăng nhập thất bại"}) 
            }else{
                //this.setState({"thongBao":"Đăng nhập thành công"})
                //this.props.navigation.navigate('benhAn')
                this.props.navigation.navigate("benhAn", {"benhAn": this.state})
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    
    // componentDidMount(){
    //     api.get(`${URL_server}/EmrUseridLogin/hash-password?password=${this.state.matKhau}`)
    //     .then(data => {
    //         console.log(data)
    //       })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }
 
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
                    <TextInput onChangeText={(userid) => this.setState({ userid })}
                        value={this.state.userid}
                        style={styles.button}
                        placeholder='User'>
                    </TextInput>
                    <TextInput onChangeText={(matKhau) => this.setState({ matKhau })}
                        value={this.state.matKhau}
                        style={styles.button}
                        placeholder='Password'
                        secureTextEntry >
                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.KiemTraDangNhap.bind(this)} activeOpacity={0.5}
                    style={styles.button_sgin}>
                    <Text style={styles.button_sgintext}>SGIN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity >
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