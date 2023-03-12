import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import CalendarScreen from "./screens/CalendarScreen";
import PieScreen from './screens/PieScreen';
import IdentifyScreen from './screens/IdentifyScreen';
import BreakdownScreen from './screens/BreakdownScreen';

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
          headerTintColor: '#ffD05C',
          title: "return home"
        }}
        />
        <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerStyle: {backgroundColor: '#303030'},
          headerTintColor: '#ffD05C',
          title: "return home"
        }}
        />
        <Stack.Screen
        name="Pie"
        component={PieScreen}
        options={{
          headerStyle: {backgroundColor: '#303030'},
          headerTintColor: '#ffD05C',
          title: "return to calendar"
        }}
        />
        <Stack.Screen
        name="Identify"
        component={IdentifyScreen}
        options={{
          headerStyle: {backgroundColor: '#303030'},
          headerTintColor: '#ffD05C',
          title: "return to camera"
        }}
        />
        <Stack.Screen
        name="Breakdown"
        component={BreakdownScreen}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}