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

export default function Classes({ navigation, route }) {
  const building = route.params
   return (
    <>
      <View style={{ backgroundColor: 'white' }}>
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
          <Text style={{ fontSize: 25, marginLeft: 80, color: 'black' }}>{building.building}
          </Text>
          <Icon name="users" size={30} color="maroon" />
        </View>

        <ScrollView>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 10,
            }}>
            {building.building == "Main Building" ?
              <>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "A1" });
                }} >
                  <Text style={styles.box_text}>A1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "A2" });
                }} >
                  <Text style={styles.box_text}>A2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "A3" });
                }} >
                  <Text style={styles.box_text}>A3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "A4" });
                }} >
                  <Text style={styles.box_text}>A4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "A5" });
                }} >
                  <Text style={styles.box_text}>A5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "A6" });
                }} >
                  <Text style={styles.box_text}>A6</Text>
                </TouchableOpacity>
              </>
              : building.building == "School Building" ? <>
                <TouchableOpacity style={styles.box}    onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "SC101" });
                }}>
                  <Text style={styles.box_text}>SC101</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}  onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "SC102" });
                }}>
                  <Text style={styles.box_text}>SC102</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}  onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "SC103" });
                }}>
                  <Text style={styles.box_text}>SC103</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}  onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "SC104" });
                }}>
                  <Text style={styles.box_text}>SC104</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}  onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "SC105" });
                }}>
                  <Text style={styles.box_text}>SC105</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}  onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "SC106" });
                }}>
                  <Text style={styles.box_text}>SC106</Text>
                </TouchableOpacity>
              </> : building.building == "Talpur House" ? <>
                <TouchableOpacity style={styles.box}   onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "CR101" });
                }}>
                  <Text style={styles.box_text}>CR101</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "CR102" });
                }}>
                  <Text style={styles.box_text}>CR102</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "CR103" });
                }}>
                  <Text style={styles.box_text}>CR103</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "CR201" });
                }}>
                  <Text style={styles.box_text}>CR201</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "CR202" });
                }}>
                  <Text style={styles.box_text}>CR202</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "CR203" });
                }}>
                  <Text style={styles.box_text}>CR203</Text>
                </TouchableOpacity>
              </> : building.building == "IT Tower" ?
                <>
                  <TouchableOpacity style={styles.box}   onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "IT101" });
                }}>
                    <Text style={styles.box_text}>IT101</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "IT102" });
                }}>
                    <Text style={styles.box_text}>IT102</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "IT103" });
                }}>
                    <Text style={styles.box_text}>IT103</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "IT104" });
                }}>
                    <Text style={styles.box_text}>IT104</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "IT105" });
                }}>
                    <Text style={styles.box_text}>IT105</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.box} onPress={() => {
                  navigation.navigate('BookIt', { building: building.building, room: "IT106" });
                }}>
                    <Text style={styles.box_text}>IT106</Text>
                  </TouchableOpacity>
                </> : <></>} 
          </View> 
          <View
            style={{
              display: 'flex',
               alignItems: 'center',
              marginTop: 48,
            }}>
            <Text style={{ color: 'maroon' }}>
              Allright Reserved to Smiu.edu.pk
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  btnBox: {
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 40,
    // backgroundColor: 'maroon',
    marginTop: 40,
    borderRadius: 5,
    // marginLeft: 120,

  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 40,
    borderRadius: 5,
    // marginLeft: 120,
  },
  mytext: {
    // color: '#CD2027',
    color: 'white',
    fontSize: 20,
  },
});
