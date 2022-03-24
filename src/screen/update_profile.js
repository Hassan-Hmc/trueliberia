
import React,{useState,useEffect,useRef} from "react";
import {connect} from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,TextInput, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





function UpdateProfile(props) {

return(
  
  
  <View style={styles.container}>
<TouchableOpacity onPress={()=>props.navigation.navigate('home')} style={{position:'absolute',left:10,top:15}}>
<Icon name="arrow-left-thin" size={35} color="#000"  />
</TouchableOpacity>    
<Image style={{width:120,height:120,borderRadius:100,borderWidth:7,borderColor:'#FDC500',resizeMode:'cover'}} source={{uri:'https://external-preview.redd.it/ICikkd5y_XXXZL-lxbaOG6l-CTwnMiyUV9Wjbcaw7mE.jpg?width=640&crop=smart&auto=webp&s=883ef6f426b62c3b99e9b6cf5404d4d8c78db277'}}>

</Image>
<Text style={{fontSize:23,color:'#000',marginTop:20}}>
    John Doe 
</Text>




<TextInput  style={styles.input1} placeholder='John' placeholderTextColor={'#989898'} >


</TextInput>



<TextInput  style={styles.input} placeholder='Doe' placeholderTextColor={'#989898'} >


</TextInput>



<TextInput  style={styles.input} placeholder='Johnd@gmial.com' placeholderTextColor={'#989898'} >


</TextInput>


<TextInput  style={styles.input} placeholder='Password' placeholderTextColor={'#989898'} >


</TextInput>


<TouchableOpacity onPress={()=>props.navigation.navigate('home')}  activeOpacity={0.6} style={styles.button}>

<Text style={styles.ButtonText}>
    Update Profile
</Text>

</TouchableOpacity>

    </View>






    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:'20%'
    },
    input:{
        width:'80%',
        height:55,
        borderWidth:1.5,
        borderRadius:0,
        borderColor:'#989898',
        marginTop:5,
        fontSize:15,
        paddingLeft:10,
        borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,
        
      },
      input1:{
        width:'80%',
        height:55,
        borderWidth:1.5,
        borderRadius:0,
        borderColor:'#989898',
        marginTop:35,
        fontSize:15,
        paddingLeft:10,
        borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,
        
      },
      button:{
        width:'80%',
        height:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00296B',
        marginTop:60
    },
    ButtonText:{
        fontSize:18,
        fontWeight:'500',
        color:'#fff',
        fontFamily:'sans-serif-condensed'
           },
});
  

  const mapStateToProps = (state ) => {
    return {
    
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      
  
    
    }}

    export default connect(mapStateToProps,mapDispatchToProps)(UpdateProfile)