/**
 * @format
 */
import 'react-native-gesture-handler';


import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Stack from './stackNavigation'
import Tab from './tabNavigation'
import DangKy from './Components/DangKy';
import TaiKhoan from './Components/TaiKhoan';
import TrangChu from './Components/TrangChu';
AppRegistry.registerComponent(appName, () => Tab);
