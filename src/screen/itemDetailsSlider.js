import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image,StyleSheet,ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH );

const data = [
  {
    id: 1,
    name: 'Farmhouse kitchen',
    url: 'https://1.bp.blogspot.com/-OCGbyndg8ng/YCoohFtiTYI/AAAAAAAAUyo/TVXv1Ezh3YgqLXHzyU4XRvzPydm5sEkEQCLcBGAsYHQ/s907/Chicken_Tikka_Skewers_03.jpeg',
    Rating:4.4,
    name2:'20 street snkoor 3',

  },
  {
    id: 2,
    name: 'Farmhouse ',
    url: 'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
    name2:'20 street snkoor 2',
    Rating:3.5

    },
  {
    id: 3,
    name: 'kitchen',
    url: 'https://75276bc03af26d7c1f58-72b421883bb5b133f34e068afdd7cb11.ssl.cf3.rackcdn.com/2017/03/Fast_food_meal.jpg',
    name2:'20 street snkoor 3',
    Rating:2.4
  },
  {
    id: 4,
    name: 'Farmhouse kitchen',
    url: 'https://1.bp.blogspot.com/-OCGbyndg8ng/YCoohFtiTYI/AAAAAAAAUyo/TVXv1Ezh3YgqLXHzyU4XRvzPydm5sEkEQCLcBGAsYHQ/s907/Chicken_Tikka_Skewers_03.jpeg',
    Rating:4.4,
    name2:'20 street snkoor 3',

  },
  {
    id: 5,
    name: 'Farmhouse ',
    url: 'https://1.bp.blogspot.com/-OCGbyndg8ng/YCoohFtiTYI/AAAAAAAAUyo/TVXv1Ezh3YgqLXHzyU4XRvzPydm5sEkEQCLcBGAsYHQ/s907/Chicken_Tikka_Skewers_03.jpeg',
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
<ImageBackground style={{width:'100%',height:450,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:item.url}}>

</ImageBackground>

</View>
  );
};

const MyCarouselitem = () => {
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
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'red',
          marginLeft:-5,
         zIndex:2
  
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: '#fff'
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        containerStyle={{position:'absolute',top:400,left:120}}
      />
    </View>
  );
};

const styles = StyleSheet.create({

card2:{
  width:'100%',
  height:450,
  marginTop:20,
  borderRadius:10,
marginLeft:-15
}
});
export default MyCarouselitem;