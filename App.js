import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//estilos de las cosas
const styles = StyleSheet.create(
  {
    letraGordita: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    letra: {
      fontSize: 20,
      color: 'black',
    },
    view: {
      padding: 10,
    },
    informacion: {
      textAlign: 'center',
      padding: 30,
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
    },
    tinyLogo: {
      padding: 40,
      marginHorizontal: 170,
      width: 50, 
      height: 50,
    },
    busqueda: {
      flexDirection: 'row',
      padding:30,
    },
    frutas: {
      flex: 2,
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
      color: 'black',
    },
    opciones: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
    },
    input: {
      flex: 3,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
      borderWidth: 1,
    }
  }
)

function ListadoStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoPantalla}
        options={{
          title: 'Busqueda',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetalleUsuarioPantalla}
        options={{
          title: 'Frutas',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

function InformacionPantalla() {
  const [fruits,setFruits]=useState(null);

  useEffect(() => {
    fetch("http://10.0.2.2:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fectch', responseJson);
        setFruits(responseJson)
      })
      .catch(error => console.log(error))
  }, []);

  const renderizarItem = ({ item }) => (
    <View>
      <Text style={styles.letraGordita}>Nombre: {item.name}       Precio: {item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={fruits}
      renderItem={renderizarItem}
      keyExtractor={item=>item.id}
    />
  );
}

function DetalleUsuarioPantalla({ route }) {

  const [fruits,setFruits]=useState(null);

    useEffect(() => {
      fetch("http://10.0.2.2:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
          console.log('getting data from fectch', responseJson);
          setFruits(responseJson)
        })
        .catch(error => console.log(error))
    }, []);

    const renderizarItem = ({ item }) => (
      <View>
        
        <Text style={styles.letraGordita}>Nombre: {item.name}       Precio: {item.price}</Text>
      </View>
    );

    return (
      <FlatList
        data={fruits}
        renderItem={renderizarItem}
        keyExtractor={item=>item.id}
      />
    );
}

function ListadoPantalla({ navigation }) {

  const [edad, setEdad] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.informacion}> Agrea una fruta nueva </Text>
      <View style={styles.busqueda}>
        <Text style={styles.frutas}> Frutas </Text>
        <ModalDropdown style={styles.input} textStyle={styles.opciones} options={['option 1', 'option 2']}/>
      </View>
      
      <Button title='Añadir' style={styles.informacion} onPress={() => navigation.navigate('Detalles')} />

    </SafeAreaView>
  );
}

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
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

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >


        <Tab.Screen options={{ headerShown: false }} name="Historia" component={InformacionPantalla}
          options={{
            title: 'Frutas que tenemos',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;