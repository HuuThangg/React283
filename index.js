/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import info from './components01/info';
//import {Header,Footer,Content} from './components01/childComponents'
import welcome from './screens/welcome';
import register from './screens/register';
import girdSystem from './screens/gridSystem';
import flatList from './components04/flatList';
import gioHang from './components04/gioHang';
import nguoiDung from './components04/nguoiDung';
AppRegistry.registerComponent(appName, () => nguoiDung);
