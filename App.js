import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import Navigation from './components/Navigation'
import { purple } from './utils/colors'
import Constants from 'expo-constants'

function CustomStatusBar ({backgroundColor, ...props}){
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component{

  render(){
    const store = createStore(reducer, middleware)
    return(
      <Provider store={store}>
        <CustomStatusBar backgroundColor={purple} barStyle='light-content' />
        <Navigation/>
      </Provider>
    )
  }
}