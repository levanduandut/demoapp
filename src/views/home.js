import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../redux/actions/updateAction';
import { notificationListen, onDisplayNotification } from '../untils/nocation';
import notifee from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ route, navigation }) => {
  // const {email} = route.params;
  const [text, setText] = useState('');
  const info = useSelector(state => state.personalInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(JSON.stringify(info));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Text style={{ fontWeight: 'bold' }}>Home Screen</Text>
        <TouchableOpacity
          onPress={() => onDisplayNotification("Mot hai ba", "Ba hai moi  ")}
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
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Setting</Text>
          {/* <Text>Email : {email}</Text> */}
        </TouchableOpacity>
        <Text style={{color:'black'}}>Email : {info.email}</Text>
        <Text style={{color:'black'}}>Score : {info.score}</Text>
        <Text style={{color:'black'}}>Address :{info.address}</Text>
        <Text style={{color:'black'}}>DeviceId : {info.id}</Text>

        <TextInput
          style={{ height: 50, width: 100, borderWidth: 1, color: 'black' }}
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity
          onPress={() => dispatch(updateEmail(text))}
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
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Update</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons name="laptop" color='red' size={40} />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
