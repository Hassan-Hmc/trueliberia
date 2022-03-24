

import React, { useState } from 'react';
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
import MyCarousel from './slider'

const Drawer = (props) => {
console.log(props);

  const overlay = false
  const position = 'left'

  const drawerContent = () => {
    const edges = position == 'right' ? ['bottom', 'top', 'right'] : ['bottom', 'top', 'left']
    const baseStyle = {flex: 1}

    return(
      <SafeAreaView edges={edges} style={baseStyle}>
      <View style={{flexDirection: 'column', backgroundColor: '#00296B', flex: 1, padding: 20,marginBottom:-20,display:'flex',alignItems:'flex-start',paddingLeft:'20%',justifyContent:'flex-start',paddingTop:'55%'}}>
          <TouchableOpacity activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>
                  Home
              </Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.7}>

              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Search
              </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Business
              </Text>
          </TouchableOpacity>



          <TouchableOpacity activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Promos
              </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
              <Text style={{fontSize:20,fontWeight:'400',color:'#fff',marginTop:25}}>
                  Places
              </Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.7}>
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
const SearchDetails = (props) => {
  console.log(props.route.params.val);
  const [openDrawer, setDrawerOpen] = useState(false)

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
  




  return (
    <SafeAreaProvider>
     <Drawer open={openDrawer} toggleDrawer={toggleDrawer}>
         <SafeAreaView style={styles.safeArea}>
             <ScrollView>

                 <View style={styles.container}>
                     <View style={styles.nav}>

                         <TouchableOpacity activeOpacity={0.7} onPress={()=>props.navigation.navigate('updateprofile')}>
                             <Image style={{width:45,height:45,borderRadius:60}} source={{uri:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'}}>

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
                         <TextInput value={search} style={styles.input} placeholder="Search here...." onChangeText={(searchString)=> {setSearch(searchString); setSearchTrue(true)}}
                             // underlineColorAndroid="transparent"
                             />

                     </View>
                     <View style={{width:'80%',marginTop:10}}>
                         {search.length>0 && searchTrue?
                         myitems.map((v,i)=>{
                         if(i<7){ return( <View style={{width:'90%',paddingLeft:'10%',height:40,backgroundColor:'#fff',display:'flex',alignItems:'flex-start',justifyContent:'center',marginTop:0}} key={i} onTouchEnd={()=>{setSearch(v.name); setSearchTrue(false)}}>

                             <Text style={{fontWeight:'bold',color:'#00296B'}}>
                                 {v.name}
                             </Text>
                     </View>
                     )
                     }
                     }):
                     null}

                 </View>





                 <View style={{width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center',marginTop:10}}>
                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B',marginBottom:0,marginLeft:'5%'}}>
                         Catagories result for {props.route.params.val}:
                     </Text>

                     <View style={styles.card2}>
                         <TouchableOpacity activeOpacity={0.7}>
                             <Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:'https://d2cej47ganbxpf.cloudfront.net/media/filer_public/e0/50/e05064bd-0451-4b15-a1b4-4d14c15c11d2/screen_shot_2021-03-22_at_85449_am.png'}}>

                             </Image>
                             <View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
                                 <View>
                                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
                                         Echo1
                                     </Text>
                                     <Text style={{fontSize:12,color:'grey'}}>
                                         Solar beach marchat
                                     </Text>
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>4.3</Text>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>





                     <View style={styles.card2}>
                         <TouchableOpacity activeOpacity={0.7}>
                             <Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:'https://ar.rdcpix.com/7efd8fc5d2c1744ebf2ae922a0cec90cc-f3791207535od-w480_h360.jpg'}}>

                             </Image>
                             <View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
                                 <View>
                                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
                                         Echo2
                                     </Text>
                                     <Text style={{fontSize:12,color:'grey'}}>
                                         Solar beach marchat
                                     </Text>
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>4.3</Text>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>





                     <View style={styles.card2}>
                         <TouchableOpacity activeOpacity={0.7}>
                             <Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:'https://rentpath-res.cloudinary.com/$img_current/t_3x2_jpg_xl/t_unpaid/a213370dccc6991c9e2ff7bcb5e25117'}}>

                             </Image>
                             <View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
                                 <View>
                                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
                                         Echo3
                                     </Text>
                                     <Text style={{fontSize:12,color:'grey'}}>
                                         Solar beach marchat
                                     </Text>
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>4.3</Text>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>





                     <View style={styles.card2}>
                         <TouchableOpacity activeOpacity={0.7}>
                             <Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6mB2G13MRN6LCNQye1dEmRlzKyKvhxZUtg&usqp=CAU'}}>

                             </Image>
                             <View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
                                 <View>
                                     <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
                                         Echo 4
                                     </Text>
                                     <Text style={{fontSize:12,color:'grey'}}>
                                         Solar beach marchat
                                     </Text>
                                 </View>
                                 <View>
                                     <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>4.3</Text>
                                 </View>
                             </View>
                         </TouchableOpacity>
                     </View>





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

export default SearchDetails;