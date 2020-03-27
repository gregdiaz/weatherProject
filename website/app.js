/* Global Variables */
const endpoint = "https://samples.openweathermap.org/data/2.5/weather?zip=";
const key = "6dce3e4c6dcdfaf69381d22179b69407";
var zip;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);
function action (e) {
    debugger;
    zip = document.getElementById("zip").value;
    apiFunction(endpoint, zip, key);
}

const apiFunction = async(endpoint, zip, key) => {
    const fetchApi = endpoint+zip+",us&appid="+key;
    debugger
    const res = await fetch(fetchApi)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }
    catch(error){
        console.log("error", error);
    }
};
