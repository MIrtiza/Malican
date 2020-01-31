//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Offers extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {backgroundColor: 'green'},
        title: 'Logged In to your app!',
        gesturesEnabled: false,
        headerLeft: <Text onPress={() => {
          // Coming soon: navigation.navigate('DrawerToggle')
          // https://github.com/react-community/react-navigation/pull/2492
          if (navigation.state.index === 0) {
            navigation.navigate('DrawerOpen')
          } else {
            navigation.navigate('DrawerClose')
          }
        }}>Menu</Text>
      })
    render(){

 
    return (
        <View style={styles.container}>
            <Text>Offers</Text>
        </View>
    );
};
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Offers;
