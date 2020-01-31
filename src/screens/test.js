import React, { Component } from 'react';
 
import { StyleSheet, ActivityIndicator, ListView, Text, View, Alert, FlatList } from 'react-native';
 
export default class Project extends Component {
  


    state ={
        data:[]
      }

  


  fetchData = async()=>{
    const response = await  fetch('http://192.168.100.14/malican-admin/User_Login.php')
    //   .then((response) => response.json())
      const users = await response.json();
      this.setState({data: users});
  }
 
componentDidMount(){

this.fetchData()

}


  render() {

    return (
 
      <View style={styles.MainContainer}>
 
   
 <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>{item.username}g</Text>
          
         </View>

       }

       />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
justifyContent: 'center',
flex:1,
margin: 10
 
},
 
rowViewContainer: {
  fontSize: 20,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
}
 
});