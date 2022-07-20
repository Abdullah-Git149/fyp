import React from 'react';
import {
  Section,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Class({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: 'white', height: 840 }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 0,
              backgroundColor: 'gainsboro',
              height: 80,
            }}>
            <Text style={{ fontSize: 25, marginLeft: 80, color: 'maroon' }}>
              BUILDINGS A
            </Text>
            <Icon name="users" size={30} color="maroon" />
          </View>

          <ScrollView>
            <View
              style={{
                display: 'flex',
                //   justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                //   marginTop: 18,
                margin: 20,
              }}>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.box_text}>A1</Text>
              </TouchableOpacity>
              <Text style={{ color: 'green' }}> Class A1</Text>
            </View>
            <View style={styles.inputbox}>
              <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'maroon' }}> Timings: 9-11</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'maroon' }}>Timings: 11-01</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'maroon' }}>Timings: 01-03</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'maroon' }}>Timings: 03-05</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'maroon' }}>Timings: 05-07</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookIt');
                }}>
                <Icon name="arrow-right" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                marginTop: 48,
              }}>
              <Text style={{ color: 'maroon' }}>
                Allright Reserved to Smiu.edu.pk
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 17,
    backgroundColor: 'gainsboro',
    width: 350,
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
    height: 60,
    color: 'maroon',
  },
  box: {
    height: 85,
    width: 85,
    backgroundColor: 'gainsboro',
    marginHorizontal: 8,
    marginVertical: 14,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: 'green',
  },
  box_text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 85,
    borderRadius: 5,
    marginLeft: 120,
  },
  mytext: {
    // color: '#CD2027',
    color: 'white',
    fontSize: 20,
  },
});
