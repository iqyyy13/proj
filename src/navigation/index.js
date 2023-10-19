import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../screens/Login';
import Registration from "../screens/Registration";
import maps from "../screens/maps";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Login" component={Login} />
                <Stack.Screen name = "Registration" component={Registration}/>
                <Stack.Screen name = "maps" component={maps}/>
                <Stack.Screen name = "ForgotPassword" component={ForgotPassword}/>
            </Stack.Navigator>
            <Text> Navigation </Text>
        </NavigationContainer>
    );
};

export default Navigation;