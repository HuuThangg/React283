import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Du_lieu from '../data/Du_lieu';

import Search from "./search";
export default class DsTivi extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            dsTivi:Du_lieu.Danh_sach_Tivi,
            gtTim:''
        }
    
    }

    Tim(value=""){
        //let gt=this.state.gtTim;
        let gt=value
        let ds=Du_lieu.Danh_sach_Tivi.filter(x=>x.Ten.toLowerCase().includes(gt.toLowerCase()));
        this.setState({
            dsTivi: ds
        })
    }

    

    render() {
        return (
            <View style={style.container}>
                {/* <View style={[style.containerRow,{ backgroundColor: "teal" }]}>
                    <View style={[style.contentColumn, { width: '90%', borderBottomWidth: 0 }]}>
                        <TextInput
                            placeholder="Nhập giá trị tìm"
                            onChangeText={(gtTim) => this.setState({ gtTim })}
                            value={this.state.gtTim}
                            onSubmitEditing={() => this.Tim()}
                            placeholderTextColor="#ffffff"
                        />
                    </View>
                    <View style={[style.contentColumn, { width: '10%', borderBottomWidth: 0,paddingTop:15 }]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=> this.Tim()}>
                            <Image source={require("../images/search.png")} />
                        </TouchableOpacity>
                    </View>
                </View> */}
                <Search placeholder='Nhập Giá trị tìm' parent={this} />
                <FlatList
                    data={this.state.dsTivi}
                    keyExtractor={(item) => item.Ma_so}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} />
                        )

                    }}
                />

                


            </View>
        )
    }

}

class FlatListItem extends React.Component {
    render() {
        return (
            <View style={style.containerRow}>
                <View style={[style.contentColumn, { width: '40%' }]}>
                    <Image source={{ uri: this.props.item.Hinh }} style={style.img} />
                </View>
                <View style={[style.contentColumn, { width: '60%' }]}>
                    <Text style={style.textSize}> {this.props.item.Ten}</Text>
                    <Text style={[style.textSize, { color: "red" }]}>Giá: {this.props.item.Don_gia.toLocaleString()}đ</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerRow: {
        flexDirection: "row",
        paddingHorizontal:10,
        marginVertical: 10,


    },
    contentColumn: {
        flexDirection: "column",
        paddingVertical:5,
        borderBottomColor: "#008000",
        borderBottomWidth: 1,
    },

    img: {
        width: '100%',
        height: 60,
        resizeMode: 'contain',
    },
    textSize: {
        fontSize: 12,
        paddingTop: 5,
        paddingLeft: 10
    }
})