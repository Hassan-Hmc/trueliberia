

import React, { useState,useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Dimensions 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawer from 'react-native-side-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyCarousel from './slider'
import MapView from 'react-native-maps';
import { Marker,Callout,CalloutSubview  } from 'react-native-maps';


const Map = (props) => {
  const [openDrawer, setDrawerOpen] = useState(false)
  const [cat_data, setcat_data] = useState([])
  const  data = props.route.params
console.log("awia",data,'fffs',JSON.parse(data.lati));
  useEffect(()=>{


},[])


  let [region,setregion]=useState({ latitude: JSON.parse(data.lati),
    longitude: JSON.parse( data.long),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,})

 let [marker,setmarker]=useState({ latitude: JSON.parse(data.lati),
  longitude: JSON.parse( data.long)})
  
  
  
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


  return (
    <SafeAreaProvider>
     {/* <Drawer open={openDrawer} toggleDrawer={toggleDrawer}> */}
         <SafeAreaView >
         <View style={styles.nav}>


<TouchableOpacity onPress={()=>{props.navigation.navigate('itemDetails')}}  activeOpacity={0.7}>
    <Icon name="arrow-left" style={{color:'#183153'}} size={26} color="#fff" />

</TouchableOpacity>
</View>
             <ScrollView>

                 <View style={{width:windowWidth,height:windowHeight,display:'flex',backgroundColor:'black'}}
                //  style={styles.container}
                 >
                     {/* <Text >jkk</Text> */}
                     <MapView
                     style={{width:'100%',height:'100%',zIndex:0}}

                        region={region}

    >
       <Marker
      // key={1}
      coordinate={marker}
      // title={"marker.title"}
      // description={"marker.description"}
      image={''}
    >
      <Image resizeMode='contain' style={{width:100,height:40}} source={require('../screen/image/loc.png')} >

      </Image>
      

      <Callout style={{width:150,backgroundColor:'white',borderRadius:20}}>

      <View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',flexDirection:'column',}}>
                                        <View>
                                            <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
                                               {data.name}
                                            </Text>
                                           
                                        </View>
                                        <View>
                                            <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>{data.rating}</Text>
                                        </View>
                                    </View>
      
      </Callout>
    </Marker>
      </MapView>
                 </View>
             </ScrollView>

         </SafeAreaView>
     {/* </Drawer> */}
 </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
   flex: 1,
   flexDirection: 'column',
   justifyItems: 'center',
   alignItems: 'center',
   backgroundColor: 'white'
  },
  text: {
    paddingTop: 20
  },
  textLink: {
    paddingTop: 20,
    color: 'blue'
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
  nav:{
    width:'100%',
    height:60,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20,
    zIndex:22,
    position:'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  },
  searchSection: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'92%',
    height:40,
    marginLeft:'1.5%'
    ,paddingHorizontal:10,
    backgroundColor:'#F1F1F1',
    borderRadius:50
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor:'#F1F1F1',
    color: '#424242',
    borderRadius:50

},
newArrival:{
  width:'100%',
  // backgroundColor:'#f0fc',
  display:'flex',
  flexDirection:'row',
  alignContent:'space-around',
  alignItems:'flex-start',
  paddingBottom:2,
  marginTop:20
},
card1:{
  width:75
  ,height:75
  ,borderRadius:70,
  marginLeft:20
},
card:{
  width:75
  ,height:75
  ,borderRadius:70,
  marginLeft:10
},

card2:{
  width:'90%',
  height:220,
  marginLeft:'5%',
  marginTop:20,
  borderRadius:10,
  backgroundColor:'rgba(255, 255, 255, 0.438)',}
});

export default Map;