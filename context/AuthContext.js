import React, { useState, useEffect, createContext } from 'react'
import {   PermissionsAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; 
var RNFS = require('react-native-fs');
import XLSX from 'xlsx'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [listArr, setlistArr] = useState([])
  const [data, setData] = useState()
  const [bkedSlots, setbkedSlots] = useState([])
  const [excelArr, setExcelArr] = useState([])
   const Login = async (uname, pass) => {
    await fetch(`http://10.0.2.2:5000/api/signIn`, {
      method: "POST",
      body: JSON.stringify({
        "username": uname,
        "password": pass
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 1) { 
          AsyncStorage.setItem('data', JSON.stringify(response));
          navigation.navigate('Drawer');
          Toast.show({
            type: 'success',
            text1: 'Status',
            text2: response.msg
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Status',
            text2: response.msg
          });
         }
      })
    isLoggedIn()
  }

  const logOutUser = async () => {
    try {
      await AsyncStorage.removeItem('data');
      setData()
      navigation.navigate('Signin');
      Toast.show({
        type: 'success',
        text1: 'Status',
        text2: "Logout Successfull"
      });
    } catch (error) {
      console.log(error);
    }
    isLoggedIn();
  }

  const isLoggedIn = async () => {
    try {
      let Data = await AsyncStorage.getItem('data');
      Data = JSON.parse(Data);
      if (Data) {
        setData(Data);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
    viewSlots()
  };

  const bookSlot = async (building, room, SubName, sec, corsins, sttime, entime, value) => {
    await fetch(`http://10.0.2.2:5000/api/addSlot`, {
      method: "POST",
      body: JSON.stringify({
        "building_name": building,
        "class_name": room,
        "course": SubName,
        "section": sec,
        "teacher_name": corsins,
        "st_time": sttime,
        "end_time": entime,
        "day": value,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 1) {
          navigation.navigate('Drawer');
          Toast.show({
            type: 'success',
            text1: 'Status',
            text2: response.msg
          });
         } else {
          Toast.show({
            type: 'error',
            text1: 'Status',
            text2: response.msg
          }); 
        }
      })
    viewSlots()
  }

  const viewSlots = async () => {
    fetch(`http://10.0.2.2:5000/api/listOfSlots`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 1) {
          setlistArr(response.slots)
          setExcelArr(response.slots)

        }
      })
  }

  const deleteSlot = async (_id) => {
    console.log(_id)

    await fetch(`http://10.0.2.2:5000/api/deleteSlot`, {
      method: "POST",
      body: JSON.stringify({
        "slot_id": _id,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 1) {
          Toast.show({
            type: 'success',
            text1: 'Status',
            text2: response.msg
          });
           viewSlots();
        } else {
          Toast.show({
            type: 'error',
            text1: 'Status',
            text2: response.msg
          });
         }
      })
  }
  const BookedSlots = async (room) => {
     await fetch(`http://10.0.2.2:5000/api/classList`, {
      method: "POST",
      body: JSON.stringify({
        "class_name": room,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 1) {
          setbkedSlots(response.slots)
        }
        else{
          setbkedSlots([])
        }
      })
  }
  const updateSlot = async (_id, sub, sec, teacher, day, st_time, en_time, building_name, class_name) => {
    await fetch(`http://10.0.2.2:5000/api/updateSlot`, {
      method: "POST",
      body: JSON.stringify({
        "slot_id": _id,
        "teacher_name": teacher,
        "day": day,
        "course": sub,
        "section": sec,
        "st_time": st_time,
        "end_time": en_time,
        "class_name": class_name,
        "building_name": building_name
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == 1) {
          Toast.show({
            type: 'success',
            text1: 'Status',
            text2: response.msg
          });
         } else {
          Toast.show({
            type: 'error',
            text1: 'Status',
            text2: response.msg
          });
         }
      })
    viewSlots()
  }

  const excelData = async () => {
    try {
      for (let i = 0; i <= excelArr?.length; i++) {
        delete excelArr[i]?._id;
        delete excelArr[i]?.updatedAt;
        delete excelArr[i]?.createdAt;
        delete excelArr[i]?.__v;
      }
      let isPermitedExternalStorage = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (!isPermitedExternalStorage) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Storage permission needed",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

          let sample_data_to_export = excelArr;
          let wb = XLSX.utils.book_new();
          let ws = XLSX.utils.json_to_sheet(sample_data_to_export)
          XLSX.utils.book_append_sheet(wb, ws, "Users")
          const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
          RNFS.writeFile(RNFS.ExternalStorageDirectoryPath + '/SMIU_TimeTable.xlsx', wbout, 'ascii').then((r) => {
            Toast.show({
              type: 'success',
              text1: 'Status',
              text2: "Time Table Updated in Excel Sheet"
            });
           }).catch((e) => {
            console.log('Error', e);
          });
          console.log("Permission granted");
        } else {
          console.log("Permission denied");
        }
      } else {
        let sample_data_to_export = excelArr;
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(sample_data_to_export)
        XLSX.utils.book_append_sheet(wb, ws, "Users")
        const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
        RNFS.writeFile(RNFS.ExternalStorageDirectoryPath + '/SMIU_TimeTable.xlsx', wbout, 'ascii').then((r) => {
          Toast.show({
            type: 'success',
            text1: 'Status',
            text2: "Time Table Updated in Excel Sheet"
          });
         }).catch((e) => {
          console.log('Error', e);
        });
      }
    } catch (e) {
      console.log('Error while checking permission');
      console.log(e);
      return
    }
  }

  useEffect(() => {
    let isMount = true
    if (isMount) {
      isLoggedIn();
      viewSlots();
    }
    return () => {
      isMount = false
    };
  }, []) 

  return (
    <AuthContext.Provider value=
      {{
        Login,
        bookSlot,
        viewSlots,
        deleteSlot,
        updateSlot,
        logOutUser,
        excelData,
        BookedSlots,
        bkedSlots,
        data,
        listArr
      }}
    >
      {children}
    </AuthContext.Provider >
  )
}

export default AuthProvider