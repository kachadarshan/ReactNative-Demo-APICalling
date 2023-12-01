import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,

} from 'react-native'
import { axiosDeleteRequest, axiosGetRequest, axiosPostRequest, axiosUpdateRequest } from './Axiosapirequest'


const App = () => {


  useEffect(() => {
    GetData()
  }, [])

  const GetData = async () => {
    // const response =await axiosGetRequest();   //this if for get
    // const response =await axiosPostRequest();   //this is for post

    // const response =await axiosUpdateRequest(); //this is for update
    const response =await axiosDeleteRequest();
    console.log(response);

  }

  return (
    <View style={styles.constainer}>
      <Text style={styles.mainTxt}>api calling using AXIOS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainTxt:{
    fontSize:25,
    color:"red",
    fontWeight:"bold"
  }

})

export default App
