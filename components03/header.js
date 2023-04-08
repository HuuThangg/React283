import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
// Child class component
export default class Header extends Component {
    constructor(props) {
        super(props);
    }    
    render() {
        return (
            <View>
                <Text style={style.header}>{this.props.message}</Text>
                <Text style={style.header}>{this.props.message1}</Text>
            </View>
        )
    }
}

Header.propTypes = {
    message: PropTypes.string,
    message1: PropTypes.string
}
Header.defaultProps = {
    message: 'Header One',
    message1: 'Header Tow'
}
const style = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 2,
        color: 'red',
        fontWeight:"bold"

    }
})


