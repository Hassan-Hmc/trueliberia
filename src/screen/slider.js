import React, {useState, useRef,useEffect} from 'react';
import {Text, View, Dimensions, Image,StyleSheet,TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);



const renderItem = ({item},props) => {


  return (
    
    <View style={styles.card2}>
<TouchableOpacity onPress={()=>{props.props.navigation.navigate('itemDetails',{data:item})}} activeOpacity={1}>
<Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:item.image}}>

</Image>
<View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
<View>
  <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
     {item.name}
  </Text>
  <Text style={{fontSize:12,color:'grey'}}>
    {item.slug}
  </Text>
</View>
<View>
  <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>{item.rating}</Text>
</View>
</View>
</TouchableOpacity>
</View>
  );
};

const MyCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  
  const [feature_data, setfeature_data] = useState([])




  useEffect(()=>{
    as()
    },[])
    const as= async ()=>{
    
    
    
      fetch('https://www.trueliberia.com/api/businesses?featured=1',{
        method:'GET'
      })
      .then( async (result)=> {
      // handle the response
      const json= await result.json()
      setfeature_data(json)
      })
      .catch((e)=> {
      // handle the error
      //   console.log("no>>>>>>>>>>>>>",);
      
      });
    
    }


  return (
    <>
      {feature_data.length>0
      ?
    <View style={{marginVertical: 10}}>
      
      <Carousel
        ref={isCarousel}
        data={feature_data}
        renderItem={(item)=>renderItem(item,props)}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        />
      <Pagination
        dotsLength={feature_data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#C4C4C4',
          marginLeft:-5
          
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black'
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.1}
        inactiveDotScale={0.6}
        />

      </View>
      :
      // <View>
      //   {console.log("awawaw")}
      //   <Text style={{color:'black'}}>hjbjhbhj</Text>
      // </View>
      
      <View  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      {console.log("gh>>>")}
                                  <ContentLoader height="230" width="90%"  >
                                  
                                  <Rect x="15" y="15" rx="6" ry="6" width="350" height="25" />
                                
                                  <Rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
      
                                </ContentLoader>
                                  </View>
    }
    </>
  );
};

const styles = StyleSheet.create({

card2:{
  width:'100%',
  height:220,
  marginTop:20,
  borderRadius:10,
  backgroundColor:'rgba(255, 255, 255, 0.438)',
marginLeft:-15
}
});
export default MyCarousel;