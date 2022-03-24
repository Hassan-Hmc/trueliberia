

const INITIAL_STATE = {


name:'hassan'
}






export default (state = INITIAL_STATE, action) => {
  
  if(action.type=='pictures')
  {   
    
    return({
      
        pictures_arr:{pic:action.payload}
        
      })
      
    }
    
    
    if(action.type=='data')
    
    // console.log("pic>>>>",action.payload);
    {
      
      return({
        
      facebook_login:action.payload
    })

    }
 

  return state; 
}