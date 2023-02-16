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
    } from "react-native";
<ImageBackground>
<TouchableOpacity style={styles.routeCard} onPress={() =>
this.props.navigation.navigate("TonightSky")
}>
<Text style={styles.routeText}>Tonight Sky</Text>
<Image source={requestAnimationFrame("../assets/night-sky.png")} style={{width:80, height:80}}></Image>
</TouchableOpacity>
</ImageBackground>

export default class HomeScreen extends Component {
    render() {
        return (
       
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Home</Text>
            </View>
        
        )
    }
}