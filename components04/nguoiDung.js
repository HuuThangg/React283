import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,FlatList} from "react-native";
import Du_lieu from "../data/Du_lieu";
import Search from "./search";
export default class nguoiDung extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dsnguoidung:Du_lieu.Danh_sach_Nguoi_dung,
            gtTim:'',
            
        }
    }
    Tim(value){
           gt= value
           ds=Du_lieu.Danh_sach_Nguoi_dung.filter(x=>x.Ho_ten.toLowerCase().includes(gt.toLowerCase()))
           this.setState({
            dsnguoidung:ds
           })
    }
    render(){
        return(
            <View>
                <View>
                    <Search placeholder='Nhập tên người dùng' parent={this} />
                </View>
               <FlatList
                data={this.state.dsnguoidung}
                keyExtractor={item=>item.Ma_so}
                renderItem={({item,index})=>{
                    return (
                        <View>
                            <View style={styles.row}>
                                <View style={[styles.col,{ width: '15%'}]}>
                                    <Image source={require("../images/avatar-40.png")} style={styles.img_user} />
                                </View>
                                <View style={[styles.col,{ width: '75%'}]}>
                                    <Text style={styles.text}>{item.Ho_ten}</Text>
                                </View>
                                <View style={[styles.col,{ width: '10%'}]}>
                                    <Image source={require("../images/greater-than-50.png")} style={styles.img_tim} />
                                </View>
                            </View>
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        marginTop: 10,
        borderBottomColor: '#DFDFDF'
    },
    col: {
        justifyContent: 'center'
    },
    img_tim: {
        width: 20,
        height: 20,
        margin: 5
    },
    img_user: {
        width: 30,
        width: 30,
        borderRadius: 20,
        margin: 10
    },
    text:{
        fontSize: 20,
        color:'black'
    }
})