import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import PieScreen from "./screens/PieScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerStyle: {backgroundColor: '#303030'},
          headerTintColor: '#ff8642',
          title: "home"
        }}
        />
        <Stack.Screen
        name="Pie"
        component={PieScreen}
        options={{
          headerStyle: {backgroundColor: '#303030'},
          headerTintColor: '#ff8642',
          title: "home"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}