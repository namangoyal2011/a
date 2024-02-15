import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      console.log();
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'orange',justifyContent:'center', 
    alignItems:'center', paddingBottom:80, paddingTop:20}}>
        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'purple',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url = require('./gangsta.mp3');
              this.playSound(url);
            }}>
            <Text> Sound 1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
               width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'blue',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url = require('./likecrazy.mp3');
              this.playSound(url);
            }}>
            <Text> Sound 2</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'yellow',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url = require('./closertome.mp3');
              this.playSound(url);
            }} >
            <Text> Sound 3</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
               width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'green',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url = require('./boywithluv.mp3');
              this.playSound(url);
            }}>
            <Text> Sound 4</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: 'red',
            borderWidth: 2,
            borderColor: 'white',
            marginTop:40
          }}
          onPress={() => {
             Audio.setIsEnabledAsync(false);
          }}>
          <Text> Stop Sound </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
