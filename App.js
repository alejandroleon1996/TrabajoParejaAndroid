import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList, StatusBar, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create(
  {
    standard: {
      fontSize: 25,
      color: 'black',
    },
    negrita: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    view: {
      padding: 10
    },
    info: {
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
    }
  }
)

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Listado') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
  
      <Tab.Screen options={{ headerShown: false }} name="Historia" component={Historia}
          
          options={{
            title: 'Historia',
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
      }} />
      <Tab.Screen options={{ headerShown: false }} name="Listado" component={Listado} />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

function Historia() {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.info}> ¡La Historia de los Smartphones y su evolucion! </Text>
      <Text> </Text>
      <Text>En primer lugar os presento a uno de los primeros smartphone de nokia, el nokia C5 su SO era propio, recalco que para mi smartphone es todo movil que pueda instalar whatsapp</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/winaldo.jpg")}
      />
      <Text> </Text>
      <Text>En segundo lugar os presento a uno de los Smartphones mas vendidos de la historia con su SO propio la BlackBerry</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/2.jpg")}
      />
      <Text> </Text>
      <Text>He aquí uno de los primeros moviles decentes con Android el SO ganador el Samsung Galaxy S</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/3.jpg")}
      />
      <Text> </Text>
      <Text>He aquí el primer Smarphone TOP de la historia, el iPhone 3G con SO propio (IOs), aún se usa en la actualidad y acapara el 25% del mercado</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/4.jpg")}
      />
      <Text> </Text>
      <Text>El primer Smartphone con varios nucleos(2), un gran avance en el mundo de los smartphones el Samsung Galaxy S2</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/5.jpg")}
      />
      <Text> </Text>
      <Text>El primer Smartphone decente sumergible con además 4 nucleos a 2.3 ghz, una pasada, el Xperia Z1</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/6.jpg")}
      />
      <Text> </Text>
      <Text>El primer Smartphone con refrigeracion liquida, además de tener el procesador mas grande de su generación, una locura y a un bajo presupuesto(250/300€). El pocophone F1 (de xiaomi)</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 600, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/7.png")}
      />
      <Text> </Text>
      <Text>El primer Smartphone tope de gama que se puede doblar como los moviles de antaño</Text>
      <Text> </Text>
      <Image
      style= {{ width: 300, height: 300, marginBottom: 50}}
      source={require("C:/pmdm/MyFirstProject/assets/8.jpg")}
      />
    </View >
    </ScrollView>
  );
}

function Listado() { 
  return (
    <HomeStack.Navigator initialRouteName="Busqueda">
      <HomeStack.Screen name="Busqueda" component={BotonPantalla}
        options={{
          title: 'Busqueda',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Usuarios" component={UsuarioFiltrado} 
        options={{
          title: 'Usuarios',
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

function UsuarioFiltrado({ route }) {
  const personas = 
  [ { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
 { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
 { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
 { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
 { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
 { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
 { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
 { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
 { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
 { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
 { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
 { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
 { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
 { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
 { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
 { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
 { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
 { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }]

 function funcionBoton ({item}){
   if(item.age==route.params.numero){
     return <View style={styles.standard}>
       <Text>{item.name}, cuyo sexo es {item.sex}</Text>
       <Text>y su id es el munero {item.id}.</Text>
       <Text> </Text>
     </View>
   }
 }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Los usuarios con {route.params.numero} años son: </Text>
      <Text>-</Text>
      <FlatList
      data={personas}
      renderItem={funcionBoton}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

function BotonPantalla({ navigation }) {
  const [number, setNumber] = useState(0);
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui puedes filtrar los usuarios segun su edad:</Text>
        <Text> </Text>      
        <TextInput
        style={{borderColor:'tomato',borderWidth:3,width:100,}}
        onChangeText={x => setNumber(x)}
        keyboardType="numeric"
        />
      <Text> </Text>
      <Button
        title="Filtrar"
        onPress={() => navigation.navigate('Usuarios',{numero:number})}
      />
      </View>
  );
}

export default App;