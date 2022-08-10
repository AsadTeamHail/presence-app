// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/ProfileScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import MarkingScreen from './screens/MarkingScreen';



function App() {
  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{headerShown:false} 
          }  />
        <Stack.Screen name="Tasks" component={AboutScreen} options={{
          headerStyle: {
            backgroundColor: '#296ecf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="Options" component={PostScreen}  options={{
          headerStyle: {
            backgroundColor: '#296ecf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Timings" component={ProfileScreen} options={{
          headerStyle: {
            backgroundColor: '#296ecf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="Attendance" component={AttendanceScreen} options={{
          headerStyle: {
            backgroundColor: '#296ecf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Marking" component={MarkingScreen} options={{
          headerStyle: {
            backgroundColor: '#296ecf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
