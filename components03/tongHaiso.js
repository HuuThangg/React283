import React, { Component } from 'react';
import { View,Text,TextInput,Button } from "react-native";

class TongHaiso extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        a:"",
        b:"",
        tong:""

    }
    tinhTong(){
        let kq= Number(this.state.a) + Number(this.state.b);
        //console.log(kq); 
        this.setState({
            tong: kq
        })
    }
    render() { 
        return ( 
            <View style={{marginHorizontal:20}}>
                <View>
                    <Text style={{textAlign:"center",fontSize:24}}>Tổng Hai số</Text>
                </View>
                <View>
                    <TextInput 
                    placeholder='Nhập số hạng một' 
                    style={{backgroundColor:"white",borderBottomWidth:1, borderBottomColor:"gray" }}
                    onChangeText={(a)=>this.setState({a})} 
                    />
                </View>
                <View>
                    <TextInput 
                    placeholder='Nhập số hạng hai' 
                    style={{backgroundColor:"white",borderBottomWidth:1, borderBottomColor:"gray" }} 
                    onChangeText={(b)=>this.setState({b})}
                    />
                </View>
                <View style={{width:200,marginTop:10,alignSelf:"center"}}>
                    <Button 
                        title='Tính Tổng'
                        onPress={()=>this.tinhTong()}
                    />
                </View>
                <View>
                <TextInput 
                    placeholder='Kết quả' 
                    editable={false} 
                    style={{backgroundColor:"white",borderBottomWidth:1, borderBottomColor:"gray" }}
                    value={this.state.tong.toString()}
                />
                </View>
            </View>
         );
    }
}
 
export default TongHaiso;
<View>
    <View>
        <Text>Tổng Hai số</Text>
    </View>
</View>