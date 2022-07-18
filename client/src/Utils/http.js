let API = null
if (process.env.NODE_ENV === "development") {
    API = "http://localhost:3000";
  } else if (process.env.NODE_ENV === "production") {
    API = "";
}
console.log('API', API)

const appFetch = (endPoint, method, data) => {
   // const token = auth.getItem("token");
    //const uuid = auth.getItem("uuid");
    return new Promise((resolve, reject) => {
      fetch(`${API}${endPoint}`, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        //  "x-authentication": token,
         // uuid: uuid
        }
      })
        .then(res => {
          return res.json();
        })
        .then(json => {
          resolve(json);
        })
        .catch(error => {
          reject({error: JSON.stringify(error.message)});
        });
    }).catch(error => {
        console.log(error)
      return error ;
    });
  };
  
  export default appFetch;