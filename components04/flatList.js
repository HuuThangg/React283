import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Du_lieu from "../data/Du_lieu";
import Search from "./search";

export default class flatList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            dstv:Du_lieu.Danh_sach_Tivi,
            gtTim:''
        }
    }
    Tim(value=""){
        //let gt=this.state.gtTim
        let gt=value
        let ds= Du_lieu.Danh_sach_Tivi.filter(x=>x.Ten.toLowerCase().includes(gt.toLowerCase()))
        this.setState({
            dstv:ds
        })
    }
    render() {
        return (
            <View style={styles.container}>
               <Search placeholder="Nhập giá trị tìm" parent={this}/>
                <View style={styles.title}>
                    <Text style={{ fontWeight: 'bold',fontSize:25 }}>Danh sách Ti Vi</Text>
                </View>
                {/* load danh sách tivi */}
                <FlatList
                    data={this.state.dstv}
                    keyExtractor={(item => item.Ma_so)}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.row}>
                                <View style={[styles.col, { width: '35%' }]}>
                                    <Image source={{ uri: item.Hinh }} style={styles.img} />
                                </View>
                                <View style={[styles.col, { width: '65%' }]}>
                                    <Text style={styles.text}>{item.Ten}</Text>
                                    <Text style={[styles.text, { color: 'red' }]}>Đơn giá: {item.Don_gia.toLocaleString()} VNĐ</Text>
                                </View>
                            </View>
                        )
                    }}
                    showsVerticalScrollIndicator={false} //bỏ thanh trượt
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        alignItems: 'center',
        marginTop: 5
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    col: {
        flexDirection: "column",
        paddingVertical: 5,
        borderBottomColor: "#008000",
        borderBottomWidth: 1,
    },
    img: {
        height: 100,
        width: '100%'
    },
    // col_6:{
    //     flexDirection:'column',
    //     width:'60%',
    //     marginLeft:10
    // },
    text: {
        fontSize: 18,
        marginLeft: 10
    }
})