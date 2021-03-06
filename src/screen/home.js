

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
  Dimensions
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawer from 'react-native-side-drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyCarousel from './slider'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { useIsFocused } from '@react-navigation/native';
const Drawer = (props) => {
  const overlay = false
  const position = 'left'
  {console.log(">>>>>>>>>>>>>>>");}

  const drawerContent = (props) => {
    const edges = position == 'right' ? ['bottom', 'top', 'right'] : ['bottom', 'top', 'left']
    const baseStyle = {flex: 1}

    console.log("b>>>>>>>>>>>>>>>>>>>>>>>>>>>>",props.props);

    return(
      <SafeAreaView edges={edges} style={baseStyle}>
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
         <TouchableOpacity onPress={()=>props.props.navigation.navigate('link')} activeOpacity={0.7}>
             <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                 Link
             </Text>
         </TouchableOpacity>

     </View>
 </SafeAreaView>
    )
  }

  return (
    <MenuDrawer
      open={props.open}
      drawerContent={drawerContent(props)}
      position={position}
      drawerPercentage={70}
      animationTime={250}
      overlay={true}
      opacity={1}>
    {props.children}
    </MenuDrawer>
  );
}
const Home = (props) => {
  const [openDrawer, setDrawerOpen] = useState(false)
  const [cat_data, setcat_data] = useState([])
  const [data, setdata] = useState([])
  const [type, settype] = useState()
  const [cond, setcond] = useState(20)
  const [refreshing, setRefreshing] = useState(false)
  const [data_check, setdata_check] = useState(false)
  const isFocused = useIsFocused();
  useEffect(()=>{
    setDrawerOpen(false)
  },[props,isFocused])

  const _onRefresh1 = () => {
    setRefreshing(true);
    fetch_cat_data()
      
    fetch_data()
  
  
  };
  const search_data=()=>{

    if (type) {
      console.log("yes>>>>>>>>>>>>>>");
      fetch_keyword_data(type) 
    } else {
      console.log("no>>>>>>>>>>>>>>");
      fetch_data()

    }
    }
  useEffect(()=>{

    fetch_cat_data()

      
      fetch_data()
      
  


    

},[])


const fetch_cat_data= async()=>{







  // fetch  cat data

  fetch('https://www.trueliberia.com/api/categories',{
      method:'GET'
  })
  .then( async (result)=> {
    // handle the response
    const json= await result.json()
    setcat_data(json)
  

  })
  .catch((e)=> {
    // handle the error
  //   console.log("no>>>>>>>>>>>>>",);
  setRefreshing(false)

  setRefreshing(false)

  });




  
}


const fetch_data= async()=>{




    //fetch feature data

    setdata_check(true)

    fetch('https://www.trueliberia.com/api/businesses',{
        method:'GET'
    })
    .then( async (result)=> {
      // handle the response
      const json= await result.json()
      setdata(json)
      if (json.length==0) {
      
        setdata_check(false)
      }
        setRefreshing(false)

      console.log("efwe>>>",json[0]);
    })
    .catch((e)=> {
      // handle the error
      // console.log("no>>>>>>>>>>>>>",e);
          setRefreshing(false)

    
    });

}


const fetch_keyword_data= async(v)=>{



setdata_check(true)



  // fetch  keyword data

  fetch(`https://www.trueliberia.com/api/businesses?s=${v}`,{
      method:'GET'
  })
  .then( async (result)=> {
    // handle the response
    const json= await result.json()
    setdata(json)
  //   console.log("efwe",json);
  if (json.length==0) {
      
    setdata_check(false)
  }
  })
  .catch((e)=> {
    // handle the error
  //   console.log("no>>>>>>>>>>>>>",);
  
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
             <ScrollView          refreshControl={
  <RefreshControl refreshing={refreshing}
    onRefresh={_onRefresh1}tintColor="#F8852D"/>
}>
    
                 <View style={styles.container}>
                     <View style={styles.nav}>

                         <TouchableOpacity activeOpacity={0.7} 
                         >
                             <Image style={{width:34,height:34,borderRadius:60}} source={{uri:'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png'}}>

                             </Image>
                         </TouchableOpacity>


                         <Text style={{fontSize:20,fontWeight:'bold',color:'#202020'}}>
                             Trueliberia
                         </Text>


                         <TouchableOpacity onPress={()=>toggleDrawer()}>
                             <Icon name="bars" size={26} color="#202020" />

                         </TouchableOpacity>
                     </View>


                     <View style={styles.searchSection}>
                         <Icon style={styles.searchIcon} name="map-marker-alt" size={20} color="#000" />
                         <TextInput onTouchStart={()=>{props.navigation.navigate('search')}}   onChangeText={(e)=>{settype(e)}}  style={styles.input} placeholder="Search here...."
                             // underlineColorAndroid="transparent"
                             />
                             <TouchableOpacity onPress={()=>{        search_data()
                                                }}>

                               <Image resizeMode='contain' style={{width:19,height:40}} source={require('../screen/image/search.png')} >

</Image>
                             </TouchableOpacity>
                     </View>
                     <View style={{width:'80%',marginTop:10}}>
                         {search.length>0 && searchTrue?
                         myitems.map((v,i)=>{
                         if(i<7){ return( <View style={{width:'90%',paddingLeft:'10%',height:40,backgroundColor:'#fff',display:'flex',alignItems:'flex-start',justifyContent:'center',marginTop:0}} key={i} onTouchEnd={()=>{setSearch(v.name); setSearchTrue(false); props.navigation.navigate('searchDetails',{val:v.name})}}>

                             <Text style={{fontWeight:'bold',color:'#00296B'}}>
                                 {v.name}vdfj
                             </Text>
                     </View>
                     )
                     }
                     }):
                     null}

                 </View>


                 <View style={styles.newArrival}>


                         {/* <ImageBackground style={styles.card1} imageStyle={{borderRadius:60,borderWidth:4,borderColor:'#FDC500'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6mB2G13MRN6LCNQye1dEmRlzKyKvhxZUtg&usqp=CAU'}}>
                             <View>
                             
                             </View>
                            </ImageBackground> */}


<ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                        {cat_data.length>0?cat_data.map((v,i)=>{
                          return(
                              <TouchableOpacity activeOpacity={0.7} key={i}  onPress={()=>{props.navigation.navigate('searchDetails',{data:v.slug})}} >
                                <ImageBackground style={styles.card} imageStyle={{borderRadius:60}} source={{uri:v.image}}>
                             <View>

                             </View>
                         </ImageBackground>
                              </TouchableOpacity>
                            )
                          })
                          :
                          
                          <View  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                     <ContentLoader 
    speed={2}
    width={'90%'}
    height={70}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
    >
    
    <Circle cx="60" cy="60" r="60" />
  </ContentLoader>
                                                 </View>
                        }
                        </ScrollView>






                 </View>




                 <View style={{width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center',marginTop:20,height:330}}>
                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B',marginBottom:-10,marginLeft:'5%'}}>
                     Featured business

                     </Text>

                     <MyCarousel props={props} />

                 </View>



                 <View style={{width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center',marginTop:-15}}>
                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B',marginBottom:-10,marginLeft:'5%'}}>
                     Hottest Place in

                     </Text>


                        {data_check==true?
                        data.length>0?
                        data.map((v,i)=>{
                          if (i<cond) {
                            return(

  <View key={i} style={styles.card2}>
  <TouchableOpacity onPress={()=>{props.navigation.navigate('itemDetails',{data:v})}} activeOpacity={0.7}>
                                    <Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:v.image}}>
                                    </Image>
                                    <View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
                                        <View>
                                            <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
                                               {v.name}
                                            </Text>
                                            <Text style={{fontSize:12,color:'grey'}}>
                                                {v.slug}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>{v.rating}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            )
                          }
                        }):
                        
                     <View  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
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
                                                 :
                                                 <View style={{width:'100%',height:windowHeight-150,display:'flex',justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontWeight:'bold',fontSize:15}}>No Result Found !</Text></View>
                        }







                 </View>




<TouchableOpacity onPress={()=>{setcond(cond+20)}} style={{backgroundColor:'#326EC6',width:'30%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:2,marginBottom:15,height:28,marginTop:9}}>

  <Text style={{color:'black',fontWeight:'bold',fontSize:15,color:'white'}}>Load More</Text>
</TouchableOpacity>
                 </View>
             </ScrollView>

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

export default Home;