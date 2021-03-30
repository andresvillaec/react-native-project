import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

// Config for TabNav
const RouteConfigs = {
  DeckList:{
    name: "DeckList",
    component: DeckList,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />, title: 'Decks'}
  }, 
  CreateDeck:{
    component: CreateDeck,
    name: "Add Deck",
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'Add Deck'}
  },
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tab = Platform.OS === 'ios'
        ? createBottomTabNavigator() 
        : createMaterialTopTabNavigator()

const TabNav = () =>(
  <Tab.Navigator {...TabNavigatorConfig}>
    <Tab.Screen {...RouteConfigs['DeckList']} />
    <Tab.Screen {...RouteConfigs['CreateDeck']} />
  </Tab.Navigator>
)


// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       <StatusBar style="auto" />
//       <NavigationContainer >
//         <TabNav />
//       </NavigationContainer>
//     </View>
//   );
// }

export default class App extends React.Component{
  render(){
    const store = createStore(reducer)
    return(
      <Provider store={store}>
        <View style={{flex:1}}>
        {/* <UdaciStatusBar backgroundColor={purple} barStyle='light-content' /> */}
        <StatusBar style="auto" />
          <NavigationContainer >
            <TabNav />
          </NavigationContainer>
        </View>
      </Provider>    
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
