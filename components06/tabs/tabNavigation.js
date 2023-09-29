import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const backgroundColor = "#0067a7";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
                
            >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require(`../../icons/home.png`)}
                                style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                        },
                        title: "Trang Chủ",
                        tabBarBadge: 3
                    }}
                />
                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require(`../../icons/cloud.png`)}
                                style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                        },
                        title: "Cài đặt",
                        tabBarBadge: 2
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
} 