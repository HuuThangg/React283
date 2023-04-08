import react from "react";
import { View, Text, TextInput,TouchableOpacity,Image,StyleSheet } from 'react-native'

export default class Search extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            gtTim: ''
        }
    }
    Tim(){
        let gtTim = this.state.gtTim;
        // Gọi phương thức của Cha
        this.props.parent.Tim(gtTim)
    }
    render() {
        return (
            <View>
                {/* thanh tìm kiếm */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder={this.props.placeholder}
                        placeholderTextColor="#ffffff"
                        onChangeText={(gtTim) => this.setState({ gtTim })}
                        value={this.state.gtTim}
                        onSubmitEditing={() => this.Tim()}
                        style={styles.inputs}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.Tim()}>
                        <Image source={require("../images/search.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: '#b9b7b7',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 40,
        marginRight: 5,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#ffffff',
        fontSize: 16
    },
    inputIcon: {
        width: 26,
        height: 26,
        tintColor: '#ffffff',
        marginRight: 5,
        justifyContent: 'center'
    }
})