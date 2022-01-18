import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import ListadoPantalla from './src/container/ListadoPantalla';
import InformacionPantalla from './src/container/InformacionPantalla';

// function InformacionPantalla() {
//   const [fruits, setFruits] = useState(null);
//   const [refreshing, setRefreshing] = useState(false); 
//   const [loading, setLoading] =  useState(true);

//   const wait = (timeout) => {
//     return new Promise(resolve => {
//       setTimeout(resolve, timeout);
//     });
//   }

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false), getFruits());
//   }, []);

//   function getFruits() {
//     fetch("http://10.0.2.2:8080/fruits")
//       .then(response => response.json())
//       .then((responseJson) => {
//         console.log('getting data from fectch', responseJson);
//         setFruits(responseJson);
//         setLoading(false);
//       })
//       .catch(error => console.log(error))
//   }

//   useEffect(() => {
//     getFruits();
//   }, [])

//   function imagenFruta(item){
//     if('Kiwi'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/kiwi.png')}/>
//     else if ('Manzana'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/manzana.png')}/>
//     else if ('Melocotón'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/melocoton.png')}/>
//     else if ('Naranja'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/naranja.png')}/>
//     else if ('Piña'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/piña.png')}/>
//     else if ('Platano'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/platano.png')}/>
//     else if ('Uvas'===item.name)
//     return <Image style={styles.frutaLogo} source={ require('./src/imagenes/uva.png')}/>
//   }

//   const renderizarItem = ({ item }) => (
    
//     <View style={styles.view}>
//     {imagenFruta(item)}
//       <View>
//         <Text style={styles.textofrutas}>
//           {item.name}
//         </Text>
//         <Text style={styles.textocentro}>
//           Precio: 
//           <Text> </Text>
//           <Text style={styles.preciofrutas}>
//             {item.price}€ 
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );

//   if(loading){
//     return (<Text>Cargando...</Text>)
//   }
//   else{
//     return (
//       <ScrollView 
//         refreshControl={
//         <RefreshControl 
//           refreshing={refreshing}
//           onRefresh={onRefresh}
//         />
//       }>
//         <Text> </Text>
//         <FlatList
//           data={fruits}
//           renderItem={renderizarItem}
//           keyExtractor={item=>item.id}
//         />
//       </ScrollView> 
//     );
//   }
// }

// function ListadoPantalla() {

//   const [fruit,setFruit]=useState(null);
//   const [price,setPrice]=useState(null);

//   const onPress = () => {
//     fetch('http://10.0.2.2:8080/fruits', {
//       method: 'POST', 
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         "name": fruit,
//         "price": price
//       }),
      
//     })
//     .then((responseJson) => {
//       console.log('getting data from fectch', responseJson);
//       Alert.alert("Fruta añadida correctamente")
//       setFruit(null);
//       setPrice(null);
//     })
//     .catch(error => console.log(error));
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.informacion}> Agrega una fruta nueva </Text>
//       <View style={styles.busqueda}>
//         <Text style={styles.frutas}> Frutas </Text>
//         <ModalDropdown style={styles.select} textStyle={styles.opciones}
//           options={['Piña', 'Manzana','Melocoton', 'Uvas','Naranja','Kiwi','Platano','Pera']}
//           onSelect={(id, fruit) => setFruit(fruit)}/>
//       </View>
//       <View style={styles.busqueda}>
//         <Text style={styles.frutas}> Precio </Text>
//         <TextInput style={styles.input} onChangeText={price => setPrice(price)} />
//       </View>  
      
//       <Button title='Añadir' style={styles.informacion} onPress={onPress} />

//     </SafeAreaView>
//   );
// }

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