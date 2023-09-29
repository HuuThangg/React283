import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import XemToaThuoc from './Components/EMR/XemToaThuoc'
import ChiTietToaThuoc from './Components/EMR/ChitietToaThuoc';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="XemToaThuoc"
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
                <Stack.Screen name="XemToaThuoc" component={XemToaThuoc} options={{ title: 'XEM TOA THUỐC', headerShown: false }} />
                <Stack.Screen name="ChiTietToaThuoc" component={ChiTietToaThuoc} options={({ route }) => ({ title: route.params.ChiTietToaThuoc.id })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;