import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import XemXetNghiem from './Components/EMR/XemXetNghiem';
import ChiTietXetNghiem from './Components/EMR/ChiTietXetNghiem';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="XemXetNghiem"
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
                <Stack.Screen name="XemXetNghiem" component={XemXetNghiem} options={{ title: 'XEM XÉT NGHIỆM', headerShown: false }} />
                <Stack.Screen name="ChiTietXetNghiem" component={ChiTietXetNghiem} options={({ route }) => ({ title: route.params.ChiTietXetNghiem.id })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;