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

export default function Home({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={{ fontSize: 25, marginLeft: 0, color: 'maroon' }}>
              SMIU BUILDINGS
            </Text>

            <Icon name="users" size={30} color="maroon" />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              // backgroundColor: 'gray',
              marginTop: 10,
            }}>
            <TouchableOpacity style={styles.box}
              onPress={() => {
                navigation.navigate('Classes', { building: 'Talpur House' });
              }}>
              <Icon name="building" size={30} color="maroon" />
              <Text style={styles.box_text}>Talpur House</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => {
              navigation.navigate('Classes', { building: 'Main Building' });
            }}>
              <Icon name="building" size={30} color="maroon" />
              <Text style={styles.box_text}>Main Building</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => {
              navigation.navigate('Classes', { building: 'IT Tower' });
            }}>
              <Icon name="building" size={30} color="maroon" />
              <Text style={styles.box_text}>IT Tower</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => {
              navigation.navigate('Classes', { building: 'School Building' });
            }}>
              <Icon name="building" size={30} color="maroon" />
              <Text style={styles.box_text}>School Building</Text>
            </TouchableOpacity> 

            {/* <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate('Classes');
              }}>
              <Icon name="arrow-right" size={30} color="white" />
            </TouchableOpacity> */}

          </View>
          <View
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              marginTop: 74,
            }}>
            <Text style={{ color: 'maroon' }}>
              Allright Reserved to Smiu.edu.pk
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 110,
    width: 110,
    backgroundColor: 'gainsboro',
    // margin: 10,
    marginHorizontal: 12,
    marginVertical: 22,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_text: {
    color: 'maroon',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  btn: {
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mytext: {
    // color: '#CD2027',
    color: 'white',
    fontSize: 20,
  },
});
