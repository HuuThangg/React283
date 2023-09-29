import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import data from "../data/Du_lieu";
export default class GridColumn extends React.Component {
    constructor(props){
        super(props);
        
    }

    render() {
        //let ds = Du_lieu.Danh_sach_Tivi;
        return (
            
            <View style={styles.product}>
                <Text style={styles.title}>Danh sách sản phẩm</Text>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.row1}>
                            {data.Danh_sach_Tivi.map(item => {
                                return (
                                    <TouchableOpacity style={styles.col_5}>
                                        <View>
                                            <Image source={{ uri: item.Hinh }} style={styles.img} />
                                        </View>
                                        <View style={styles.columnRight}>
                                            <Text style={{ marginBottom: 5, color: "#19376D" }}>{item.Ten.substring(0, 21)+"..."}</Text>
                                            <Text style={{ color: "#19376D" }}>Đơn giá: {item.Don_gia.toLocaleString()} VND</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
            
            
                    <View style={styles.product}>
                <Text style={styles.title}>Danh sách sản phẩm</Text>
                {
                    data.Danh_sach_Tivi.map((x,index) => {
                        return (
                            <View style={styles.row} key={index + 1}>
                               <View style={styles.col_3}>
                                    <Image source={{uri:x.Hinh}} style={styles.img} /> 
                               </View>
                               <View style={styles.col_7}>
                                <Text>{x.Ten}</Text>
                                <Text>Đơn giá: {x.Don_gia.toLocaleString()} VNĐ</Text>
                               </View>
                            </View>
                        )
                    })
                }
            </View >
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    col_3: {
        flexDirection: "column",
        width: '40%',
        //borderWidth: 1,
        //backgroundColor: "chocolate",
        padding: 5,

    },
    col_5: {
        width: "48%",
        alignItems: 'center',
        backgroundColor: "#DAF5FF",
        padding: 10,
    },
    col_7: {
        flexDirection: "column",
        width: '60%',
        //borderWidth: 1,
        //backgroundColor: "red",
        padding: 5
    },
    title: {
        fontSize: 18,
        padding: 10,
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#19376D",
    },
    img: {
        width: 120,
        height: 80,
        marginBottom: 10
    },
    row1: {
        flexDirection: "row",
        gap: 10,
        flexWrap: 'wrap'
    },
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    row: {
        flexDirection: "row",
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "#DAF5FF"

    }
})