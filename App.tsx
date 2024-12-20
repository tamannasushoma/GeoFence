import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
// import MapLists from './src/components/MapLists';
import MapScreen from './src/components/MapScreen';
import StartScreen from './src/components/StartScreen';
import Save from './src/components/Save';
import MapLists from './src/components/MapLists';
import SplashScreen from 'react-native-splash-screen';


// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    // Hide the splash screen after 2 seconds
    setTimeout(() => {
        SplashScreen?.hide();
    }, 2000);
}, []);


  return (
    <Provider store={store}>
      <NavigationContainer
      >
        <Stack.Navigator initialRouteName="StartScreen">

        <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ title:"Home" }}
          />
         
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ title:"Map" }}
          />
           <Stack.Screen
            name="SaveScreen"
            component={Save}
            options={{ title:"Add Map" }}
          />
           <Stack.Screen
            name="MapLists"
            component={MapLists}
            options={{ title:"Saved Maps",
              headerBackAccessibilityLabel:"Back",
              headerBackTitle:"Back",
              headerBackTitleStyle:{
                color:'black',
              }
              
             }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
