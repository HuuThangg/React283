import React from 'react';
import { View, Text, FlatList, TouchableOpacity,TextInput,ScrollView, } from "react-native";
import api from '../api.services'
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdownItem from './selectDropdownItem';

const URL_server = `http://mqsoft.ddns.net:6767`
let DSkhoaphong = []
let DSbenhan= []

export default class benhAn extends React.Component {
    constructor(props) {
        super(props)
        const {benhAn} = this.props.route.params
        this.state = {
            dskhoaphong: [],
            dsbenhan:[],
            makp:'',
            tenkp:"",
            mabenhan:"",
            tenbenhan:"",
            makptheouser:benhAn.makp
        }

    }
    componentDidMount() {
        api.get(`${URL_server}/EmrKhoaphong`).then(result => {
           // DSkhoaphong = result
            this.setState({
                dskhoaphong: result
                
            })
        }).catch(err => {
            console.log(err)
        })

        api.get(`${URL_server}/EmrDanhmucbenhan`).then(result => {
            DSbenhan = result
            this.setState({
                dsbenhan: result
            })
        }).catch(err => {
            console.log(err)
        })
    }
    truycap() {
        this.props.navigation.navigate("hienDien", {"hienDien": this.state})
        console.log(this.state.makp)
    }

    render() {
        return (
            // <FlatList data={this.state.dsbenhan}
            // keyExtractor={(item)=>item.mabenhan}
            // renderItem={({item,index})=>{
            //     return(
            //         <View>
            //             <Text>{item.tenbenhan}</Text>
            //         </View>  
            //     )
            // }}/>
            
            <View style={{ flex: 1,backgroundColor:'#DFDFDF' }} >
                <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:30,fontWeight:'bold',marginTop:10}}>Chọn mẫu bệnh án</Text>
                    <Text>Vui lòng chọn mẫu bệnh án và bác sĩ để sử dụng hệ thống</Text>
                </View>
                <View style={{marginHorizontal:30,alignItems:'flex-start',marginTop:20}} >
                    <Text style={{fontSize:20,margin:5,fontWeight:'bold'}}>phòng Ban</Text>
                    <SelectDropdown navigation={this.props.navigation}
                        data={this.state.dskhoaphong}
                        key={item=>item.makp}
                        onSelect={(item,index)=>{
                            this.state.tenkp=item.tenkp
                            this.state.makp=item.makp
                        }}
                        buttonTextAfterSelection={(item,index)=>{
                            return item.tenkp
                        }}
                        dropdownStyle={{ width: '85%' }}
                        buttonStyle={{ width: '100%',backgroundColor:'white' }}
                        defaultButtonText={"chon tên khoa phòng"}
                        rowTextForSelection={(item, index) => {
                            return item.tenkp
                            //console.log(item.makp,this.state.makp1)
                        }}
                    />
                   
                </View>
                <View style={{marginHorizontal:30,alignItems:'flex-start',marginTop:20}}>
                    <Text style={{fontSize:20,margin:5,fontWeight:'bold'}}>Mẫu bệnh án</Text>
                    <SelectDropdown
                        data={this.state.dsbenhan}
                        key={item=>item.mabenhan}
                        onSelect={(item,index)=>{
                            this.state.mabenhan=item.mabenhan
                            this.state.tenbenhan=item.tenbenhan
                        }}
                        buttonTextAfterSelection={(item,index)=>{
                            return(
                                <Text>{item.tenbenhan}</Text>
                            )
                        }}
                        dropdownStyle={{ width: '85%' }}
                        buttonStyle={{ width: '100%',backgroundColor:'white' }}
                        defaultButtonText={"chon Mẫu bệnh án"}
                        rowTextForSelection={(item, index) => {
                            return (
                                <Text>{item.tenbenhan}</Text>
                            )}}
                    />
                </View>
                <TouchableOpacity onPress={this.truycap.bind(this)}
                style={{backgroundColor:'#4387fd',
                marginTop:50,marginHorizontal:30,
                height:45,alignItems:'center',
                justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>truy cập</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
