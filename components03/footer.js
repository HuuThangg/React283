import React, { Component } from "react";
import { View, Text ,StyleSheet} from "react-native";
import PropTypes from 'prop-types'
// Child class component
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.tieu_de_footer}>{this.props.tieu_de}</Text>
            </View>
        )
    }
}

Footer.propTypes = {
    tieu_de: PropTypes.string
}
Footer.defaultProps = {
    tieu_de: '137 Nguyễn Chí Thanh P9 Quận 5 Tp HCM'
}

const styles = StyleSheet.create({
    tieu_de_footer: {
        alignItems: 'center',
        fontSize:14,
        textAlign:"center"
        
    }

});
