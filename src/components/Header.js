import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}} >
              
                
                <Image style={{width: 200, height: 130, marginVertical: 15, marginTop: 100}} source={require('../images/logo-user.png')} />
                {/* <Text style={{ fontSize: 20, marginVertical: 10 }}>MALICAN</Text> */}
            </View>
        )
    }
}