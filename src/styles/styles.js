import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
{
    container: {
        backgroundColor:'#CCF4FF',
        width: '100%',
        height: '100%'
    },
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
        fontWeight: 'bold',
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
        marginHorizontal: 50,
        marginTop: 10,
    },
    select: {
        flex: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        borderWidth: 1,
        backgroundColor:'white',
    },
    modal:{
        padding: 20,
        width: 197,
        
    },
    input: {
        flex: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        borderWidth: 1,
        backgroundColor:'white',
    },
    view: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        borderBottomColor: 'cyan',
        borderBottomWidth: 1,
        borderBottomStartRadius: 3,
        textAlign: "center",
        backgroundColor: '#CCF4FF',
    },
    frutaLogo: {
        marginRight: 5,
        width: 80,
        height: 80,
    },
    boton: {
        color: 'black',

        alignItems: 'center',
        marginLeft: 160,
        textAlign: 'center',
        backgroundColor: 'lime',
        borderRadius: 200,
        width: 100,
        marginTop:35,
        borderWidth:1,
    },
    botonText:{
        fontWeight: 'bold',
    }
}
)

export default styles;