import react from 'react';
import React, { Component } from 'react';
import { Text, TextInput, Dimensions, Platform, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import duLieu from '../data/duLieu'
const URL_SERVICE=`https://services-uc7i.onrender.com`
const { width, height } = Dimensions.get('window');
export default class Them_Nguoi_dung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ma_so: '',
            Ho_ten: ''
        };
    }

    Mo_Hop_thoai() {
        this.setState(
            {
                Ma_so: '',
                Ho_ten: ''
            }
        )
        this.refs.Th_Hop_thoai.open();

    }
    Xu_ly_Them() {
        if (this.state.Ma_so == '' || this.state.Ho_ten == '') {
            alert('Bạn phải nhập đủ thông tin');
            return;
        }


        let Nguoi_dung = {
            Ma_so: this.state.Ma_so,
            Ho_ten: this.state.Ho_ten,
            Ten_Dang_nhap: this.state.Ma_so,
            Mat_khau: this.state.Ma_so
        }
       
        fetch(`${URL_SERVICE}/insertUser`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Ma_so: this.state.Ma_so,
                Ho_ten: this.state.Ho_ten,
                Ten_Dang_nhap: this.state.Ma_so,
                Mat_khau: this.state.Ma_so
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            if (responseData.noi_dung == 1) {
                duLieu.Danh_sach_Nguoi_dung.push(Nguoi_dung);
                this.props.parentFlatList.refresh_Danh_sach_Nguoi_dung(this.state.Ma_so);
                this.refs.Th_Hop_thoai.close();
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <Modal ref={'Th_Hop_thoai'} style={{
                borderRadius: Platform.OS === 'ios' ? 20 : 6,
                shadowRadius: 10,
                width: width - 80,
                height: 240
            }}
                position='center'
                backdrop={true}


            >
                <Text style={{
                    fontSize: 20, textAlign: 'center',
                    marginTop: 25, marginBottom: 20, color: '#4387fd'
                }}>
                    Thông tin người dùng
                </Text>
                <TextInput style={{
                    height: 40, borderBottomColor: '#e6e5e5',
                    fontSize: 14, borderBottomWidth: 1,
                    marginBottom: 10, marginLeft: 20, marginRight: 20
                }}
                    placeholder='Mã số'
                    value={this.state.Ma_so}
                    onChangeText={(value) => { this.setState({ Ma_so: value }) }}
                >
                </TextInput>
                <TextInput style={{
                    height: 40, borderBottomColor: '#e6e5e5',
                    fontSize: 14, borderBottomWidth: 1,
                    marginBottom: 10, marginLeft: 20, marginRight: 20
                }}
                    placeholder='Họ tên'
                    value={this.state.Ho_ten}
                    onChangeText={(value) => { this.setState({ Ho_ten: value }) }}
                >
                </TextInput>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        backgroundColor: '#4387fd',
                        paddingVertical: 10,
                        marginHorizontal: 20,
                        alignItems: 'center',
                        borderRadius: Platform.OS === 'ios' ? 20 : 6
                    }}
                    onPress={() => this.Xu_ly_Them()}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Đồng ý</Text>
                </TouchableOpacity>
            </Modal>
        );
    }
}
