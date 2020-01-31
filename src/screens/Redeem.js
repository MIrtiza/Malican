import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import TopHeader from '../components/topheader'

export default class Redeem extends Component {
    render() {
        return (
            <View style={{paddingTop: 23,backgroundColor: '#f5f5f5', flex: 1}}>
            <TopHeader  />
                <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ paddingHorizontal: 20, paddingVertical: 10, paddingTop: 65,zIndex: -1}}>
                    <View style={{justifyContent: 'space-between' , flexDirection: 'row', alignItems: 'baseline', marginBottom: 30}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline' , marginVertical: 6}}>
                                <Text style={{ color: '#f376c2', fontSize: 30, fontWeight: 'bold' }}>35,000 </Text>
                                <Text style={{ color: '#c37fc2', fontSize: 25 }}>Points</Text>
                            </View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Select Air Miles Voucher</Text>
                        </View>
                        <Image source={require('../images/silver.png')} style={{width: 50, height: 50}} />
                    </View>


                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, backgroundColor: 'white'}}> 
                        <View style={{justifyContent: 'center', alignItems: 'center', width: '34%', padding: 30, backgroundColor: '#fff', borderRadius: 10}}>
                             <Image source={require('../images/emirates.png')} style={{width: 80, height: 55}} />
                        </View>
                        <View style={{width: '2%', height: '100%', paddingVertical: 10}}>
                                <Image source={require('../images/dotted.png')} style={{width: '100%'}} />
                        </View>
                        <View style={{flexDirection: 'column', width: '64%' ,padding: 30,borderRadius: 10 ,backgroundColor: '#fff'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline'}}>
                                    <Text style={{color: '#6985fb', fontSize: 35, fontWeight: 'bold'}}>1,000</Text>
                                    <Text style={{color: '#6985fb'}}>miles</Text>
                                </View>

                                <Text>10,0000 points required to redeem</Text>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, backgroundColor: 'white'}}> 
                        <View style={{justifyContent: 'center', alignItems: 'center', width: '34%', padding: 30, backgroundColor: '#fff', borderRadius: 10}}>
                             <Image source={require('../images/emirates.png')} style={{width: 80, height: 55}} />
                        </View>
                        <View style={{width: '2%', height: '100%', paddingVertical: 10}}>
                                <Image source={require('../images/dotted.png')} style={{width: '100%'}} />
                        </View>
                        <View style={{flexDirection: 'column', width: '64%' ,padding: 30,borderRadius: 10 ,backgroundColor: '#fff'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline'}}>
                                    <Text style={{color: '#6985fb', fontSize: 35, fontWeight: 'bold'}}>1,000</Text>
                                    <Text style={{color: '#6985fb'}}>miles</Text>
                                </View>

                                <Text>10,0000 points required to redeem</Text>
                        </View>
                    </View>

                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, backgroundColor: 'white'}}> 
                        <View style={{justifyContent: 'center', alignItems: 'center', width: '34%', padding: 30, backgroundColor: '#fff', borderRadius: 10}}>
                             <Image source={require('../images/emirates.png')} style={{width: 80, height: 55}} />
                        </View>
                        <View style={{width: '2%', height: '100%', paddingVertical: 10}}>
                                <Image source={require('../images/dotted.png')} style={{width: '100%'}} />
                        </View>
                        <View style={{flexDirection: 'column', width: '64%' ,padding: 30,borderRadius: 10 ,backgroundColor: '#fff'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline'}}>
                                    <Text style={{color: '#6985fb', fontSize: 35, fontWeight: 'bold'}}>1,000</Text>
                                    <Text style={{color: '#6985fb'}}>miles</Text>
                                </View>

                                <Text>10,0000 points required to redeem</Text>
                        </View>
                    </View>



                </View>
              </ScrollView>
            </View>
        )
    }
}
