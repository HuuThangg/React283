import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'
import api from '../../api.services';

const URL_Server = `http://mqsoft.ddns.net:9999`
export default class HoSoBenhAn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ViewHoSoBenhAn: []
        }
    }
    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/GetListEncounter?patientCode=22021073&yearTreatment=2023`)
            .then(result => {
                this.setState({
                    ViewHoSoBenhAn: result
                })

            })
    }
    render() {
        return (
            <SafeAreaView>
                {/* <View style={styles.header}>
                    <Text style={styles.title}>THÔNG TIN HỒ SƠ BỆNH ÁN</Text>
                </View> */}
                <View>
                    <FlatList data={this.state.ViewHoSoBenhAn}
                        keyExtractor={item => item.encounterCode}
                        renderItem={({ item, index }) => {
                            return (
                                <FastListItem item={item} index={index} navigation={this.props.navigation}></FastListItem>
                            )
                        }} />
                </View>
            </SafeAreaView>
        )
    }
}

export class FastListItem extends React.Component {
    XL_Chon() {
        this.props.navigation.navigate("ChiTietHSBA", { "ChiTietHSBA": this.props.item })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.container]}>
                    <View style={styles.title_detail}>
                        <Text style={[styles.text,
                        { color: '#FFFFFF', fontWeight: 'bold' }]}>
                            Ngày:{this.props.item.createDate}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <Image source={require('./Images/doctor.png')}
                            style={{ width: 20, height: 19 }} />
                        <Text style={styles.text}>Bác sĩ: {this.props.item.doctorName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('./Images/bed.png')}
                            style={{ width: 20, height: 19 }} />
                        <Text style={styles.text}>Khoa phòng: {this.props.item.roomName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('./Images/stethoscope.png')}
                            style={{ width: 20, height: 19 }} />
                        <Text style={styles.text}>Mã ICD: {this.props.item.icdCode}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%' }}>
                        <Image source={require('./Images/stethoscope.png')}
                            style={{ width: 20, height: 19 }} />
                        <Text style={styles.text}>Chẩn đoán: {this.props.item.icdName}</Text>
                    </View>
                    <View style={styles.btn_tyle}>
                        <TouchableOpacity activeOpacity={0.5}
                            onPress={this.XL_Chon.bind(this)}
                            style={styles.button}>
                            <Text style={{ fontSize: 15, color: '#FFFFFF' }}>TT điều trị</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity activeOpacity={0.5}
                            onPress={this.XL_Chon_Ketqua.bind(this)}
                            style={styles.button}>
                            <Text style={{ fontSize: 15, color: '#FFFFFF' }}>Kết quả</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4387fd',
        height: 50
    },
    title: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    container: {
        //marginBottom: 5,
        marginTop: 10,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderRadius: 3,
    },
    title_detail: {
        backgroundColor: '#4387fd',
        height: 25,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        marginHorizontal: 5
    },
    btn_tyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#4387fd',
        marginHorizontal: 10,
        marginBottom: 10
    }
})