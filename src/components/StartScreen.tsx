import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';


const StartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [mapData, setMapData] = useState([useSelector((state:any) => state.maps.savedMaps)]);

  return (
    <View style={styles.container}>
        
            <LottieView 
            style={{ height: 350, width: 350, alignSelf:'center', 
                justifyContent:'center', alignItems:'center',
                marginTop:50,
            }}
            source={require('../resource/loc2.json')}
             autoPlay loop />
       
        {
            mapData.length > 0 &&
            <TouchableOpacity 
        onPress={() => navigation.navigate('MapLists')}
        style={styles.listButton}>
            <Text style={styles.listbuttonText}>Saved Maps</Text>
        </TouchableOpacity>
        }

      <TouchableOpacity 
      onPress={() => navigation.navigate('MapScreen')}
      style={styles.floatingButton}>
        <Text style={styles.buttonText}>+ Add Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    position: 'relative',
  },
  animationContainer: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#8BC34A', 
    padding: 15,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listbuttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  listButton: {
    margin:50,
    backgroundColor: '#8BC34A',
    padding: 15,
    borderRadius: 25,
  },
});

export default StartScreen;
