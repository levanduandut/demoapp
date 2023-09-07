import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';

const Setting = ({navigation}) => {
  const info = useSelector(state => state.personalInfo);
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
          onPress={() => navigation.goBack()}
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
        <Text style={{fontWeight: 'bold'}}>Setting Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
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
          <Text style={{color: 'white', fontWeight: 'bold'}}>Đăng xuất</Text>
        </TouchableOpacity>
        <Text style={{color:'black'}}>Email : {info.email}</Text>
        <Text style={{color:'black'}}>Score : {info.score}</Text>
        <Text style={{color:'black'}}>Address :{info.address}</Text>
        <Text style={{color:'black'}}>Id : {info.id}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Setting;
