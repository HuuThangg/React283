import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, ScrollView, StyleSheet, Alert } from "react-native";
import api from '../api.services'
import Search from '../screens/search';

const URL_server = `http://mqsoft.ddns.net:6767`
let DShiendien = []
export default class hienDien extends React.Component {
    constructor(props) {
        super(props);
        const {hienDien} = this.props.route.params
        this.state = {
            dshiendien: [],
            makp:hienDien.makp,
            tenkp:hienDien.tenkp
        }
    }
    
    Tim(value=''){
        let gt=value
        let ds = DShiendien.filter(item=>item.mabn.toLowerCase().includes(gt.toLowerCase()))
        this.setState({
            dshiendien:ds,
        })
    }
    componentDidMount() {
        api.get(`${URL_server}/EmrDanhsachiendien?makp=${this.state.makp}&loai=1&NGA&isAsc=true&offset=0&limit=100`).then(result => {
            DShiendien = result
            this.setState({
                dshiendien: result
            })
        }).catch(err => {
            console.log(err)
        })
    }

    
    render() {
       
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Search placeholder="Nhập giá trị tìm" parent={this} />
                </View>
                {/* <View style={{flexDirection:'row'  }}>
                    <Text style={{ width: '20%', color: 'black', fontSize: 15, marginHorizontal:20 }}>Mabn</Text>
                    <Text style={{ width: '30%', color: 'black', fontSize: 15, marginHorizontal:20 }}>Họ tên</Text>
                    <Text style={{ width: '10%', color: 'black', fontSize: 15, marginHorizontal:20 }}>Giới tính</Text>
                    <Text style={{ width: '30%', color: 'black', fontSize: 15, marginRight: 10 }}>Ngày vào viện</Text>
                    <Text style={{ width: '15%', color: 'black', fontSize: 15, marginRight: 10 }}>Giường</Text>
                </View> */}
                <ScrollView horizontal={true}>
                    <View style={{ borderBottomWidth: 0.5 }}></View>
                    <View >
                        <FlatList data={this.state.dshiendien}
                            keyExtractor={(item) => item.maql}
                            renderItem={({ item, index }) => {
                                return (
                                    <View >
                                        <ItemHienDien item={item} index={index}></ItemHienDien>
                                    </View>
                                )
                            }} />
                    </View>
                </ScrollView>
            </View>)
    }
}

export class ItemHienDien extends React.Component {
    render() {
      
        return (
                <View style={{ flexDirection: 'row', alignItems: 'center',borderBottomWidth:0.5,paddingVertical:15 }}>
                    <TouchableOpacity style={{ width: '20%',}}>
                    <Text style={{ color: 'blue', fontSize: 15 }}>{this.props.item.mabn}</Text>
                    </TouchableOpacity>
                    <Text style={{ width: '30%', color: 'black', fontSize: 15,marginHorizontal:20  }}>{(this.props.item.hoten)}</Text>
                    <Text style={{ width: '10%', color: 'black', fontSize: 15,marginHorizontal:20  }}>{(this.props.item.phai)}</Text>
                    <Text style={{ width: '30%', color: 'black', fontSize: 15,marginHorizontal:20  }}>{(this.props.item.ngayvaovien)}</Text>
                    <Text style={{ width: '15%', color: 'black', fontSize: 15,marginHorizontal:20 }}>{(this.props.item.giuong)}</Text>
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        marginVertical: 10
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        backgroundColor: 'white'
    },
    item: {
        width: '49%',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 2,
        height: 150
    },
    img: {
        height: 80,
        width: 90,
        marginTop: 10
    }
})
