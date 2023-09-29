import React from 'react';
import { View, Text, FlatList, TextInput, ScrollView, TouchableOpacity } from "react-native";
import api from '../api.services'
import SelectDropdown from 'react-native-select-dropdown';

const URL_server = `http://mqsoft.ddns.net:6767`

export default class SelectDropdownItem extends React.Component {
    render() {
        return (
            <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.title}</Text>
                <SelectDropdown
                    data={this.props.data}
                    dropdownStyle={{ width: '95%' }}
                    buttonStyle={{ width: '100%', backgroundColor: 'white', borderRadius: 10 }}
                    defaultButtonText={this.props.text}
                    rowTextForSelection={(item, index) => {
                        return (
                            <Text>{item.name}</Text>
                        )
                    }}
                    buttonTextAfterSelection={(item, index) => {
                        return (
                            <Text>{item.name}</Text>
                        )
                    }}
                />
            </View>
        )
    }
}

export class InputItem extends React.Component {
    render(){
        return(
            <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.title}</Text>
            <ScrollView>
                <TextInput style={{
                    backgroundColor: 'white',
                    fontSize: 20, borderRadius: 10,
                }}
                    placeholder={this.props.title}
                    maxLength={50}
                    multiline // gõ tới cuối dòng tự động xuống hàng
                     />
            </ScrollView>
        </View>
        )
    }
}