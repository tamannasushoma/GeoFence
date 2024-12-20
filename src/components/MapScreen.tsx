import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, TouchableOpacity, Text, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { addMap } from '../redux/geofenceSlice';
import { useDispatch } from 'react-redux';
// import RNLocation from 'react-native-location';

const MapScreen : React.FC<{ navigation: any }> = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationGranted, setLocationGranted] = useState(false);
  const [region, setRegion] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  });
  const dispatch = useDispatch();

  const _saveMap = () => {
      dispatch(addMap({id:Math.random().toString(), name:"map"+((Math.random()*10).toFixed(2).toString())}))
      navigation.navigate('MapLists')
      console.log('Saved Map')
  }

  useEffect(() => {

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This app requires access to your location.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            setLocationGranted(granted === PermissionsAndroid.RESULTS.GRANTED);
        } else {
            // For iOS, you can directly set locationGranted to true
            setLocationGranted(true);
        }
    };
    requestLocationPermission();
  }, []);


//   if (!currentLocation) {
//     return <ActivityIndicator 
//     size="large" 
//     color="#0000ff" 
//     />;
//   }

  return (
    <View style={styles.container}>
        <View style={styles.mapContainer}>
        <MapView
       provider={undefined} 
       style={styles.map}
       region={region}
     >
        <Marker coordinate={region}/>
     </MapView>
        </View>


     <TouchableOpacity 
      onPress={() => {
        _saveMap()
      }}
      style={styles.floatingButton}>
        <Text style={styles.buttonText}> Save Map</Text>
      </TouchableOpacity>
   </View>
   
    //   {/* <MapView
    //     style={styles.map}
    //     initialRegion={currentLocation}
    //     showsUserLocation={true}
    //     showsMyLocationButton={true}
    //   >
    //     <Marker coordinate={currentLocation} title="You are here" />
    //   </MapView> */}
  )
};

export default MapScreen;

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "80%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapContainer: {
    // position:'relative',
    flex:1,
    height:800,
    width:"100%",
    marginBottom:20,
    borderWidth:1,
    borderColor:"#009688",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  floatingButton: {
    // position: 'absolute',
    
    // bottom: 0,
    // right: 20,
    // left: 20,
    width:"80%",
    marginBottom:-100,
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
