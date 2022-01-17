import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button, TextInput } from 'react-native';
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
      marginHorizontal: 50
    },
    select: {
      flex: 3,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
      borderWidth: 1,
    },
    input: {
      flex: 3,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
      borderWidth: 1,
    },
    frutaLogo: {
      marginRight: 5,
      width: 80,
      height: 80,
    }
  }
)

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

  function imagenFruta(item){
    if('kiwi'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/kiwi.png')}/>
    else if ('manzana'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/manzana.png')}/>
    else if ('melocoton'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/melocoton.png')}/>
    else if ('naranja'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/naranja.png')}/>
    else if ('piña'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/piña.png')}/>
    else if ('platano'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/platano.png')}/>
    else if ('uva'===item.name)
    return <Image style={styles.frutaLogo} source={ require('./src/image/uva.png')}/>
  }

  const renderizarItem = ({ item }) => (
    
    <View
    style={{
      flexDirection: 'row',
      marginLeft: 10,
      marginBottom: 10,
      borderBottomColor: 'blue',
      borderBottomWidth: 1,
      borderBottomStartRadius: 3,
      textAlign: "center",
    }}>
    {imagenFruta(item)}
    <View>
      <Text
        style={{
          fontFamily: 'Gill Sans Extrabold',
          fontWeight: 'bold',
          fontSize: 17,
          marginLeft: 80,
          textAlign: "center",
          color:'black',
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginLeft: 80,
          marginTop:20,
          fontSize: 15,
        }}>
        Precio: 
        <Text> </Text>
      <Text
        style={{
          fontFamily: 'Comic',
          color: 'red',
        }}>
          {item.price}€
      </Text>
      </Text>
    </View>
  </View>
);

  return (
    <View>
    <Text> </Text>
    <FlatList
      data={fruits}
      renderItem={renderizarItem}
      keyExtractor={item=>item.id}
    />
    </View>
  );
}

function ListadoPantalla() {

  const [fruit,setFruit]=useState(null);
  const [price,setPrice]=useState(null);

  const onPress = () => {
    fetch('http://10.0.2.2:8080/fruits', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": fruit,
        "price": price
      }),
    })
    .then((responseJson) => {
      console.log('getting data from fectch', responseJson);
      Alert.alert("Fruta añadida correctamente");
      setFruit(null);
      setPrice(null);
    })
      .catch(error => console.log(error));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.informacion}> Agrega una fruta nueva </Text>
      <View style={styles.busqueda}>
        <Text style={styles.frutas}> Frutas </Text>
        <ModalDropdown style={styles.select} textStyle={styles.opciones}
          options={['Piña', 'Manzana','Melocotón', 'Uvas','Naranja','Kiwi','Plátano','Pera']}
          onSelect={(fruit) => setFruit(fruit)}/>
      </View>
      <View style={styles.busqueda}>
        <Text style={styles.frutas}> Precio </Text>
        <TextInput style={styles.input} onChangeText={price => setPrice(price)} />
      </View> 
      
      <Button title='Añadir' style={styles.informacion} onPress={onPress} />

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
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoPantalla} 
          options={{
          title: 'Busqueda',
          headerStyle: {
            backgroundColor: 'blue',
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