import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image,StyleSheet,TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const data = [
  {
    id: 1,
    name: 'Farmhouse kitchen',
    url: 'https://www.nicepng.com/png/full/54-545831_plate-of-food-png-eat-to-live-diet.png',
    Rating:4.4,
    name2:'20 street snkoor 3',

  },
  {
    id: 2,
    name: 'Farmhouse ',
    url: 'https://www.freepnglogos.com/uploads/food-png/fast-food-transparent-png-pictures-icons-and-png-18.png',
    name2:'20 street snkoor 2',
    Rating:3.5

    },
  {
    id: 3,
    name: 'kitchen',
    url: 'https://www.pngfind.com/pngs/m/44-443237_download-fast-food-hd-png-transparent-png.png',
    name2:'20 street snkoor 3',
    Rating:2.4
  },
  {
    id: 4,
    name: 'Farmhouse kitchen',
    url: 'https://img.favpng.com/4/15/22/french-fries-fast-food-vegetarian-cuisine-breakfast-hamburger-png-favpng-ZHvf1FWw9tPPJG3WchrWnUif0.jpg',
    Rating:4.4,
    name2:'20 street snkoor 3',

  },
  {
    id: 5,
    name: 'Farmhouse ',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUDxr0nK2O4lnpkN6lSbaq0fCcujnmKTe8xRNiFAel5h4QFjBtXVDT-yltHcE9fHD2QM&usqp=CAU',
    Rating:3.5,
    name2:'20 street snkoor 3',


    },
  {
    id: 6,
    name: 'kitchen',
    url: 'https://w7.pngwing.com/pngs/22/746/png-transparent-kfc-fully-loaded-meal-screenshot-fried-chicken-fast-food-kfc-buffalo-wing-chicken-sandwich-kfc-food-recipe-chicken-meat.png',
    name2:'20 street snkoor 3',
    Rating:2.4
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.card2}>
<TouchableOpacity activeOpacity={1}>
<Image style={{width:'100%',height:160,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:item.url}}>

</Image>
<View style={{width:'100%',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10}}>
<View>
  <Text style={{fontSize:14,fontWeight:'bold',color:'#00296B'}}>
      Echo
  </Text>
  <Text style={{fontSize:12,color:'grey'}}>
    {item.name2}
  </Text>
</View>
<View>
  <Text style={{fontWeight:'bold',color:'#1FDB5F',fontSize:15}}>{item.Rating}</Text>
</View>
</View>
</TouchableOpacity>
</View>
  );
};

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
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