import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

// import SvgUri from 'react-native-svg-uri';
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Offers from './src/screens/Offers'
import Receipt from './src/screens/Receipt'
import Redeem from './src/screens/Redeem'
import Profile from './src/screens/Profile'
import Setting from './src/screens/Setting'

const Drawer = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Setting:{
    screen: Setting
  }

})

const Bottom = createBottomTabNavigator({
  Home: {
    screen: Drawer,
    navigationOptions:{
      tabBarLabel:'Home', 
      tabBarIcon:({tintColor})=>(  
        <Image source={require('./src/images/home.png')} style={{width: 25, height: 25}} />  
    )   
    }
  },
  Offers: {
    screen: Offers,
    navigationOptions:{
      tabBarLabel:'Offers', 
      tabBarIcon:({tintColor})=>(  
        <Image source={require('./src/images/offers.png')} style={{width: 25, height: 25}} />  
    )   
    }
  },
  Receipt: {
    screen: Receipt,
    navigationOptions:{
      tabBarLabel:'Receipt', 
      tabBarIcon:({tintColor})=>(  
        <Image source={require('./src/images/camera.png')} style={{width: 25, height: 25}} />  
    )   
    }
  },
  Redeem: {
    screen: Redeem,
    navigationOptions:{
      tabBarLabel:'Redeem', 
      tabBarIcon:({tintColor})=>(  
        <Image source={require('./src/images/award.png')} style={{width: 25, height: 25}} />  
    )   
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions:{
      tabBarLabel:'Profile', 
      tabBarIcon:({tintColor})=>(  
        <Image source={require('./src/images/profile.png')} style={{width: 25, height: 25}} />  
    )   
    }
  }

})

const navigator = createStackNavigator ({
  // Test:{
  //   screen: Test
  // },
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown: false
    }
  },
  Home:{
    screen: Bottom,
    navigationOptions:{
      headerShown: false
    }
  },
  Offers: {
    screen: Offers
  },
  Receipt: {
    screen: Receipt
  },
  Redeem:{
    screen: Redeem
  },
  Profile:{
    screen: Profile
  },
  Setting:{
    screen: Setting
  },

 


},



)

export default createAppContainer(navigator)