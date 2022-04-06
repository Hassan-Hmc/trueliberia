import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

import Home from '../screen/home';
import UpdateProfile from '../screen/update_profile';
import SearchDetails from '../screen/searchDetails';
import item_Details from '../screen/item_details';
import Search from '../screen/search';

import Map from '../screen/map';
import MyCarousel from '../screen/slider';
import Promos from '../screen/promos';
import News from '../screen/news';
import Places from '../screen/places';





const Stack = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
   <Stack.Navigator
   screenOptions={{
    headerShown: false

   }}
   >
          <Stack.Screen name="home" component={Home} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/>
           <Stack.Screen name="places" component={Places} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/>
           <Stack.Screen name="news" component={News} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/>
           <Stack.Screen name="promos" component={Promos} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/>
<Stack.Screen name="Map" component={Map} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/>
          <Stack.Screen name="itemDetails" component={item_Details} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/>       
 <Stack.Screen name="MyCarousel" component={MyCarousel} 
            options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}/> 
          <Stack.Screen name="searchDetails" component={SearchDetails} 
             options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}/>

<Stack.Screen name="search" component={Search} 
             options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}/>

            
          <Stack.Screen name="updateprofile" component={UpdateProfile} 
             options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}/>

   </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
  





  export default AppNavigation;