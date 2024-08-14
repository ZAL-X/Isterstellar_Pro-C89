import { NavigationRouteContext } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import { back } from 'react-native/Libraries/Animated/src/Easing';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.driodSafeArea}/>
                <ImageBackground source={require('../assets/Galaxia.jpeg')} style={styles.backgroundImage}>

                    <View style={styles.titlebar}>
                        <Image source={require('../assets/Creeper.png')} style={styles.icon}></Image>   
                        <Text style={styles.titleText}>Aplicación Estelar</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("Naves espaciales")
                    }>
                        <Image source={require('../assets/Cohete.png')} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Naves espaciales</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("Mapa estelar")
                    }>
                        <Image source={require('../assets/Starlite.png')} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Mapa estelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("Imágenes diarias")
                    }>
                        <Image source={require('../assets/camera.png')} style={styles.routeImage}></Image>
                        <Text style={styles.routeText}>Imágenes diarias</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#D0E6F0"
    },
    driodSafeArea:{
        marginTop: Platform.OS==="android" ? StatusBar.currentHeight:0
    },
    routeCard:{
        justifyContent:"center",
        alignItems:"center",
        margin:30,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"aqua"
    },
    titleBar:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"aqua",
        marginLeft:500,
        margin:40,
    },
    routeText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#D11583",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        margin:10,
        marginLeft:30,
        marginRight:30,
        borderRadius:100,
        backgroundColor:"aqua"
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    routeImage:{
        position:'absolute',
        top:-20,
        right:-15,
        height:100,
        width:100,
        resizeMode:'contain',
    },
    icon:{
        width:150,
        height:150,
        justifyContent:"center",
        alignContent:"center",
        marginLeft:550,
    }
})