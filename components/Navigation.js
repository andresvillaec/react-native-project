import React, { Component } from 'react'
import CreateDeck from './CreateDeck'
import DeckList from './DeckList'
import DeckItem from './DeckItem'
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from '../utils/colors'

// Config for TabNav
const RouteConfigs = {
  DeckList:{
    name: "DeckList",
    component: DeckList,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={purple} />, title: 'Decks'}
  }, 
  CreateDeck:{
    component: CreateDeck,
    name: "Add Deck",
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={purple} />, title: 'Add Deck'}
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
    options: {
      title: 'Decks',
      headerShown: false,
    }
  }, 
  DeckItem:{
    name: "DeckItem",
    component: DeckItem,
    options: {
      title: 'udacicards',
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

class Navigation extends Component {
  render() {
    console.log(this.props)
    return (
      <NavigationContainer >
        <MainNav />
      </NavigationContainer>
    )
  }
}

function mapDispatchToProps() {
  return {
  };
}
export default connect(null, mapDispatchToProps)(Navigation);
