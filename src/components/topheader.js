import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderIconButtonTextButtonExample extends Component {
  render() {
    const { navigation } = this.props
    return (
      // <Container style={{position: 'relative'}}>
      //   <Header  style={{backgroundColor: 'white', zIndex: 1000, position: 'absolute', top: 0, left: 0, right: 0 ,elevation: 0}}>
      //     <Left>
      //       <Button transparent>
      //         <Image source={require('../images/logo-user.png')} style={{width: 80, height: 50}} />
            
      //       </Button>
      //     </Left>
      //     <Body>
        
      //     </Body>
      //     <Right>
      //       <Button transparent>
      //       <Image source={require('../images/burger.png')} style={{width: 40, height: 40}} />
      //       </Button>
      //     </Right>
      //   </Header>
      // </Container>

      <View style={{justifyContent: 'space-between', alignItems: 'center' ,flexDirection: 'row' , position: 'absolute', zIndex: 10000, backgroundColor: 'white', width: '100%', marginTop: 22, paddingVertical: 5, paddingHorizontal: 20}}>
          <TouchableWithoutFeedback>
          <Image source={require('../images/logo-user.png')} style={{width: 80, height: 50}} />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() =>{
              this.props.navigation.openDrawer
          }} >
             <Image source={require('../images/burger.png')} style={{width: 40, height: 40}} />
          </TouchableWithoutFeedback>
      </View>
    );
  }
}