import { faEdit } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
 import { AuthContext } from '../context/AuthContext';
 import Toast from 'react-native-toast-message'; 

const Booked = ({ navigation }) => {
  const { listArr, deleteSlot, updateSlot, excelData } = useContext(AuthContext);
  const [active, setActive] = useState("")
  const [sub, setSub] = useState()
  const [sec, setSec] = useState("")
  const [teacher, setTeacher] = useState("")
  const [day, setDay] = useState("")
  const [st_time, setSt_time] = useState("")
  const [en_time, setEn_time] = useState("")
  const [building_name, setbuilding_name] = useState("")
  const [class_name, setclass_name] = useState("")
    if (listArr?.length < 1) {
      Toast.show({
        type: 'error',
        text1: 'Status',
        text2: "No List Found"
      });
   }
  const edit = (_id) => {
    setActive(_id)
  }

  
  const submit = (_id) => {
    setActive("")
    updateSlot(_id, sub, sec, teacher, day, st_time, en_time, building_name, class_name)
    setDay("")
    setTeacher("")
    setSt_time("")
    setEn_time("")
    setSec("")
    setSub("")
    setbuilding_name("")
    setclass_name("")
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }}>
          All Reserved Classes
        </Text>

        <View style={{ flex: 1 }}>
          <FlatList
            data={listArr}
            contentContainerStyle={{
              alignItems: "center",
            }}
            renderItem={({ item, index }) =>
              <View key={index} style={{ backgroundColor: "gray", alignItems: "center", justifyContent: "center", marginVertical: 20, borderRadius: 10, paddingVertical: 5 }}>
                <View>
                  <View style={styles.bookedclasses}>
                    <View style={{ width: active == item._id ? "47%" : "60%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={sub}
                          placeholder={item.course}
                          style={styles.input}
                          onChangeText={e => setSub(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.course}</Text>
                      </>)}
                    </View>
                    <View style={{ width: active == item._id ? "47%" : "30%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={sec}
                          placeholder={item.section}
                          style={styles.input}
                          onChangeText={e => setSec(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.section}</Text>
                      </>)}
                    </View>
                  </View>
                  <View style={styles.bookedclasses}>
                    <View style={{ width: active == item._id ? "47%" : "60%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={teacher}
                          placeholder={item.teacher_name}
                          style={styles.input}
                          onChangeText={e => setTeacher(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.teacher_name}</Text>
                      </>)}
                    </View>
                    <View style={{ width: active == item._id ? "47%" : "30%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={day}
                          placeholder={item.day}
                          style={styles.input}
                          onChangeText={e => setDay(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.day}</Text>
                      </>)}
                    </View>
                  </View>
                  <View style={styles.bookedclasses}>
                    <View style={{ width: active == item._id ? "47%" : "60%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={st_time}
                          placeholder={item.st_time}
                          style={styles.input}
                          onChangeText={e => setSt_time(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.st_time}</Text>
                      </>)}
                    </View>
                    <View style={{ width: active == item._id ? "47%" : "30%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={en_time}
                          placeholder={item.end_time}
                          style={styles.input}
                          onChangeText={e => setEn_time(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.end_time}</Text>
                      </>)}
                    </View>
                  </View>
                  <View style={styles.bookedclasses}>
                    <View style={{ width: active == item._id ? "47%" : "60%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={building_name}
                          placeholder={item.building_name}
                          style={styles.input}
                          onChangeText={e => setbuilding_name(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.building_name}</Text>
                      </>)}
                    </View>
                    <View style={{ width: active == item._id ? "47%" : "30%" }}>
                      {active == item._id ? (<>
                        <TextInput
                          placeholderTextColor={active == item._id ? "gray" : 'maroon'}
                          value={class_name}
                          placeholder={item.class_name}
                          style={styles.input}
                          onChangeText={e => setclass_name(e)}
                        />
                      </>) : (<>
                        <Text style={{ color: 'black' }}>{item.class_name}</Text>
                      </>)}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                  }}>
                  {active == item._id ? (<>
                    <TouchableOpacity style={styles.btn2} onPress={() => submit(item._id)}>
                      <Icon name="check" size={30} color="maroon" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btn2}
                      onPress={() => { setActive("") }}>
                      <Icon name="close" size={30} color="maroon" />
                    </TouchableOpacity>
                  </>) : (<>
                    <TouchableOpacity style={styles.btn2} onPress={() => edit(item._id)}>
                      <Icon name="edit" size={30} color="maroon" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btn2}
                      onPress={() => { setActive(""), deleteSlot(item._id) }}>
                      <Icon name="trash-o" size={30} color="maroon" />
                    </TouchableOpacity>
                  </>)}
                </View>
              </View>
            } />
        </View>
        <View
          style={{
            marginBottom: 30,
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.btn} onPress={() => excelData()}>
            <Icon name="print" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="home" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'maroon' }}>
          Allright Reserved to Smiu.edu.pk
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 0,
    paddingLeft: 20,
    fontSize: 17,
    backgroundColor: 'white',
    width: "100%",
    borderRadius: 5,
    color: 'maroon',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  btn: {
    width: 120,
    height: 40,
    backgroundColor: 'maroon',
    marginTop: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btn2: {
    width: 80,
    paddingVertical: 5,
    backgroundColor: 'white',
    marginTop: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  mytext: {
    color: 'white',
  },
  bookedclasses: {
    width: "95%",
    marginVertical: 5,
    backgroundColor: 'gainsboro',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
export default Booked;
