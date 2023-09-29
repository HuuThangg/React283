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
export default class XemXetNghiem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DSXetNghiem: []
        }
    }

    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/GetListTestResult?patientCode=23911780&yearTreatment=2023`)
            .then(result => {
                this.setState({
                    DSXetNghiem: result
                })
            })
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.header}>
                    <Text style={styles.title}>THÔNG TIN XÉT NGHIỆM</Text>
                </View> */}
                <View style={styles.container}>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={this.state.DSXetNghiem}
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
        this.props.navigation.navigate("ChiTietXetNghiem", { "ChiTietXetNghiem": this.props.item })
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}
                onPress={this.XL_Chon.bind(this)}
                style={styles.button}>
                <View style={[styles.container,
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }]}>
                    <View style={{ width: '85%' }}>
                        <Text style={styles.text}>Số phiếu: {this.props.item.id}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./Images/calendar.png')}
                                style={{ width: 20, height: 19 }} />
                            <Text style={styles.text}>Ngày: {this.props.item.createDate}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./Images/number.png')}
                                style={{ width: 20, height: 19 }} />
                            <Text style={styles.text}>STT mẫu: {this.props.item.barcode}</Text>
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
    button: {
        borderWidth: 0.5,
        marginBottom: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        borderColor: '#2A3D33'
    }
})