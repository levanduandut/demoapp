import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

const Home = ({route, navigation}) => {
  // const {email} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View
        style={{
          height: '8%',
          width: '100%',
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            height: '100%',
            borderWidth: 1,
            width: 90,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>{' < '}</Text>
          <Text style={{fontSize: 17, paddingTop: 4.5}}>Back</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold'}}>Home Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={{
            backgroundColor: '#38c741',
            width: '50%',
            height: 50,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Setting</Text>
          {/* <Text>Email : {email}</Text> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
