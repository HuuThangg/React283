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
//import { data } from '../../Data/data';

const URL_Server = `http://mqsoft.ddns.net:9999`
export default class ChiTietToaThuoc extends React.Component {
    constructor(props) {
        super(props);
        const { ChiTietToaThuoc } = this.props.route.params
        this.state = {
            DetailToaThuoc: [],
            id: ChiTietToaThuoc.id,
            createDate: ChiTietToaThuoc.createDate
        }
    }
    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/DetaitPrescription?createDate=${this.state.createDate}&id=${this.state.id}`)
            .then(result => {
                //data.ChiTietToaThuoc = result
                this.setState({
                    DetailToaThuoc: result
                })
            })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.header}>
                    <Text style={styles.title}>THÔNG TIN TOA THUỐC</Text>
                </View> */}
                <View style={styles.container}>
                    <View style={{
                        borderRadius: 3,
                        //borderWidth: 0.5,
                        borderColor: 'gray',
                        shadowColor: "gray",
                        shadowOffset: {
                            width: 0,
                            height: 0.1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 0.05,
                        elevation: 2,
                    }}>
                        <Text style={styles.text}>id: {this.state.id}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                            <Image source={require('./Images/doctor.png')}
                                style={{ width: 20, height: 19, marginLeft: 5 }} />
                            <Text style={styles.text}>Bác sĩ: {this.state.DetailToaThuoc.doctorName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                            <Image source={require('./Images/bed.png')}
                                style={{ width: 20, height: 19, marginLeft: 5 }} />
                            <Text style={styles.text}>Khoa phòng: {this.state.DetailToaThuoc.roomName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                            <Image source={require('./Images/pencil.png')}
                                style={{ width: 20, height: 19, marginLeft: 5 }} />
                            <Text style={styles.text}>Mã ICD: {this.state.DetailToaThuoc.icdCode}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                            <Image source={require('./Images/pencil.png')}
                                style={{ width: 20, height: 19, marginLeft: 5 }} />
                            <Text style={styles.text}>Chẩn đoán: {this.state.DetailToaThuoc.icdName}</Text>
                        </View>
                    </View>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={this.state.DetailToaThuoc.detaitMedicines}
                        keyExtractor={item => item.sortNumber}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index}></FlatListItem>
                            )
                        }} />
                    <Text style={styles.text}>Lời dặn: {this.state.DetailToaThuoc.note}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export class FlatListItem extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.content}>
                    <View style={[styles.contentColumn, { width: '7%' }]}>
                        <Text style={styles.text}>{this.props.item.sortNumber}.</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={[styles.contentColumn, { width: '90%' }]}>
                            <View style={[styles.content, { width: '70%' }]}>
                                <Text style={styles.text}>{this.props.item.name}</Text>
                                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                                    ({this.props.item.active})</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.content, { justifyContent: 'space-around' }]}>
                    <Text style={styles.text}>Số lượng: {this.props.item.quantity}</Text>
                    <Text style={styles.text}>Số ngày: {this.props.item.numberOfDays}</Text>
                    <Text style={styles.text}>Đơn vị: {this.props.item.unit}</Text>
                </View>
                <View style={[styles.content, { marginHorizontal: 20, marginVertical: 5 }]}>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>
                        Cách dùng: {this.props.item.usage}</Text>
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
        marginTop: 10,
        marginHorizontal: 5,
    },
    content: {
        flexDirection: 'row',
    },
    contentColumn: {
        flexDirection: "column",
        paddingVertical: 5,
    },
    text: {
        fontSize: 16,
        marginHorizontal: 5,

    }
})