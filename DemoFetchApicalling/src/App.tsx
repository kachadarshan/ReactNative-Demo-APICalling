import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { apiDeleteRequestfetch, apiGetRequestfetch, apiPostRequestfetch, apiUpdateRequestfetch } from './MyfetchApirequest'

const App = () => {

  const getData = async () => {
    // const response = await apiGetRequestfetch();   //this is get methods 
    // const response = await apiPostRequestfetch();  //this is the post methods 

    // const response = await apiUpdateRequestfetch();   //this is for Update(PUT) methods 
    const response = await apiDeleteRequestfetch();      //this is for delete request 
    console.log("Data", response)
    
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>THis Is Fetch Api calling </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainTxt: {
    fontSize: 20,
    color: "red"
  }
})


export default App