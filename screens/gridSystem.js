import React from "react";
import {View,Text,TextInput,Image,ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import Du_lieu from "../data/Du_lieu";

export default class girdSystem extends React.Component{
    render(){
        return(
            
                
            <View style={styles.container}>
                <View style={{backgroundColor:'#0082c8',height:25}}>
                <Text style={styles.title}>Danh sách Ti Vi</Text>
                </View>
                <ScrollView>
                {
                    Du_lieu.Danh_sach_Tivi.map((x,index)=>{
                        return (
                            <View style={styles.row} key={index + 1}>
                                <View style={styles.col_3}>
                                    <Image source={{ uri: x.Hinh }} style={styles.img} />
                                </View>
                                <View style={styles.col_7}>
                                    <Text style={{ color: 'black' }}>{x.Ten}</Text>
                                    <Text style={{ color: 'black' }}>Đơn giá: {x.Don_gia.toLocaleString()} VNĐ</Text>
                                </View>
                            </View>
                        )
                    })
                }

                <View style={{flex:1,paddingHorizontal:8}}>
                    <View style={{flexDirection:'row',flexWrap:'wrap',gap:5,backgroundColor:'white'}}>
                        {
                            Du_lieu.Danh_sach_Tivi.map((x,index)=>{
                                return(
                                    <TouchableOpacity style={{width:'48%',alignItems:'center'}}>
                                    <View >
                                        <Image style={{height:60,width:100}} source={{uri:x.Hinh}}/>
                                    </View>
                                    <View>
                                    <Text style={{color:'black',fontSize:12}}>{x.Ten}</Text>
                                        <Text style={{color:'black',fontSize:12}}>Đơn giá: {x.Don_gia.toLocaleString()} VNĐ</Text>
                                    </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0082c8'
    },
    title:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    row:{
        flexDirection:'row',
        paddingHorizontal:8,
        marginVertical:2
    },
    col_3: {
        flexDirection: 'column',
        width: '35%',
        padding: 5,
        backgroundColor: 'white'
    },
    col_7: {
        flexDirection: 'column',
        width: '65%',
        padding: 5,
        backgroundColor: 'white'
    },
    img: {
        height: 80,
        width: '100%'
    }
})