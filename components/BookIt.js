import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import TimeInput from '@tighten/react-native-time-input';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import { buildingName } from './Home'
import { AuthContext } from '../context/AuthContext';
import Toast from 'react-native-toast-message';

const BookIt = ({ route, navigation }) => {
  const { bookSlot, BookedSlots, bkedSlots } = useContext(AuthContext);
  const data1 = route.params
  useEffect(() => {
    BookedSlots(data1.room)
  }, [data1.room])

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' }
  ]);
  const [SubName, setSubName] = useState('');
  const [sec, setsec] = useState('');
  const [corsins, setcorsins] = useState('');
  const [startHour, setstartHour] = useState('');
  const [startMin, setstartMin] = useState('');
  const [endHour, setendHour] = useState('');
  const [endMin, setendMin] = useState('');

  const createClass = async () => { 
    var sttime = startHour + ":" + startMin
    var entime = endHour + ":" + endMin
    if (SubName && sec && corsins && value) {
      bookSlot(data1.building, data1.room, SubName, sec, corsins, sttime, entime, value)
    } else {
      Toast.show({
        type: 'error',
        text1: 'Status',
        text2: 'Fill all fields'
      }); 
    } 
  }; 
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <View style={styles.container}>
            <Text
              style={{
                color: 'green',
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: '5%'
              }}>
              CLASS DETAILS
            </Text>
            <View>
              <TouchableOpacity style={styles.box}>
                <Text style={styles.box_text}>{data1.room}</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholderTextColor={'maroon'}
              placeholder="SUBJECT NAME"
              style={styles.input}
              value={SubName}
              onChangeText={(e) => {
                setSubName(e)
              }}
            />
            <TextInput
              placeholderTextColor={'maroon'}
              placeholder="SECTION"
              style={styles.input}
              value={sec}
              onChangeText={(e) => {
                setsec(e)
              }}

            />
            <TextInput
              placeholderTextColor={'maroon'}
              placeholder="COURSE INSTRUCTOR"
              style={styles.input}

              value={corsins}
              onChangeText={(e) => {
                setcorsins(e)
              }}
            />
            <View>

            </View>
            <View>
              <Text style={{
                color: 'black', marginTop: '5%',
              }}>Time should be in 24 hour format</Text>
            </View>
            <View style={styles.timeStyle}>
              <View style={{ marginHorizontal: '1%' }} >
                <Text style={{ color: 'green' }}>Start time </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    onChangeText={e => setstartHour(e)}
                    value={startHour}
                    placeholder="Hour"
                    keyboardType="numeric"
                  />
                  <Text style={{ marginBottom: "5%" }}>:</Text>
                  <TextInput
                    onChangeText={e => setstartMin(e)}
                    value={startMin}
                    placeholder="Min"
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{ marginHorizontal: '1%', }}>
                <Text style={{ color: 'green' }}>End Time </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    onChangeText={e => setendHour(e)}
                    value={endHour}
                    placeholder="Hour"
                    keyboardType="numeric"
                  />
                  <Text style={{ marginBottom: "5%" }}>:</Text>
                  <TextInput
                    onChangeText={e => setendMin(e)}
                    value={endMin}
                    placeholder="Min"
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>


            <View
              style={{
                width: '70%',
                marginTop: "5%",
              }}
            >

              <DropDownPicker style={{ width: '100%', borderColor: "maroon", borderWidth: 2 }}
                translation={{
                  PLACEHOLDER: "Select a day"
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />

            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: "5%"
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                createClass()
              }>
              <Icon name="check-circle" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Drawer")
              }}>
              <Icon name="home" size={30} color="white" />
            </TouchableOpacity>

            {bkedSlots?.length > 0 ? (<>
              <View>
                <Text style={{
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginTop: '5%'
                }}>Already Booked slots</Text>
                <View style={{ flex: 1 }}>
                  <FlatList
                    data={bkedSlots}
                    contentContainerStyle={{
                      alignItems: "center",
                    }}
                    renderItem={({ item, index }) =>
                      <View key={index} style={{ backgroundColor: "gainsboro", alignItems: "center", justifyContent: "center", marginVertical: 10, borderRadius: 5, paddingVertical: 15, elevation: 4, }}>
                        <View style={{ borderLeftWidth: 3, borderLeftColor: 'maroon' }}>
                          <View style={styles.bookedclasses}>
                            <View style={{ width: "60%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.course}</Text>
                            </View>
                            <View style={{ width: "30%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.section}</Text>
                            </View>
                          </View>
                          <View style={styles.bookedclasses}>
                            <View style={{ width: "60%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.teacher_name}</Text>
                            </View>
                            <View style={{ width: "30%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.day}</Text>
                            </View>
                          </View>
                          <View style={styles.bookedclasses}>
                            <View style={{ width: "60%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.st_time}</Text>
                            </View>
                            <View style={{ width: "30%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.end_time}</Text>
                            </View>
                          </View>
                          <View style={styles.bookedclasses}>
                            <View style={{ width: "60%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.class_name}</Text>
                            </View>
                            <View style={{ width: "30%" }}>
                              <Text style={{ color: 'black', fontWeight: '800' }}>{item.building_name}</Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            marginBottom: 10,
                            flexDirection: 'row',
                          }}>
                        </View>
                      </View>
                    }
                  />
                </View>
              </View>
            </>) : (<View>
              <Text style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: '5%'
              }}>No slot found of this class</Text>
            </View>)}




            <Text style={{ color: 'maroon' }}>
              Allright Reserved to Smiu.edu.pk
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
    backgroundColor: 'gainsboro',
    width: 350,
    marginTop: 10,
    borderRadius: 5,
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
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mytext: {
    color: 'white',
  },
  box_text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
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
  boxStyle: {
    marginTop: '5%',
    alignItems: 'center',

  },
  checkbo: {
    backgroundColor: "gainsboro",

  },
  timeStyle: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: "80%",
    marginTop: '2%'

  },
  bookedclasses: {
    width: "95%",
    marginVertical: 5,
    flexDirection: "row",
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
export default BookIt;
