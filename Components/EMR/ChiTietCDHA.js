import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import api from '../../api.services';


const URL_Server = `http://mqsoft.ddns.net:9999`
export default class ChiTietCDHA extends React.Component {
    constructor(props) {
        super(props);
        const { ChiTietCDHA } = this.props.route.params
        this.state = {
            CDHAChiTiet: [],
            id: ChiTietCDHA.id,
            createDate: ChiTietCDHA.createDate,
            technicalId: ChiTietCDHA.technicalId
        }
    }
    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/GetDetailDiagnosticResult?createDate=${this.state.createDate}&id=${this.state.id}&technicalId=${this.state.technicalId}`)
            .then(result => {
                this.setState({
                    CDHAChiTiet: result
                })
            })
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Mô tả: {this.state.CDHAChiTiet.description}</Text>
                    <Text style={styles.text}>Kết luận: {this.state.CDHAChiTiet.conclusion}</Text>
                    <Text style={styles.text}>Đề nghị: {this.state.CDHAChiTiet.indication}</Text>
                </View>
            </SafeAreaView>
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
    text: {
        fontSize: 16,
        marginHorizontal: 5,

    }
})