import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native'
import api from '../../api.services';

const URL_Server = `http://mqsoft.ddns.net:9999`
export default class XemCDHA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DSCanLamSan: []
        }
    }

    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/GetListDiagnosticResult?patientCode=23103223&yearTreatment=2023`)
            .then(result => {
                this.setState({
                    DSCanLamSan: result
                })
            })
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.header}>
                    <Text style={styles.title}>THÔNG TIN CẬN LÂM SÀN</Text>
                </View> */}
                <View style={styles.container}>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={this.state.DSCanLamSan}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} navigation={this.props.navigation}></FlatListItem>
                            )
                        }} />
                </View>
            </SafeAreaView>
        )
    }
}

export class FlatListItem extends React.Component {
    XL_Chon() {
        this.props.navigation.navigate("ChiTietCDHA", { "ChiTietCDHA": this.props.item })
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}
                onPress={this.XL_Chon.bind(this)}
                style={styles.button}
            >
                <View style={[styles.container,
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }]}>
                    <View style={{ width: '85%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./Images/calendar.png')}
                                style={{ width: 20, height: 19 }} />
                            <Text style={styles.text}>Ngày: {this.props.item.createDate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./Images/check-up.png')}
                                style={{ width: 20, height: 19 }} />
                            <Text style={styles.text}>Tên: {this.props.item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./Images/price-tag.png')}
                                style={{ width: 20, height: 19 }} />
                            <Text style={styles.text}>Loại: {this.props.item.typename}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./Images/doctor.png')}
                                style={{ width: 20, height: 19 }} />
                            <Text style={styles.text}>Bác sĩ: {this.props.item.doctorName}</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Image source={require('./Images/greater-than-50.png')}
                            style={{ width: 30, height: 25 }} />
                    </View>
                </View>
            </TouchableOpacity>
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
        paddingVertical: 10,
        marginHorizontal: 5,

    },
    content: {
        flexDirection: 'row'
    },
    contentColumn: {
        flexDirection: "column",
        paddingVertical: 5,
    },
    text: {
        fontSize: 16,
        marginHorizontal: 5,

    },
    btn_tyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 10

    },
    button: {
        borderWidth: 0.5,
        marginBottom: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        borderColor: '#2A3D33'
    }
})