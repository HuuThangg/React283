import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native'

class register extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email:'',
            matkhau:'',
            confimmatkhau:''
        }
    }
    KiemTra(){
        
        if(this.state.email == '' && this.state.matkhau== '')
        Alert.alert("vui lòng nhập thông tin đăng ký")
        else 
        if(this.state.matkhau != this.state.confimmatkhau)
        Alert.alert("mật khẩu không khớp")
        else 
        if(this.state.email!='' && this.state.matkhau !='')
        this.props.navigation.navigate('HomeScreen')
        else
        Alert.alert("đăng ký thất bại")
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View>
                    <Image style={styles.images}
                        source={require('../images/user.png')} />
                </View>
                <View>
                    <View style={[{ flexDirection: 'row' }, styles.textinput]}>
                        <Image style={{ width: 30, height: 30, marginTop: 5 }}
                            source={require('../images/mail.png')} />
                        <TextInput
                            //style={styles.textinput}
                            placeholder="Email"
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email} />
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.textinput]}>
                    <Image style={{ width: 30, height: 30, marginTop: 5 }}
                            source={require('../images/lock.png')} />
                        <TextInput
                            //style={styles.textinput}
                            placeholder="Password"
                            onChangeText={(matkhau) => this.setState({ matkhau })}
                            value={this.state.matkhau} 
                            secureTextEntry/>
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.textinput]}>
                    <Image style={{ width: 30, height: 30, marginTop: 5 }}
                            source={require('../images/lock.png')} />
                        <TextInput
                            //style={styles.textinput}
                            placeholder="Confirm Password" 
                            onChangeText={(confimmatkhau) => this.setState({ confimmatkhau })}
                            value={this.state.confimmatkhau}
                            secureTextEntry/>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={this.KiemTra.bind(this)} style={styles.button}>
                        <Text style={{ alignSelf: "center", color: '#fff' }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default register;

const styles = StyleSheet.create({
    images: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,

    },
    textinput: {
        borderWidth: 0.5,
        borderColor:'green',
        width: "80%",
        height: 40,
        //justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        paddingStart: 10,
    },
    button: {
        borderWidth: 0.5,
        width: "80%",
        height: 40,
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: 'green'

    }
})