import * as React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chinh from './components06/tabs/MH_Chinh';
import Gio_hang from './components04/gioHang'
import Tim_kiem from './components06/tabs/MH_Tim_kiem';
import Lien_he from './components06/tabs/MH_Lien_he';
import Stack from "./stackNavigation";
import welcome from './screens/welcome';

import Stack_HSBA from './Stack_HSBA'
import Stack_Thuoc from './Stack_Thuoc'
import Stack_XetNghiem from './Stack_XetNghiem'
import Stack_CDHA from './Stack_CDHA'
import TaiKhoan from './Components/TaiKhoan';
import TrangChu from './Components/TrangChu';
const backgroundColor = "#0067a7";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="TrangChu"
                screenOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="TrangChu" component={Stack}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require(`./icons/home.png`)}
                                style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                        },
                        title: "Trang chủ",
                        headerShown: false
                    }}


                />
                <Tab.Screen name="TaiKhoan" component={TaiKhoan}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require(`./icons/cart.png`)}
                                style={{ width: 26, height: 26, tintColor: backgroundColor }}
                            />
                        },
                        title: "Tài khoản",
                        headerShown: false
                    }}
                //initialParams={{key:123}}
                />
                {/* <Tab.Screen name="XetNghiem" component={Stack_XetNghiem}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require(`./icons/search.png`)}
                                style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                        },
                        title: "Xét nghiệm",
                        headerShown: false
                    }}
                />
                <Tab.Screen name="CDHA" component={Stack_CDHA}
                    options={{
                        tabBarIcon: () => {
                            return <Image
                                source={require(`./icons/customer.png`)}
                                style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                        },
                        title: "CDHA",
                        headerShown: false
                    }}
                /> */}

            </Tab.Navigator>
        </NavigationContainer>
    );
}
