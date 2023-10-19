import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text} from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../screens/Login';
import Registration from "../screens/Registration";
import Map from "../screens/map";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Login" component={Login} />
                <Stack.Screen name = "Registration" component={Registration}/>
                <Stack.Screen name = "Map" component={Map}/>
            </Stack.Navigator>
            <Text> Navigation </Text>
        </NavigationContainer>
    );
};

export default Navigation;