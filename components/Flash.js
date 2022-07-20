import { React, useEffect } from 'react';
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
// import { useEffect } from 'react/cjs/react.production.min';

const Flash = () => {


  // setInterval(function () { console.log('this is') }, 5000);
  // setInterval()

  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={styles.container}>
            <Image
              style={styles.myLogo}
              source={require('../media/logo.png')}
            />
            <Text style={styles.mytext}>loading...</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  appview: {
    flex: 1,
  },

  container: {
    marginTop: 45,
    flex: 1,
    alignItems: 'center',
    color: 'black',
  },
  myLogo: { width: 170, height: 170, marginTop: 100 },

  mytext: {
    // color: '#CD2027',
    color: 'green',
    marginTop: 80,
    fontSize: 30,
  },
});
export default Flash;
