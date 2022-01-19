import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, ScrollView, RefreshControl } from 'react-native';
import styles from '../styles/styles';
import ListadoPantalla from './ListadoPantalla';

function InformacionPantalla() {
    const [fruits, setFruits] = useState(null);
    const [refreshing, setRefreshing] = useState(false); 
    const [loading, setLoading] =  useState(true);
  
    const wait = (timeout) => {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    }
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false), getFruits());
    }, []);
  
    function getFruits() {
      fetch("http://10.0.2.2:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
          console.log('getting data from fectch', responseJson);
          setFruits(responseJson);
          setLoading(false);
        })
        .catch(error => console.log(error))
    }
  
    useEffect(() => {
      getFruits();
    }, [])
  
    function imagenFruta(item){
      if('Kiwi'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/kiwi.png')}/>
      else if ('Manzana'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/manzana.png')}/>
      else if ('Melocoton'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/melocoton.png')}/>
      else if ('Naranja'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/naranja.png')}/>
      else if ('Piña'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/piña.png')}/>
      else if ('Platano'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/platano.png')}/>
      else if ('Uvas'===item.name)
      return <Image style={styles.frutaLogo} source={ require('../imagenes/uva.png')}/>
    }
  
    const renderizarItem = ({ item }) => ( 
      <View style={styles.view}>
      {imagenFruta(item)}
        <View>
          <Text style={styles.textofrutas}>
            {item.name}
          </Text>
          <Text style={styles.textocentro}>
            Precio: 
            <Text> </Text>
            <Text style={styles.preciofrutas}>
              {item.price}€ 
            </Text>
          </Text>
        </View>
      </View>
    );
  
    if(loading){
      return (<Text>Cargando...</Text>)
    }
    else{
      return (
        <View>
        <ScrollView 
          refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          <Text> </Text>
          <FlatList
            data={fruits}
            renderItem={renderizarItem}
            keyExtractor={item=>item.id}
          />
        </ScrollView> 
        </View>
      );
    }
}

export default InformacionPantalla;