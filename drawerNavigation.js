import * as React from 'react';
import { Image,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import San_pham from './components06/drawer/MH_San_pham';
import Lich_su_Dat_hang from './components06/drawer/MH_Lich_su_Dat_hang';
import Thong_bao from './components06/drawer/MH_Thong_bao';
import Doi_Mat_khau from './components06/drawer/MH_Doi_Mat_khau';
import Stack from './stackNavigation'
import welcome from './screens/welcome'

const backgroundColor = "#0067a7";

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>

            <DrawerItem
                label={()=>{
                    return <Text style={{color:'chocolate', fontSize:15, fontWeight:'800'}}>Mobile Thu Trân</Text>
                }}
                onPress={() => props.navigation.closeDrawer()}
                icon={() => {
                    return <Image 
                            source={require(`./icons/info.png`)}
                            style={{ resizeMode:'contain', tintColor: "red" }} />
                }}
            />

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="San_pham"
                drawerContent={props => <CustomDrawerContent {...props} />}
                drawerPosition="left"
                drawerType="front" // back, slide, permanent, front
                drawerStyle={{paddingTop:20}}
            >

                <Drawer.Screen name="San_pham" component={San_pham} options={{
                    title: 'Sản phẩm',
                    drawerIcon: () => {
                        return <Image
                            source={require(`./icons/rent.png`)}
                            style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                    }
                }} />
                <Drawer.Screen name="Lich_su_Dat_hang" component={Lich_su_Dat_hang} options={{
                    title: 'Lịch sử Đặt hàng',
                    drawerIcon: () => {
                        return <Image
                            source={require(`./icons/time.png`)}
                            style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                    }

                }} />
                <Drawer.Screen name="Thong_bao" component={Thong_bao} options={{
                    title: 'Thông báo',
                    drawerIcon: () => {
                        return <Image
                            source={require(`./icons/speaker.png`)}
                            style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                    }
                }} />
                <Drawer.Screen name="Doi_Mat_khau" component={Doi_Mat_khau} options={{
                    title: 'Đổi Mật khẩu',
                    drawerIcon: () => {
                        return <Image
                            source={require(`./icons/user-location.png`)}
                            style={{ width: 26, height: 26, tintColor: backgroundColor }} />
                    }
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}