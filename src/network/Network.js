import axios from "axios";

export const getRequest = (url,successHandler,errorHandler) => {
      axios
      .get(url)
      .then(response => {
         if(response.status==200) 
         {
            successHandler(response.data)
         }
         else
         {
            errorHandler(response.data)
         }
        
       })
       .catch(function(error) {
         errorHandler(error)
     }).finally(function() {
         // always executes at the last of any API call
     });
  
}

export const postRequest = (url,successHandler,errorHandler,requestBody) => {
    axios
        .post(url,requestBody)
        .then(response => {
         console.log(response)
         if(response.status==200) 
         {
            successHandler(response.data)
         }
         else
         {
            errorHandler(response.data)
         }
        
       })
       .catch(function(error) {
         errorHandler(error)
     }).finally(function() {

     });
}