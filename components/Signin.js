import React, { useState, useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Toast from 'react-native-toast-message';


const Signin = ({ navigation }) => {
  const [uname, setuname] = useState("");
  const [pass, setpass] = useState("");
  const { Login } = useContext(AuthContext);

  const sign_in = async () => {
    if(uname && pass){ 
      Login(uname, pass)
    }
    else{
      Toast.show({
        type: 'error',
        text1: 'Status',
        text2: 'Fill all fields'
      });
    }
  };



  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.myLogo} source={require('../media/smi.png')} />
            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }}>
              TIME TABLE MANAGER
            </Text>
            <TextInput
              placeholderTextColor={'maroon'}
              placeholder="Username/Email"
              style={styles.input}
              onChangeText={e => setuname(e)}
            />
            <TextInput
              placeholderTextColor={'maroon'}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={e => setpass(e)}
            />

            {/* <TouchableOpacity
              style={styles.btn_sign_up}
              onPress={() => {
                sign_up()
                // navigation.navigate('Home');
              }}>
              <Icon name="sign-in" size={15} color="white" />
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                sign_in()
                // navigation.navigate('Home');
              }}>
              <Icon name="sign-in" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'maroon' }}>
            Allright Reserved to Smiu.edu.pk
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn_sign_up: {
    width: 50,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    fontSize: 17,
    backgroundColor: 'gainsboro',
    width: 300,
    marginTop: 35,
    borderRadius: 10,
    padding: 20,
    height: 70,
    color: 'maroon',
  },
  container: {
    alignItems: 'center',
  },
  myLogo: {
    height: 220,
    width: 220,
  },
  btn: {
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mytext: {
    color: 'white',
  },
});
export default Signin;
