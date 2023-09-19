import React, {useState, useEffect} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useIsFocused} from '@react-navigation/native';

const Register = ({navigation}) => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const isFocused = useIsFocused();
  const [phoneNumber, setPhoneNumber] = useState('');
  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  const [uuid, setUuid] = useState('');
  const [phoneOk, setPhoneOk] = useState('');
  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      //   setUuid(user.uid);
      //   setPhoneOk(user.phoneNumber);
      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const timeCreateOTP = Date.parse(user.metadata.creationTime);
      const timeLost = (timestamp - timeCreateOTP) / 1000 - 300; // Tính thời gian quá 5 phút
      if(timeLost && timeLost > 0){
        
      }
      //   if (uuid.length > 0 && phoneOk.length > 0) {
      //     console.log(uuid, phoneOk);
      //     navigation.navigate('HomeTabs');
      //   }
    }
  }



  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const formattedPhoneNumber = `+84 ${phoneNumber.slice(
        0,
        3,
      )} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
      console.log(formattedPhoneNumber);
      const confirmation = await auth().signInWithPhoneNumber(
        formattedPhoneNumber,
      );
      setConfirm(confirmation);
    } catch (error) {
      Alert.alert(
        'Vui lòng thử lại sau !',
        'Bạn đã gửi quá nhiều yêu cầu trong thời gian ngắn',
      );
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      navigation.navigate('HomeTabs');
      alert('Đăng kí thành công');
    } catch (error) {
      console.log('Invalid code.');
      alert('Sai mã, vui lòng hập lại');
    }
  }

  if (!confirm) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Nhập số điện thoại của bạn:</Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            color: 'red',
          }}
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            width: 200,
            height: 40,
            backgroundColor: '#34eb8f',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => signInWithPhoneNumber()}>
          <Text style={{color: 'white'}}>Phone Number Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <TextInput
        style={{color: 'black'}}
        value={code}
        onChangeText={text => setCode(text)}
        autoCompleteType="off" // Tắt gợi ý tự động nhập
        autoCorrect={false} // Tắt chức năng tự động sửa lỗi
        keyboardType="numeric" // Bàn phím số để nhập OTP
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
};
export default Register;
