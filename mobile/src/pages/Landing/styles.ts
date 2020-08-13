import { StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'//todo contéudo da imagem fica visivel o cover corta a imagem
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 60,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },
    button:{
        height:150,
        width: '48%',
        backgroundColor: "#333",
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonPrimary:{
        backgroundColor: '#9871F5',
    },
    buttonSecondary:{
        backgroundColor: "#14D361",
    },
    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: "#fff",
        fontSize: 20,
    },
    totalConexoes:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,    
        maxHeight: 140,
        marginTop: 20,

    }
});


export default styles;