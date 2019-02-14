import React from 'react';



import  HomeScreen from './src/screen/HomeScreen';
import  DetailsScreen from './src/screen/DetailsScreen';
import styles from './src/styles/style';

import  TabScreen from './src/screen/TabScreen';

    import { StyleSheet, Text, View,Button } from 'react-native';




import {createAppContainer, createStackNavigator, StackNavigator,createBottomTabNavigator } from 'react-navigation';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';


 class App extends React.Component {
  render() {
    return (

     <MainScreenNavigator
                    onNavigationStateChange={() => this.setState({ })}

                    screenProps={this.state}

                />


    )
  }
}


const StackScreen = createStackNavigator({

Home: {

    screen: HomeScreen

},

Details: {

    screen: DetailsScreen, navigationOptions: ({ navigation }) => ({

                           title: navigation.state.params.title,

                           })

}

});

 const MainScreenNavigator=createAppContainer( createBottomTabNavigator  (
{

StackScreen : {

screen: StackScreen, navigationOptions: {
title: 'Feed',
tabBarIcon: ( { focused, tintColor}) => {
return <Ionicons name = 'ios-options' size= {25} color={ tintColor} />;

}
}
},

Post : {
screen: TabScreen, navigationOptions: {
tabBarIcon: ( { focused, tintColor} ) => {
return <Ionicons name ='ios-create'  size= { 25 } color={ tintColor} />;
}
}
},

Bicycle :
{

screen: App, navigationOptions: {
tabBarIcon: ( { focused, tintColor}) => {
return <Ionicons name = 'ios-bicycle' size= {25} color={ tintColor} />;

}
}
}
}


)
);

export default App
