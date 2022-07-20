import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import { useNavigation } from '@react-navigation/native';
import Booked from '../components/Booked';

const DrawerNav = createDrawerNavigator();
const { width: WIDTH } = Dimensions.get("window")

const Drawer = (props) => {
    const navigation = useNavigation();
    return (
        <DrawerNav.Navigator
            sceneContainerStyle={{ backgroundColor: '#fff' }}
            drawerContent={props => < CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                headerTitleStyle: {
                    color: "transparent"
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTransparent: false,
                drawerActiveBackgroundColor: 'maroon',
                drawerStyle: {
                    width: WIDTH / 1.5,
                    backgroundColor: 'rgba(255, 255, 255,0.8)',
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                },
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#000',
                drawerLabelStyle: {
                    marginLeft: -10,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 0.035 * WIDTH,
                },
            }}>
            <DrawerNav.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="list-outline" size={20} color={color} />
                    ),
                }}
            />
            <DrawerNav.Screen
                name="Booked"
                component={Booked}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="locate" size={20} color={color} />
                    ),
                }}
            />
        </DrawerNav.Navigator >
    );
};

export default Drawer;