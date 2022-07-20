import React, { useRef, useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import admin from "../media/download.png"
const adminImage = Image.resolveAssetSource(admin).uri
const { width: WIDTH } = Dimensions.get("window")
const { height: HEIGHT } = Dimensions.get("window")
import { AuthContext } from '../context/AuthContext';

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const { logOutUser } = useContext(AuthContext);

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    };

    const removeData = () => {
        logOutUser()
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'transparent', }}>
                <View style={{
                    alignItems: 'center', width: WIDTH / 1.5, paddingVertical: 10, backgroundColor: "maroon"
                }}>
                    <TouchableOpacity onPress={toggleDrawer} style={{ marginLeft: "auto", marginRight: 15, marginTop: 10, }}>
                        <Ionicons style={{ color: "#fff" }} name="close-sharp" size={30} />
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: "column",
                        height: 70,
                    }}>
                        <View style={{
                            flexDirection: "row-reverse",
                            marginVertical: 20,
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <TouchableOpacity style={{ width: 70, height: 70, }}  >
                                    <Image resizeMode="cover" style={{ width: "100%", height: "100%", borderRadius: 70 / 2 }}
                                        source={{
                                            uri: adminImage
                                        }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flexDirection: "column",
                                justifyContent: 'center',
                                marginLeft: "5%"
                            }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 0.04 * WIDTH }}>Admin</Text>
                                <Text style={{ color: "white", fontSize: 0.03 * WIDTH }}>Admin@smiu.edu.pk</Text>

                            </View>
                        </View>
                    </View>
                </View>
                <DrawerContentScrollView
                    {...props}
                    contentContainerStyle={{ backgroundColor: 'transparent', }}>
                    <View style={{ flex: 1, backgroundColor: 'transparent', paddingHorizontal: 0, paddingTop: 5 }}>
                        <DrawerItemList {...props} />
                        <TouchableOpacity onPress={() => removeData()} style={{ paddingVertical: 15, paddingLeft: 20, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons style={{ color: "#000" }} name={"log-out-outline"} size={22} />
                                <Text
                                    style={{
                                        fontSize: 0.035 * WIDTH,
                                        color: "#000",
                                        fontFamily: 'Roboto-Medium',
                                        marginLeft: 20,
                                    }}>
                                    Log out
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </DrawerContentScrollView>
            </View >
        </>
    );
};
const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    btn: {
        paddingVertical: 15,
        color: 'white',
        borderRadius: 30,
        marginVertical: 10,
        backgroundColor: "#56BAEC",
        width: "70%",
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    },

});
export default CustomDrawer;