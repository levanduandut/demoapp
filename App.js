/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import RootComponent from './src/views/index';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { getToken, notificationListen, requestUserPermission } from './src/untils/nocation';


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    requestUserPermission();
    notificationListen();
    getToken();
  }, [])

  return (
    <RootComponent />

    // <SafeAreaView style={{}}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <View style={{height: '100%', width: '100%'}}>
    //     <View
    //       style={{
    //         width: '100%',
    //         height: '16.6%',
    //         flexDirection: 'row',
    //         borderWidth: 1,
    //       }}>
    //       <View
    //         style={{
    //           width: '33.3%',
    //           height: '100%',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //         }}>
    //         <View
    //           style={{
    //             backgroundColor: 'red',
    //             height: '80%',
    //             width: '80%',
    //             borderRadius: 10,
    //           }}></View>
    //       </View>
    //       <View
    //         style={{
    //           width: '66.6%',
    //           borderLeftWidth: 1,
    //           height: '100%',
    //         }}>
    //         <Text style={{marginTop: 10, marginLeft: 10}}>My name is Duan</Text>
    //       </View>
    //     </View>
    //     <View
    //       style={{
    //         width: '100%',
    //         height: '16.6%',
    //         flexDirection: 'row',
    //         borderWidth: 1,
    //       }}>
    //       <View
    //         style={{
    //           width: '66.6%',
    //           height: '100%',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //         }}>
    //         <Text style={{fontWeight: 'bold'}}>Le Van duan</Text>
    //       </View>
    //       <View
    //         style={{
    //           width: '33.3%',
    //           borderLeftWidth: 1,
    //           height: '100%',
    //         }}>
    //         <View
    //           style={{
    //             height: '50%',
    //             width: '100%',
    //             backgroundColor: 'green',
    //           }}></View>
    //         <View
    //           style={{
    //             height: '50%',
    //             width: '100%',
    //             backgroundColor: 'blue',
    //           }}></View>
    //       </View>
    //     </View>
    //     <View
    //       style={{
    //         width: '100%',
    //         height: '16.6%',
    //         flexDirection: 'row',
    //         borderWidth: 1,
    //       }}>
    //       <View
    //         style={{
    //           width: '33.3%',
    //           height: '100%',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           backgroundColor: 'yellow',
    //         }}></View>
    //       <View
    //         style={{
    //           width: '33.3%',
    //           height: '100%',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           borderLeftWidth: 1,
    //           borderRightWidth: 1,
    //         }}></View>
    //       <View
    //         style={{
    //           width: '33.3%',
    //           height: '100%',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           backgroundColor: 'red',
    //         }}></View>
    //     </View>
    //     <View
    //       style={{
    //         width: '100%',
    //         height: '34%',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <View
    //         style={{
    //           width: '60%',
    //           height: '60%',
    //           backgroundColor: 'black',
    //         }}>
    //         <View
    //           style={{
    //             backgroundColor: 'red',
    //             height: 100,
    //             width: 100,
    //             position: 'absolute',
    //             right: -20,
    //             top: -20,
    //           }}></View>
    //       </View>
    //     </View>
    //     <View
    //       style={{
    //         width: '100%',
    //         flex: 1,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <View
    //         style={{
    //           width: '80%',
    //           height: '40%',
    //           justifyContent: 'space-between',
    //           flexDirection: 'row',
    //         }}>
    //         <View
    //           style={{
    //             width: '40%',
    //             backgroundColor: 'yellow',
    //             borderRadius: 20,
    //             borderWidth: 2,
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //           }}>
    //           <Text style={{fontWeight: 'bold', color: 'black'}}>Save</Text>
    //         </View>
    //         <View
    //           style={{
    //             width: '40%',
    //             backgroundColor: 'blue',
    //             borderRadius: 20,
    //             borderWidth: 2,
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //           }}>
    //           <Text style={{fontWeight: 'bold', color: 'white'}}>Cancal</Text>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
