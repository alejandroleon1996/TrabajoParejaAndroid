import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import ListadoPantalla from './src/container/ListadoPantalla';
import InformacionPantalla from './src/container/InformacionPantalla';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#97E0BC',
          inactiveBackgroundColor: '#B1EACE',
        }}
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Listado') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Historia') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle:{
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          
        })}
      >


        <Tab.Screen options={{ headerShown: false }} name="Historia" component={InformacionPantalla}
          options={{
            title: 'Listado de Frutas',
            headerStyle: {
            backgroundColor: '#97E0BC',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoPantalla} 
          options={{
          title: 'Añadir Frutas',
          headerStyle: {
            backgroundColor: '#97E0BC'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;