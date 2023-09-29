import React, {Component} from 'react';
import {View,Image, TouchableOpacity,Text, TextInput,StyleSheet, } from 'react-native';
export default class Thong_tin_Tivi extends Component{  
    
    constructor(props){
        super(props);
        const { Tivi } = this.props.route.params
        this.state={
            Ma_so:Tivi.Ma_so,
            Ten:Tivi.Ten,
            Hinh:Tivi.Hinh,            
            Don_gia_Ban:Tivi.Don_gia_Ban
        }
    }

    XL_Nhan(){
        alert("Mã số: " + this.state.Ma_so);
        //this.props.navigation.navigate("gioHang")
    }

    render(){
        const { navigate } = this.props.navigation;                     
        return(                 
            <View style={style.container}>
                <View style={{alignItems:"center",marginTop:20}}>
                    <Image style={style.image} source={{uri:this.state.Hinh}}></Image>  
                </View> 
                <View style={{flex:1, justifyContent:"flex-start"}}>
                    <TextInput onChangeText={(Ma_so)=>this.setState({Ma_so})} value={this.state.Ma_so} placeholder='Mã số'  style={style.input}/>
                    <TextInput onChangeText={(Ten)=>this.setState({Ten})} value={this.state.Ten} placeholder='Tên'  style={style.input}/>
                    <TextInput onChangeText={(Don_gia_Ban)=>this.setState({Don_gia_Ban})} value={this.state.Don_gia_Ban.toLocaleString()} placeholder='Đơn giá'  style={style.input} />                  
                    <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                        <View style={style.button}>
                            <Text style={style.text}>Đồng ý</Text>
                        </View>
                    </TouchableOpacity>   
                </View>          
            </View>          
        );        
    }
}

const style= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#e5f6ff',
      justifyContent:'center'
    },
    input:{
      paddingHorizontal:10,
      backgroundColor:'#ffffff',
      margin:5,
      borderRadius:5
    },
    button:{
      height:46,
      borderRadius:5,
      margin:5,
      backgroundColor:'#4387fd',
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'#ffffff',
      fontSize:16,
    },
    image:{
        height:160,
        width:240,
        marginBottom:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    }
  })