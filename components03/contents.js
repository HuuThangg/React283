import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'
// Child class component
export default class content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <View>
                <Text style={[styles.content]}>{this.props.noi_dung}</Text>
                <Text style={[styles.content]}>{(this.props.nhanvien == null) ? "" : this.props.nhanvien.hoten}</Text>
                <Text style={[styles.content]}>{this.props.list.length}</Text>
            </View>
        )
    }
}

content.propTypes = {
    noi_dung: PropTypes.string,
    nhanvien: PropTypes.object,
    list: PropTypes.array
}
content.defaultProps = {
    noi_dung: 'Content One',
    list: [],
    nhanvien: null
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        fontSize: 24,
        color: 'green',
        textAlign: "center"
    }

});
