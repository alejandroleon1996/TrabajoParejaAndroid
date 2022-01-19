import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
{
    informacion: {
        textAlign: 'center',
        padding: 30,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
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
    textofrutas: {
        fontFamily: 'Gill Sans Extrabold',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 80,
        textAlign: "center",
        color:'black',
    },
    textocentro: {
        textAlign: "center",
        marginLeft: 80,
        marginTop:20,
        fontSize: 15,
        color: 'black'
    },
    preciofrutas: {
        fontFamily: 'Comic',
        color: 'red',
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
    view: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        borderBottomStartRadius: 3,
        textAlign: "center",
    },
    frutaLogo: {
        marginRight: 5,
        width: 80,
        height: 80,
    }
}
)

export default styles;