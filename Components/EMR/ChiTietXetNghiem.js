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
import { color } from 'react-native-reanimated';
//import { data } from '../../Data/data';

const URL_Server = `http://mqsoft.ddns.net:9999`
export default class ChiTietXetNghiem extends React.Component {
    constructor(props) {
        super(props);
        const { ChiTietXetNghiem } = this.props.route.params
        this.state = {
            ChiTietXetNghiem: [],
            id: ChiTietXetNghiem.id,
            createDate: ChiTietXetNghiem.createDate
        }
    }

    componentDidMount() {
        api.get(`${URL_Server}/EmrViewMedicalRecord/GetDetailTestResult?createDate=${this.state.createDate}&id=${this.state.id}`)
            .then(result => {
                this.setState({
                    ChiTietXetNghiem: result
                })
            })
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.header}>
                    <Text style={styles.title}>THÔNG TIN CẬN LÂM SÀN</Text>
                </View> */}
                <View style={[styles.container,
                { backgroundColor: '#4387fd', borderRadius: 3 }]}>
                    <View style={[styles.contentColumn,
                    { width: '50%', }]}>
                        <Text style={[styles.text, { color: '#FFFFFF' }]}>Tên XN</Text>
                    </View>
                    <View style={[styles.contentColumn,
                    { width: '30%' }]}>
                        <Text style={[styles.text, { color: '#FFFFFF' }]}>Kết quả</Text>
                    </View>
                    <View style={[styles.contentColumn,
                    {
                        width: '20%',
                    }]}>
                        <Text style={[styles.text, { color: '#FFFFFF' }]}>CSBT</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <FlatList showsVerticalScrollIndicator={false}
                        data={this.state.ChiTietXetNghiem}
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
    render() {
        let batthuong = this.props.item.abnormal == 1 ? 'rgba(255,0,4,1.0)' : this.props.item.abnormal == 2 ? 'rgba(0,121,254,1.0)' : '#000000';
        return (
            <View>
                <View style={[styles.container, { borderBottomWidth: 0.5, borderBottomColor: '#4387fd' }]}>
                    <View style={[styles.contentColumn, { width: '50%' }]}>
                        <Text style={[styles.text, { color: '#000000' }]}>{this.props.item.resultName}</Text>
                    </View>
                    <View style={[styles.contentColumn, { width: '25%' }]}>
                        <Text style={[styles.text, { color: batthuong }]}>{this.props.item.result}</Text>
                    </View>
                    <View style={[styles.contentColumn, { width: '25%' }]}>
                        <Text style={[styles.text, { color: '#000000' }]}>{this.props.item.usualIndex}</Text>
                    </View>
                </View>
            </View >
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
        marginTop: 5,
        marginHorizontal: 5,
        flexDirection: 'row'

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
        height: 37,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#4387fd',
        marginHorizontal: 10,
        marginBottom: 10
    }
})