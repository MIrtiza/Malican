//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableHighlight  } from 'react-native';
import { DatePicker, Content, Picker, Item, DatePickerAndroid } from 'native-base';
import TopHeader from '../components/topheader'
import Icon from 'react-native-vector-icons/FontAwesome';  
// create a component

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date(),
            selected2: undefined
        };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    render() {
        return (
            <View style={{paddingTop: 23,backgroundColor: '#f5f5f5', flex: 1}}>
            <TopHeader  />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ paddingHorizontal: 20, paddingTop: 65,zIndex: -1}}>

                        <View style={{paddingHorizontal: 15, paddingVertical: 10 , marginVertical: 15,flexDirection: 'column', backgroundColor: 'white'}}>
                            <View style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#aaa', paddingBottom: 10}}>
                                <Image source={require('../images/setting-icon.png')} style={{width: 60, height: 60}} />
                                <Text style={{color: 'purple', fontSize: 20, paddingHorizontal: 10, fontWeight: 'bold'}}>ACCOUNT</Text>
                            </View>


                            <View style={{marginTop: 15}}>
                                <Text style={{color: '#ccc', fontSize: 18, marginBottom: 8}}>Personal Information</Text>

                                <TextInput placeholder="Name *" style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8}} />
                           
                                <View style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5,  marginVertical: 8}}>
                                    <Content contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 5}}>
                                        <DatePicker
                                            defaultDate={new Date(2018, 4, 4)}
                                            minimumDate={new Date(2018, 1, 1)}
                                            maximumDate={new Date(2018, 12, 31)}
                                            locale={"en"}
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={false}
                                            animationType={"fade"}
                                            androidMode={"default"}
                                            placeHolderText="Date of Birth *"
                                            textStyle={{ color: "green" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            onDateChange={this.setDate}
                                            disabled={false}
                                            />
                                            {/* <Text>
                                            Date: {this.state.chosenDate.toString().substr(4, 12)}
                                            </Text> */}
                                            <Icon name="calendar" size={25} color="grey" />
                                    </Content>

                                </View>

                                <View style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5,  marginVertical: 8}}>
                                <Item picker style={{borderWidth: 0, borderColor: '#fff', borderRadius: 5}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="chevron-down" />}
                                        style={{ width: undefined, borderWidth: 0, color: '#ccc' }}
                                        placeholder="Gender *"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.selected2}
                                        onValueChange={this.onValueChange2.bind(this)}
                                     >
                                        <Picker.Item label="Male" value="male" />
                                        <Picker.Item label="Female" value="female" />
                                    
                                     </Picker>
                                    </Item>
                                </View>

                                <TextInput placeholder="Email *" style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8}} />
                           
                                <TextInput placeholder="Old Password" style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8}} />

                                <TextInput placeholder="New Password" style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8}} />
                                
                                <TextInput placeholder="Confirm Password" style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 8, marginVertical: 8}} />
                           

                                
                              {/* buttons */}

                                <View style={{marginVertical: 20}}>
                                    <TouchableHighlight style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', paddingVertical: 15, borderRadius: 5, marginVertical: 5}}>
                                        <Text style={{color: 'white', fontWeight: 'bold'}}>UPDATE</Text>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', paddingVertical: 15, borderRadius: 5, marginVertical: 5}}>
                                        <Text style={{color: 'white', fontWeight: 'bold'}}>CANCEL</Text>
                                    </TouchableHighlight>
                                    
                                </View>
                           
                            </View>

                        </View> 


                    </View>
                </ScrollView>
            </View>
        ) 
    }
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


