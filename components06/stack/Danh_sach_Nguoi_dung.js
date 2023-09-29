import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Du_lieu from '../../data/Du_lieu';
class FlatListItem extends Component {

    XL_Chon() {
        this.props.navigation.navigate("nguoiDung", { "Nguoi_dung": this.props.item})
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#ffffff' }}>
                <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Image
                        style={{ height: 30, width: 30, margin: 10, borderRadius: 20, borderWidth: 0.5 }}
                        source={require('../../images/avatar-40.png')}>
                    </Image>
                    <View style={{ flex: 1, justifyContent: 'center', height: 50 }}>
                        <Text style={styles.itemText}>{this.props.item.Ho_ten}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', height: 50 }}>
                        
                            <Image
                                style={{ height: 20, width: 20, margin: 5, tintColor: '#A7A7A7' }}
                                source={require('../../images/greater-than-50.png')}>
                            </Image>
                    </View>
                </View>
                </TouchableOpacity>
                <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
            </View>
        );
    }
}

export default class Danh_sach_Nguoi_dung extends Component {
    render() {
        return (
            <View >
                <FlatList
                    data={Du_lieu.Danh_sach_Nguoi_dung}
                    keyExtractor={(item) => item.Ma_so}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem ds={this} item={item} index={index} navigation={this.props.navigation}>
                            </FlatListItem>
                        );
                    }}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemText: {
        color: "#000000",
        padding: 5,
        fontSize: 14
    },
    inputContainer: {
        borderColor: '#b9b7b7',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginRight: 5,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center'
    },
    inputIcon: {
        width: 26,
        height: 26,
        tintColor: '#ffffff',
        marginLeft: 5,
        justifyContent: 'center'
    },
})

