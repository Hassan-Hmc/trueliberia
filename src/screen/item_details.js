

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
  ImageBackground
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawer from 'react-native-side-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyCarouselitem from './itemDetailsSlider'
import ReadMore from '@fawazahmed/react-native-read-more';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const Drawer = (props) => {
console.log(props);

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
const item_Details = (props) => {
  const [openDrawer, setDrawerOpen] = useState(false)
  const [detail, setdetail] = useState(false)
  const [detail_data, setdetail_data] = useState()


  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer)
  }
const  data = props.route.params.data
  useEffect(()=>{
    console.log("awais>>>>>>>>>>>>>>>>>>>",data);
    // fetch  keyword data
   
  fetch(`https://www.trueliberia.com/api/business/${data.code}`,{
    method:'GET'
})
.then( async (result)=> {
  // handle the response
  const json= await result.json()
  // setitem_data(json)
  
  console.log("yes>>>>>>>",json);
  setdetail_data(json)
  setdetail(true)
})
.catch((e)=> {
  // handle the error
  // console.log("no>>>>>>>>>>>>>",);

});
    },[])


  return (
    <SafeAreaProvider>
     <Drawer props={props} open={openDrawer} toggleDrawer={toggleDrawer}>
         <SafeAreaView style={styles.safeArea}>
{detail==true
?
<View>

             <ScrollView>

                 <View style={styles.container}>
                     <View style={styles.nav}>

                         <TouchableOpacity activeOpacity={0.7} onPress={()=>props.navigation.navigate('home')}>
                         <Icon name="arrow-left" style={{color:'white'}} size={24} color="#fff" />
                         </TouchableOpacity>


                         <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>
                             Trueliberia
                         </Text>


                         <TouchableOpacity 
                         onPress={()=>toggleDrawer()} 
                         
                         activeOpacity={0.7}>
                             <Icon name="bars" size={26} color="#fff" />

                         </TouchableOpacity>
                     </View>



                     <View style={{width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center',marginTop:-120,height:490,zIndex:0}}>
                         <MyCarouselitem img={detail_data.images} />
                     </View>



                     <View style={styles.heading}>
                         <View>
                             <Text style={{fontSize:20,fontWeight:'bold',color:'#00296B'}}>
                                {detail_data.name}
                             </Text>
                             <Text style={{fontSize:15,fontWeight:'600',color:'#CCCCCC'}}>
                                 {detail_data.address}
                             </Text>
                             <Text style={{fontSize:15,fontWeight:'700',color:'#F21010'}}>
                                 {data.category}
                             </Text>
                         </View>



                         <Text style={{fontSize:20,fontWeight:'bold',color:'#1FDB5F'}}>
                             {detail_data.rating}
                         </Text>
                     </View>




                     <View style={{width:'90%'}}>

                         <ReadMore numberOfLines={3} style={styles.textStyle}>
                             {
                               data.description
                              }
                         </ReadMore>
                         <View style={{width:'100%',height:150}}>
                             <Text style={{fontSize:16,color:'#000',fontWeight:'500'}}>
                                 Features & Animations
                             </Text>

                             <Text style={{color:'#00296B',fontSize:13}}>
                                {detail_data.features}
                             </Text>
                         </View>
                     </View>





                 </View>
             </ScrollView>

             <View style={{width:'100%',height:65,backgroundColor:'#fff',position:'absolute',bottom:0,display:'flex',alignItems:'center',justifyContent:'center'}}>

                 <TouchableOpacity activeOpacity={0.7} style={{width:'70%',height:45,backgroundColor:'#FDC500',display:'flex',alignItems:'center',justifyContent:'center',marginTop:-5}} onPress={()=>props.navigation.navigate('Map',{lati:data.latitude, long:data.longitude,name:data.name,image:data.image,rating:data.rating})}>
                     <Text style={{fontSize:15,color:'#000',fontWeight:'400'}}>
                         Get Direction
                     </Text>
                 </TouchableOpacity>

             </View>
                              </View>
:
  
<View  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
{console.log("gh>>>")}
                            <ContentLoader height="280" width="90%"  >
                            
                            <Rect x="15" y="15" rx="6" ry="6" width="350" height="25" />
                          
                            <Rect x="15" y="50" rx="2" ry="2" width="350" height="150" />

                          </ContentLoader>
                          <ContentLoader height="280" width="90%"  >
                            
                            <Rect x="15" y="15" rx="6" ry="6" width="350" height="25" />
                          
                            <Rect x="15" y="50" rx="2" ry="2" width="350" height="150" />

                          </ContentLoader>
                          <ContentLoader height="280" width="90%"  >
                            
                            <Rect x="15" y="15" rx="6" ry="6" width="350" height="25" />
                          
                            <Rect x="15" y="50" rx="2" ry="2" width="350" height="150" />

                          </ContentLoader>
                            </View>
}
         </SafeAreaView>
     </Drawer>
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
    backgroundColor: '#fff'
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
    paddingHorizontal:20,
    backgroundColor:'rgba(255, 255, 255, 0)',
    zIndex:1
  },
  heading:{
      width:'100%',
      height:90,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      padding:20,
      flexDirection:'row'
  },
  textStyle:{
      fontSize:15,
      paddingBottom:30,
      lineHeight:20,
      color:'black'
  }
});

export default item_Details;