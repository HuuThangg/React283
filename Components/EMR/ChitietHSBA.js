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
export default class ChiTietHSBA extends React.Component {
    constructor(props) {
        super(props);
        const { ChiTietHSBA } = this.props.route.params
        this.state = {
            DetailHoSoBenhAn: [],
            encounterCode: ChiTietHSBA.encounterCode,
            createDate: ChiTietHSBA.createDate
        }
    }
    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/GetInformationTreatment?encounterCode=${this.state.encounterCode}&treatmentDate=${this.state.createDate}`)
            .then(result => {
                this.setState({
                    DetailHoSoBenhAn: result
                })
            })

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/doctor.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Bác sĩ: {this.state.DetailHoSoBenhAn.doctorName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/bed.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Khoa phòng: {this.state.DetailHoSoBenhAn.roomName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/stethoscope.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Mã ICD: {this.state.DetailHoSoBenhAn.icdCode}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/stethoscope.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Chẩn đoán: {this.state.DetailHoSoBenhAn.icdName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/stethoscope.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Mã ICD kèm theo: {this.state.DetailHoSoBenhAn.icdCodeAttach}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/stethoscope.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Chẩn đoán kèm theo: {this.state.DetailHoSoBenhAn.icdNameAttach}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
                        <Image source={require('./Images/pencil.png')}
                            style={{ width: 20, height: 19, marginLeft: 5 }} />
                        <Text style={styles.text}>Ghi chú: {this.state.DetailHoSoBenhAn.clinicalSymptoms}</Text>
                    </View >
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
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    container: {
        //marginBottom: 5,
        marginTop: 5,
        marginHorizontal: 5,
        //borderWidth: 0.5,
        borderRadius: 4,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 0.1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.05,
        elevation: 2,

    },
    title_detail: {
        backgroundColor: '#4387fd',
        height: 25,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginHorizontal: 5,
        marginBottom: 5
    },
    btn_tyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        height: 40,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#4387fd',
        marginHorizontal: 10,
        marginBottom: 10
    }
})