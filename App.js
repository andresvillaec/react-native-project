import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';
import CreateDeck from './components/CreateDeck'
import DeckList from './components/DeckList'
import DeckItem from './components/DeckItem'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'
import Constants from 'expo-constants'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

function CustomStatusBar ({backgroundColor, ...props}){
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
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
      height: 80,
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

// Config for StackNav
const StackNavigatorConfig = {
  headerMode: "screen"
}
const StackConfig = {
  TabNav:{
    name: "Home",
    component: TabNav,
    options: {headerShown: false}
  }, 
  DeckItem:{
    name: "DeckItem",
    component: DeckItem,
    options: {
      headerTintColor: white,
      headerStyle:{
        backgroundColor: purple
      }
    }
  },
  CreateDeck:{
    name: "CreateDeck",
    component: CreateDeck,
    options: {
      headerTintColor: white,
      headerStyle:{
        backgroundColor: purple
      }
    }
  }
}
const Stack = createStackNavigator();
const MainNav = () =>(
  <Stack.Navigator {...StackNavigatorConfig}>
    <Stack.Screen {...StackConfig['TabNav']} />
    <Stack.Screen {...StackConfig['DeckItem']} />
    <Stack.Screen {...StackConfig['CreateDeck']} />
  </Stack.Navigator>
)

export default class App extends React.Component{
  render(){
    const store = createStore(reducer)
    return(
      <Provider store={store}>
        <CustomStatusBar backgroundColor={purple} barStyle='light-content' />
        <NavigationContainer >
          <MainNav />
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
