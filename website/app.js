/* Global Variables */
const endpoint = "https://samples.openweathermap.org/data/2.5/weather?zip=";
const key = "6dce3e4c6dcdfaf69381d22179b69407";
var zip;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);
function action (e) {
    zip = document.getElementById("zip").value;
    postData(endpoint, zip, key);
}

const postData = async(endpoint, zip, key) => {
    const fetchApi = endpoint+zip+",us&appid="+key;
    debugger
    const res = await fetch(fetchApi,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials" : true 
        },
        mode: 'no-cors',
        credentials: 'same-origin', 
    }).then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
};
