export function FactoryServerCommunication(url, method, body) {
  const BASE_URL = "http://localhost:9292";
  let config;

  switch (method) {
    case "POST":
      config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      break;
    case "DELETE":
      config = {
        method: "DELETE",
      };
      break;
    case "PATCH":
      config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      break;
    default:
      config = {
        method: "GET",
      };
  }
  return function (cb) {
    fetch(`${BASE_URL}${url}`, config)
    .then((response) => response.json())
    .then((data) => {
        if (cb){
            cb(data);
        }
        //console.log(`${BASE_URL}${url}`, method)
        console.log(data)
    });  
    
  };
}
