

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
  RefreshControl,
  Dimensions,
  Linking
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawer from 'react-native-side-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyCarousel from './slider'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import se from '../screen/image/search.png'
import { set } from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

const Drawer = (props) => {

  const overlay = false
  const position = 'left'

  const drawerContent = () => {
    const edges = position == 'right' ? ['bottom', 'top', 'right'] : ['bottom', 'top', 'left']
    const baseStyle = {flex: 1}

    return(
      <SafeAreaView  edges={edges} style={baseStyle}>
      <View style={{flexDirection: 'column', backgroundColor: '#00296B', flex: 1, padding: 20,marginBottom:-20,display:'flex',alignItems:'flex-start',paddingLeft:'20%',justifyContent:'flex-start',paddingTop:'55%'}}>
          <TouchableOpacity onPress={()=>props.props.navigation.navigate('home')}  activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>
                  Home
              </Text>
          </TouchableOpacity>
 
 
          <TouchableOpacity onPress={()=>props.props.navigation.navigate('search')} activeOpacity={0.7}>
 
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Search
              </Text>
          </TouchableOpacity>
 
          <TouchableOpacity  onPress={()=>props.props.navigation.navigate('home')}activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Business
              </Text>
          </TouchableOpacity>
 
 
 
          <TouchableOpacity onPress={()=>props.props.navigation.navigate('promos')} activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Promos
              </Text>
          </TouchableOpacity>
 
          <TouchableOpacity onPress={()=>props.props.navigation.navigate('places')} activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Places
              </Text>
          </TouchableOpacity>
 
 
          <TouchableOpacity onPress={()=>props.props.navigation.navigate('news')} activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  News
              </Text>
          </TouchableOpacity>
 
      </View>
  </SafeAreaView>
    )
  }

  return (
    <MenuDrawer
      open={props.open}
      drawerContent={drawerContent()}
      position={position}
      drawerPercentage={70}
      animationTime={250}
      overlay={true}
      opacity={1}>
    {props.children}
    </MenuDrawer>
  );
}
const Link = (props) => {
  const [openDrawer, setDrawerOpen] = useState(false)
  const [cat_data, setcat_data] = useState([])
  const [type, settype] = useState()
  const [cond, setcond] = useState(20)
  const [data, setdata] = useState(false)
  const isFocused = useIsFocused();

  useEffect(()=>{
    setDrawerOpen(false)
  },[props,isFocused])
  const [refreshing, setRefreshing] = useState(false)
  const _onRefresh1 = () => {
    setRefreshing(true);
      
    fetch_data()
  
  
  };

  const search_data=()=>{

    if (type) {
      console.log("yes>>>>>>>>>>>>>>");
      fetch_keyword_data(type) 
      setdata(true)
    } else {
      console.log("no>>>>>>>>>>>>>>");
     

    }
    }


const fetch_keyword_data= async(v)=>{







  // fetch  keyword data

  fetch(`https://www.trueliberia.com/api/businesses?s=${v}`,{
      method:'GET'
  })
  .then( async (result)=> {
    // handle the response
    const json= await result.json()
    setcat_data(json)
    if (json.length==0) {
      
      setdata(false)
    }
    // console.log("yes>>>>>>>",json);
  })
  .catch((e)=> {
    // handle the error
    // console.log("no>>>>>>>>>>>>>",);
  
  });





}

  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer)
  }
  let searchSugestion=[ 
    {name: 'Hotel', code: 'AF'}, 
    {name: 'Resort', code: 'AX'}, 
    {name: 'Resturants', code: 'AL'}, 
    {name: 'Gym & fitness', code: 'DZ'}, 
    {name: 'Nightclub & bars', code: 'AS'}, 
  
  ]
  let [search,setSearch]=useState('')
  let [searchTrue,setSearchTrue]=useState(true)

  let FilterData=(single) => 
  {
     return (single.name.toLowerCase().indexOf(search.toLowerCase()) !==-1)
   
  }
  
  
  
  
  let myitems =searchSugestion.filter(FilterData);
  
  const windowHeight = Dimensions.get('window').height;




  return (
    <SafeAreaProvider>
     <Drawer props={props} open={openDrawer} toggleDrawer={toggleDrawer}>
         <SafeAreaView style={styles.safeArea}>
             <ScrollView  >

                 <View style={styles.container}>
                     <View style={styles.nav}>

                     <TouchableOpacity activeOpacity={0.7} onPress={()=>props.navigation.navigate('home')}>
                         <Icon name="arrow-left" style={{color:'black'}} size={24} color="#fff" />
                         </TouchableOpacity>


                         {/* <Text style={{fontSize:20,fontWeight:'bold',color:'#202020'}}>
                             Trueliberia
                         </Text> */}

{/* 
                         <TouchableOpacity onPress={()=>toggleDrawer()}>
                             <Icon name="bars" size={26} color="#202020" />

                         </TouchableOpacity> */}

                     </View>

                    





<View style={{backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50%',flexDirection:'column',width:'100%'}}>

                       <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Our Links</Text>

                       <Text style={{color:'black',fontSize:15,width:'70%',textAlign:'center',marginTop:'10%'}}>Sumbitting your business to our app is free.All you have to do is click on link below.</Text>

                       <TouchableOpacity style={{backgroundColor:'#17132D',width:'60%',textAlign:'center',height:32,marginTop:'4%'}}onPress={()=>{
                        Linking.canOpenURL('https://www.trueliberia.com/submission').then(supported => {
                          if (supported) {
                            Linking.openURL('https://www.trueliberia.com/submission');
                          } else {
                            console.log("Don't know how to open URI: " + this.props.url);
                          }
                        });
                       }}>

                        <Text style={{color:'white',textAlign:'center',fontSize:16,marginTop:4}}>
                          Sumbit Your Business
                        </Text>

                       </TouchableOpacity>

</View>


                 </View>
             </ScrollView>

         </SafeAreaView>
     </Drawer>
 </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:'white'
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
    height:80,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:20
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

export default Link;