import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import XemCDHA from './Components/EMR/XemCDHA';
import ChiTietCDHA from './Components/EMR/ChiTietCDHA';
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="TaiKhoan"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#4387fd',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="XemCDHA" component={XemCDHA} options={{ title: 'XEM CHẨN ĐOÁN HÌNH ẢNH', headerShown: false }} />
                <Stack.Screen name="ChiTietCDHA" component={ChiTietCDHA} options={({ route }) => ({ title: route.params.ChiTietCDHA.id })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;