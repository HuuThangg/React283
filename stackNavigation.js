import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import welcome from './screens/welcome';
import benhAn from './screens/benhAn';
import hienDien from './screens/hienDien';

import HoSoBenhAn from './Components/EMR/HoSoBenhAn';
import ChiTietHSBA from './Components/EMR/ChitietHSBA';
import ChiTietToaThuoc from './Components/EMR/ChitietToaThuoc';
import DangKy from './Components/DangKy';
import DangNhap from './Components/DangNhap';
import TaiKhoan from './Components/TaiKhoan';
import XemToaThuoc from './Components/EMR/XemToaThuoc'
import XemCDHA from './Components/EMR/XemCDHA';
import ChiTietCDHA from './Components/EMR/ChiTietCDHA'
import XemXetNghiem from './Components/EMR/XemXetNghiem';
import ChiTietXetNghiem from './Components/EMR/ChiTietXetNghiem';
import TrangChu from './Components/TrangChu';
//import Tab from './tabNavigation'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
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
        <Stack.Screen name="Home" component={DangNhap} options={{ title: 'DangNhap', headerShown: false }} />
        <Stack.Screen name="DangKy" component={DangKy} options={{ title: 'DangKy', headerShown: false }} />
        <Stack.Screen name="TrangChu" component={TrangChu} options={{ title: 'TrangChu', headerShown: false }} />
        {/* <Stack.Screen name="TaiKhoan" component={TaiKhoan} options={{ title: 'TaiKhoan', headerShown: false }} /> */}
        {/* <Stack.Screen name="Tab" component={Tab} options={{ title: 'Tab', headerShown: false }} /> */}
        <Stack.Screen name="HoSoBenhAn" component={HoSoBenhAn} options={{ title: 'THÔNG TIN HỒ SƠ BỆNH ÁN', headerShown: true }} />
        <Stack.Screen name="ChiTietHSBA" component={ChiTietHSBA} options={{ title: 'THÔNG TIN ĐIỀU TRỊ', headerShown: true }} />
        <Stack.Screen name="XemToaThuoc" component={XemToaThuoc} options={{ title: 'XEM TOA THUỐC', headerShown: true }} />
        <Stack.Screen name="ChiTietToaThuoc" component={ChiTietToaThuoc} options={({ route }) => ({ title: route.params.ChiTietToaThuoc.id })} />
        <Stack.Screen name="XemXetNghiem" component={XemXetNghiem} options={{ title: 'XEM XÉT NGHIỆM', headerShown: true }} />
        <Stack.Screen name="ChiTietXetNghiem" component={ChiTietXetNghiem} options={({ route }) => ({ title: route.params.ChiTietXetNghiem.id })} />
        <Stack.Screen name="XemCDHA" component={XemCDHA} options={{ title: 'XEM CHẨN ĐOÁN HÌNH ẢNH', headerShown: true }} />
        <Stack.Screen name="ChiTietCDHA" component={ChiTietCDHA} options={({ route }) => ({ title: route.params.ChiTietCDHA.id })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;