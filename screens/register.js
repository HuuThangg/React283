import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class register extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
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
                            placeholder="Email" />
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.textinput]}>
                    <Image style={{ width: 30, height: 30, marginTop: 5 }}
                            source={require('../images/lock.png')} />
                        <TextInput
                            //style={styles.textinput}
                            placeholder="Password" />
                    </View>
                    <View style={[{ flexDirection: 'row' }, styles.textinput]}>
                    <Image style={{ width: 30, height: 30, marginTop: 5 }}
                            source={require('../images/lock.png')} />
                        <TextInput
                            //style={styles.textinput}
                            placeholder="Confirm Password" />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
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