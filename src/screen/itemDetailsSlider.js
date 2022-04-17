import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image,StyleSheet,ImageBackground} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH );


const renderItem = ({item}) => {
  return (
    <View style={styles.card2}>
      {/* {console.log("sxaxsa",item)} */}
      <ImageBackground style={{width:'100%',height:450,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}} source={{uri:item}}>

      </ImageBackground>

  </View>
  );
};

const MyCarouselitem = (props) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  // console.log("aw>>>>>>>>>>>",props.img.length);
// const data = [
//   {
//     id: 1,
//     name: 'Farmhouse kitchen',
//     url: props.img,
//     Rating:4.4,
//     name2:'20 street snkoor 3',

//   },
  
// ];
  
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        ref={isCarousel}
        data={props.img}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={props.img.length}
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