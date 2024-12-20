import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMap } from '../redux/geofenceSlice';

const Save: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();

    const _saveMap = () => {
        dispatch(addMap({id:Math.random().toString(), name:"map"+((Math.random()*10).toFixed(2).toString())}))
        navigation.navigate('MapLists')
        console.log('Saved Map')
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={() => {
        _saveMap()
      }}
      style={styles.floatingButton}>
        <Text style={styles.buttonText}> Save Map</Text>
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
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    backgroundColor: '#009688',
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
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Save;
