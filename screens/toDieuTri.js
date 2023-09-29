import React from 'react';
import { View, Text, FlatList, TextInput, ScrollView, TouchableOpacity,Date } from "react-native";
import api from '../api.services'
import SelectDropdown from 'react-native-select-dropdown';
import SelectDropdownItem, { InputItem } from './selectDropdownItem';
const URL_server = `http://mqsoft.ddns.net:6767`

export default class toDieuTri extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dsicd: [],
            dschedochamsoc: [],
            dschedoan: [],
            dsloaithucan: [],
            dsnhomtuoi: [],
            dsdienbienmau: [],
            ghichucd: '',
            ghichu: '',
            dienbien: '',
        }
    }


    componentDidMount() {
        api.get(`${URL_server}/EmrICD`).then(result => {
            this.setState({
                dsicd: result
            })
        }).catch(err => {
            console.log(err)
        })

        api.get(`${URL_server}/EmrChedochamsoc`).then(result => {
            this.setState({
                dschedochamsoc: result
            })
        }).catch(err => {
            console.log(err)
        })

        api.get(`${URL_server}/EmrChedoan`).then(result => {
            this.setState({
                dschedoan: result
            })
        }).catch(err => {
            console.log(err)
        })

        api.get(`${URL_server}/EmrLoaithucan`).then(result => {
            this.setState({
                dsloaithucan: result
            })
        }).catch(err => {
            console.log(err)
        })

        api.get(`${URL_server}/EmrNhomtuoi`).then(result => {
            this.setState({
                dsnhomtuoi: result
            })
        }).catch(err => {
            console.log(err)
        })

        api.get(`${URL_server}/EmrDienbienmau`).then(result => {
            this.setState({
                dsdienbienmau: result
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (

            <View style={{ flex: 1, marginHorizontal: 10 }}>
                <View >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', marginTop: 5 }}>TỜ ĐIỀU TRỊ</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: 20, width: '40%' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Thời gian</Text>
                                <TextInput style={{ backgroundColor: 'white', width: '100%', fontSize: 20, borderRadius: 10 }}
                                    placeholder='thời gian'
                                    value={this.state.thoigian} />
                            </View>
                            <View style={{ marginTop: 20, width: '58%' }}>
                                <SelectDropdownItem title={"Chẩn đoán"}
                                    data={this.state.dsicd}
                                    text={"chọn ICD"} />
                            </View>
                        </View>
                        <View style={{ marginTop: 5, width: '100%' }}>
                            <SelectDropdownItem title={"Chẩn đoán kèm theo"}
                                data={this.state.dsicd}
                                text={"chọn ICD kèm theo"} />
                        </View>

                        <InputItem title={"Ghi chú chẩn đoán"}
                            onChangeText={(ghichucd) => { this.setState({ ghichucd }) }}
                            value={this.state.ghichucd}
                        />
                        <View style={{ marginTop: 5, width: '100%' }}>
                            <SelectDropdownItem title={"Chế độ chăm sóc"}
                                data={this.state.dschedochamsoc}
                                text={"chọn chế độ chăm sóc"} />
                        </View>
                        <View style={{ marginTop: 5, width: '100%' }}>
                            <SelectDropdownItem title={"Chế độ ăn"}
                                data={this.state.dschedoan}
                                text={"chọn chế độ ăn"} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: 5, width: '49%' }}>
                                <SelectDropdownItem title={"Loại thức ăn"}
                                    data={this.state.dsloaithucan}
                                    text={"chọn loại thức ăn"} />
                            </View>
                            <View style={{ marginTop: 5, width: '49%' }}>
                                <SelectDropdownItem title={"Nhóm tuổi"}
                                    data={this.state.dsnhomtuoi}
                                    text={"chọn nhóm tuổi"} />
                            </View>
                        </View>
                        <View style={{ marginTop: 5, width: '100%' }}>
                            <SelectDropdownItem title={"Diễn biến mẫu"}
                                data={this.state.dsdienbienmau}
                                text={"chọn diễn biến mẫu"} />
                        </View>
                        <InputItem title={"Diễn biến"}
                            onChangeText={(dienbien) => { this.setState({ dienbien }) }}
                            value={this.state.dienbien} />
                        <InputItem title={"Ghi chú"}
                            onChangeText={(ghichu) => { this.setState({ ghichu }) }}
                            value={this.state.ghichu} />
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#4387fd',
                                marginTop: 50, marginBottom: 20,
                                height: 50, alignItems: 'center',
                                justifyContent: 'center', borderRadius: 5, width: '100%'
                            }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>truy cập</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}