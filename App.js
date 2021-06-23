import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen'

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
},
{
defaultNavigationOptions: ({navigation})=> ({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    if(routeName === "WriteStory"){
      return(
        <Image 
        source={require("./assets/Write.png")}
        style={{width: 40, height: 40}}
        />)
    }
    else if(routeName === "ReadStory"){
      return(
        <Image 
        source={require("./assets/Read.png")}
        style={{width: 40, height: 40}}
        /> )
    }
  }
})
}
);

const AppContainer = createAppContainer(TabNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
