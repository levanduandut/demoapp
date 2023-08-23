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
import { PersistGate } from 'redux-persist/integration/react';
import Anim from './animation';
import Anim2 from './animation2';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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
          tabBarIcon: () => {
            <Icon name="rocket" size={30} color="#900" />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: () => {
            <Icon name="rocket" size={30} color="#900" />;
          },
        }}
      />
      <Tab.Screen
        name="Anim"
        component={Anim}
        options={{
          tabBarIcon: () => {
            <Icon name="rocket" size={30} color="#900" />;
          },
        }}
      />
      <Tab.Screen
        name="Anim2"
        component={Anim2}
        options={{
          tabBarIcon: () => {
            <Icon name="rocket" size={30} color="#900" />;
          },
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
            initialRouteName="HomeTabs"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Anim" component={Anim} />
            <Stack.Screen name="Anim2" component={Anim2} />
            <Stack.Screen name="HomeTabs" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
