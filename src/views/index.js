import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Login from './Login';
import Setting from './setting';
import Home from './home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import Toast from 'react-native-toast-message'
import { PersistGate } from 'redux-persist/integration/react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Anim from './animation';
import Anim2 from './animation2';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const tabBarIconComponent = (iconName, color) => (
  <Icon name={iconName} color={color} size={20} />
);

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => tabBarIconComponent('home', color),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => tabBarIconComponent('gear', color),
        }}
      />
      <Tab.Screen
        name="Anim"
        component={Anim}
        options={{
          tabBarIcon: ({ color }) => tabBarIconComponent('bookmark', color),
        }}
      />
      <Tab.Screen
        name="Anim2"
        component={Anim2}
        options={{
          tabBarIcon: ({ color }) => tabBarIconComponent('magnet', color),
        }}
      />
    </Tab.Navigator>
  );
}
export default RootComponent = function () {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeTabs" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  );
};
