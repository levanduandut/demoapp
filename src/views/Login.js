import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('../images/images.jpeg')}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          {/* Email */}
          <View
            style={{
              width: '100%',
              height: '20%',
              marginTop: 0.3 * height,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '70%',
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white', top: 10}}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  height: '100%',
                  width: '70%',
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  textAlign: 'right',
                }}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                width: '70%',
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white', top: 10}}>Password</Text>
              <TextInput
                secureTextEntry
                autoCapitalize="none"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  height: '100%',
                  width: '70%',
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  textAlign: 'right',
                }}
              />
            </View>
          </View>

          {/* Button */}
          <View
            style={{
              height: '20%',
              width: '100%',
              marginTop: height * 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('Home', {email: email})}
              onPress={() => navigation.navigate('HomeTabs')}
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
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#2488a6',
                marginTop: 10,
                width: '50%',
                height: 50,
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default Login;