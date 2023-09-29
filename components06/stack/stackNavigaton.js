import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

function Products({ navigation }) {
    const item = {
        "id": "pro001",
        "name": "Product 01"
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', { "id": 'pro001', "name": "Product 01", item })}>
                <Text>Products Screen</Text>
            </TouchableOpacity>
        </View>
    );
}


function DetailsScreen({ route, navigation }) {
    const params = route.params
    console.log(params)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen {params.id}</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}

            >
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ', headerShown: false }} />
                <Stack.Screen name="Products" component={Products} options={{ title: 'Danh sách Sản phẩm' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default App;