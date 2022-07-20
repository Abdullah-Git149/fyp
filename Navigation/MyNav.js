import React, { useContext } from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Flash from '../components/Flash';
import Signin from '../components/Signin';
import Home from '../components/Home';
import Class from '../components/Class';
import Classes from '../components/Classes';
import BookIt from '../components/BookIt';
import Booked from '../components/Booked';
import Drawer from '../Navigation/Drawer';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

export default function MyNav() {
  const { data } = useContext(AuthContext);
   return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: 'black',
      }
      }
    >
      {data ? <>
        <Stack.Screen options={{ headerShown: false }} name="Drawer" component={Drawer} />
        <Stack.Screen options={{ headerShown: false }} name="Booked" component={Booked} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: true, title: "", headerTransparent: true }} name="BookIt" component={BookIt} />
        <Stack.Screen options={{ headerShown: false }} name="Flash" component={Flash} />
        <Stack.Screen options={{ headerShown: false, }} name="Class" component={Class} />
        <Stack.Screen options={{ headerShown: true, title: "", headerTransparent: true }} name="Classes" component={Classes} />
      </> : <>
        <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
      </>}
    </Stack.Navigator>
  );
}
