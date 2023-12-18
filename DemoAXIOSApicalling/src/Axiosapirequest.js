/* Here We make methods of GET,POST,UPDATE,DELETE */

import axios from "axios";

//using promises axios api calling
 // useEffect(() => {
  //   axiosDELETErequest()
  // }, [])

  // const dataObj = {
  //   id: 11,
  //   name: "Tom Brady",
  //   username: "Brad",
  //   email: "tombrad@asd.com",
  // }


  // const axiosGETrequest = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((response) => console.log('DKD '))
  //     .catch((error) => console.log(error))

  // }

  // const axiosPOSTrequest = () => {
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/users', dataObj)
  //     .then((response) => console.log('Post Methods Work'))
  //     .catch((error) => console.log(error))

  // }

  // //put 
  // const axiosUPDATErequest = () => {
  //   axios
  //     .put('https://jsonplaceholder.typicode.com/users/1', dataObj)
  //     .then((response) => console.log('Update Methods Work'))
  //     .catch((error) => console.log(error))

  // }

  // const axiosDELETErequest = () => {
  //   axios
  //     .put('https://jsonplaceholder.typicode.com/users/1')
  //     .then((response) => console.log('DELETE Methods Work'))
  //     .catch((error) => console.log(error))

  // }

//this is for  GET
export const axiosGetRequest = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories")

    const jres = await res.data
    return jres;
}


//this is for POST
export const axiosPostRequest = async () => {

    const data ={
        title: 'Darshan Kacha',
        price: 100,
        description: 'lorem ipsum set',
        image: 'https://avatars.githubusercontent.com/u/112555093?v=4',
        category: 'Software Dev'
    }
    const res = await axios.post("https://fakestoreapi.com/products",data)
    const jres = await res.data
    return jres;
    
}

//this is for put 
export const axiosUpdateRequest = async () => {

    const data ={
        title: 'Darshan Kacha Navada',
        price: 100,
        description: 'lorem ipsum set',
        image: 'https://avatars.githubusercontent.com/u/112555093?v=4',
        category: 'Software Dev'
    }

    const res = await axios.put("https://fakestoreapi.com/products/14",data)
    const jres = await res.data
    return jres;
    
}


//this is for DELETE
export const axiosDeleteRequest = async () => {

   
    const res = await axios.delete("https://fakestoreapi.com/products/8")
    const jres = await res.data
    return jres;
    
}
