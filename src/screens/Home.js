//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import TopHeader from '../components/topheader'




const HouseList  = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Tab Baker',
      img: require('../images/fashion.png'),
      deal: '40% off',
      rent: 'Expires in 7 days'

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Paul Ryan',
      img: require('../images/health.png'),
      deal: '10% off',
      rent: '25000'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Orrin Hatch',
      img: require('../images/fashion.png'),
      deal: '60% off',
      rent: '15000'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72zx',
        title: 'White Stone',
        img: require('../images/fashion.png'),
        deal: '20% off',
        rent: '25000'
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba-3-000',
        title: 'Wooden house',
        img: require('../images/fashion.png'),
        deal: '40% off',
        rent: '25000'
  
      },
  ];

function Item({ title, img, deal, rent }) {
    return (
       
      <View style={{justifyContent: 'flex-start', flexDirection: 'column', marginRight: 10, backgroundColor: '#fff'}}>
        <View >
             <Image source={img} style={{width: 280, height: 140}} />  
             <Text style={{position: 'absolute', right: 0, left: 0, color: '#fff', fontSize: 35}}>{deal} </Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', padding: 15, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>{title}</Text>
           
            <Text style={{color: '#f376c2'}}>{rent} </Text>
        </View>
      </View>
      
    );
  }


// create a component
class Home extends Component {
 
    render() {

        const { navigation } = this.props
        const username = navigation.getParam('username')
        console.log(username)
        return (

            <View style={{paddingTop: 23,backgroundColor: '#f5f5f5', flex: 1}}>
                <TopHeader  />
              <ScrollView showsVerticalScrollIndicator={false} >

                
                <View style={{ paddingHorizontal: 20, paddingVertical: 10, paddingTop: 65,zIndex: -1}}>

                    <View style={{justifyContent: 'space-between' , flexDirection: 'row', alignItems: 'baseline'}}>
                        <Text style={{color: '#000', fontSize: 22, fontWeight: 'bold'}}>Hi, {username} </Text>
                        <Image source={require('../images/silver.png')} style={{width: 50, height: 50}} />
                    </View>

                    <View style={{ backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', padding: 20, marginTop: 10  }}>
                        <Text style={{color: '#000', fontWeight: '700'}}>Available Points</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'baseline' , marginVertical: 6}}>
                            <Text style={{ color: '#f376c2', fontSize: 40, fontWeight: 'bold' }}>35,000 </Text>
                            <Text style={{ color: '#c37fc2', fontSize: 35 }}>Points</Text>
                        </View>
                        <Text style={{ paddingBottom: 8, color: '#aaa', fontSize: 12}}>Points will be expire on 20 Nov 2020</Text>

                        <TouchableHighlight onPress={() =>{
              this.props.navigation.openDrawer
          }} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#0095ff', borderRadius: 2, height: 50 }}>
                            <Text style={{color: 'white', textTransform: 'uppercase'}}>Redeem Now!</Text>
                        </TouchableHighlight>
                    </View>


                    <Text style={{color: '#0095ff', fontSize: 12, marginVertical: 10}}>Spend more 2,000 AED and upgrade to Gold membership.</Text>


                    <View >
                        <Text style={{marginTop: 20, color: '#000', fontSize: 20, fontWeight: '700'}}>Services</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                            <View style={{width: '48%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                                <Image style={{width: 60, height: 60}} source={require('../images/valet.png')} />
                                <Text>Valet Parking</Text>
                            </View>

                            <View style={{width: '48%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                                <Image style={{width: 60, height: 60}} source={require('../images/launge.png')} />
                                <Text>Valet Parking</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{width: '48%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                                <Image style={{width: 60, height: 60}} source={require('../images/care.png')} />
                                <Text>Valet Parking</Text>
                            </View>

                            <View style={{width: '48%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                                <Image style={{width: 60, height: 60}} source={require('../images/delivery.png')} />
                                <Text>Valet Parking</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={{marginBottom: 10, fontSize:18, fontWeight: '700'}}>Fashion</Text>

                        <FlatList
                            data={HouseList}
                            renderItem={({ item }) => <Item img={item.img} title={item.title} deal={item.deal} rent={item.rent} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </View>

                </ScrollView>
            </View>
           
        );
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

//make this component available to the app
export default Home;
