import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Du_lieu from '../../data/Du_lieu';

class FlatListItem extends Component {
    XL_Chon() {
        this.props.navigation.navigate("Tivi", { "Tivi": this.props.item })
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <TouchableOpacity onPress={this.XL_Chon.bind(this)} activeOpacity={0.5}>
                    <View style={{ flex: 1, flexDirection: "row", backgroundColor: this.props.index % 2 == 0 ? "#e5f6ff" : "#e5f6ff" }}>
                        <Image style={{ height: 80, width: 120, margin: 5 }} source={{ uri: this.props.item.Hinh }}></Image>
                        <View style={{ flex: 1, flexDirection: "column", height: 30 }}>
                            <Text style={styles.itemText}>{this.props.item.Ten}</Text>
                            <Text style={styles.itemText}>Đơn giá: {this.props.item.Don_gia.toLocaleString()} VND</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class Danh_sach_Tivi extends Component {
    render() {
        return (
            <View style={{ marginTop: 2 }}>
                <FlatList
                    data={Du_lieu.Danh_sach_Tivi}
                    keyExtractor={(item) => item.Ma_so}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} navigation={this.props.navigation}></FlatListItem>
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
    }
})


