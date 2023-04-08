import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Sinhvien from './sinhvien';
import Header from './header';
import Tivi from './tivi'
import Du_lieu from '../data/Du_lieu';
// https://reactnative.dev/img/tiny_logo.png
export default class dsSinhvienProps extends Component{  
    
    constructor(props){
        super(props); 
        this.dssv=[
            {Hoten:"Nguyễn Anh Tú",Lop:"js258"},
            {Hoten:"Nguyễn Thị Ánh Loan",Lop:"js258"},
            {Hoten:"Trần Thị Bé Nhỏ",Lop:"js258"},
            {Hoten:"Lê Thị Gần Rớt",Lop:"js258"}
        ]
        this.dsTivi=Du_lieu.Danh_sach_Tivi
        this.tieuDe={
            msg:"Bài tập Props",
            msg1:"Danh sách Sinh viên"
        }           
    }
    render(){
        return(                 
            <View>
                <Header message={this.tieuDe.msg} message1={this.tieuDe.msg1 + ` (${this.dssv.length})` }  />
                <Sinhvien ds={this.dssv} />
                <View style={{height:2,backgroundColor:"gray",marginBottom:10,marginTop:10}}></View>
                <Header message={''} message1={`Danh sách Tivi (${this.dsTivi.length})` }  />
                <Tivi ds={this.dsTivi} />
            </View>
        );        
    }
    
}