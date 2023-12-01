/*Here We Learn to How to call API Using Fetch  */


//this is the GET Methods 
export const apiGetRequestfetch = async () => {

    // await fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonResponse = await response.json();
    return jsonResponse;
}


//this is the POST Methods
export const apiPostRequestfetch = async () => {

const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: 'POST',
    body: JSON.stringify({
      title: 'Darshan Kacha',
      body: 'Software Dev',
      userId: 80,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  
  const newRespponse = await response.json();
  return newRespponse; 

}


//this is the UPDATE(put) Methods
export const apiUpdateRequestfetch = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1' , {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'Darshan Kacha Navada',
            body: 'Software Dev',
            userId: 7,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
      const newRespponse = await response.json();
      return newRespponse; 
    
    }
    

    //this is the Delete Methods
export const apiDeleteRequestfetch = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1' , {
        method: 'DELETE',
        
      });
      
      const newRespponse = await response.json();
      return newRespponse; 
    
    }
