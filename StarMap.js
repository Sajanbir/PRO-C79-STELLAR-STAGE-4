import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
npm install 'react-native-webview'
export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>StarMap Screen!</Text>
            </View>
        )
    }
}

    <><WebView
        scalesPageToFit={true}
        source={{ uri: path }}
        style={{ marginTop: 20, marginBottom: 20, }} 
        />
    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
        placeholder="Enter your latitude"
        placeholderTextColor="#ffff#000000"
        onChangeText={(_text)=>{
            this.setState({});
        } } /></>

        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'