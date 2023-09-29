import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HoSoBenhAn from './Components/EMR/HoSoBenhAn';
import ChiTietHSBA from './Components/EMR/ChitietHSBA';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="HoSoBenhAn"
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
                <Stack.Screen name="HoSoBenhAn" component={HoSoBenhAn} options={{ title: 'THÔNG TIN HỒ SƠ BỆNH ÁN', headerShown: false }} />
                <Stack.Screen name="ChiTietHSBA" component={ChiTietHSBA} options={{ title: 'THÔNG TIN ĐIỀU TRỊ', headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;