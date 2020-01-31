/**
 * Sample React Native Login
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  Dimensions,
  AsyncStorage
} from 'react-native';


import Header from '../components/Header'
import KeyboardHeight from '../components/KeyboardHeight'

var {height, width} = Dimensions.get('window');
height = height;

class Login extends React.Component{

  state = {
    username: '',
    password: '',
    height: height,
  }
  checkLogin(){
    const { username, password } = this.state
    if(username == 'Admin' && password == 'admin'){
      AsyncStorage.setItem('UseName', username);
        this.props.navigation.navigate('Home' , { 'username': this.state.username })
    }else{
      Alert.alert('Error', 'username/password mismatch', [{ text: 'okay' }])
    }
  }

  UserLoginFunction = () =>{
 
    const { username }  = this.state ;
    const { password }  = this.state ;
    
    
   fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
      username: username,
    
       password: password
    
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
   
           // If server response message same as Data Matched
          if(responseJson === 'Data Matched')
           {
   
               //Then open Profile activity and send user email to profile activity.
               this.props.navigation.navigate('Home', { username: username });
   
           }
           else{
   
             Alert.alert(responseJson);
           }
   
         }).catch((error) => {
           console.error(error);
         });
    
     }

render(){
 
  return (
    <View style={ {height: this.state.height}}>
      <KeyboardHeight getHeight={(height) => {this.setState({height: height});}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Login</Text>

            </View>

            <View style={styles.sectionContainer}>
            
                <TextInput placeholder="Email*" style={{width: '100%', borderBottomWidth: 1, borderColor: 'black', height: 40, marginVertical: 10}} 
                  onChangeText={ text=> this.setState({ username: text }) }
                />

                <TextInput placeholder="Password*" secureTextEntry={true}  style={{width: '100%', borderBottomWidth: 1, borderColor: 'black', height: 40,  marginVertical: 10}} 
                  onChangeText={ text => this.setState({ password: text }) }
                />
           
                <View style={{ flex:1, flexDirection: 'row-reverse'  }}>
                  <TouchableHighlight 
                  onPress={ _ => {this.checkLogin()} }
                  style={{height: 40, width: 80, justifyContent: 'center', alignContent: 'center',alignItems: 'center' ,backgroundColor: 'steelblue' , borderColor: 'grey', borderRadius: 4, borderWidth:1}}
                  >
                      <Text style={{color: '#fff'}}>Login</Text>
                    </TouchableHighlight>
                </View>
            </View>
         
          
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
}
const styles = StyleSheet.create({
  scrollView: {
    
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex:3,

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
  
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Login;