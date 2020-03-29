/* Global Variables */
const endpoint = "http://api.openweathermap.org/data/2.5/weather?zip=";
const key = "6dce3e4c6dcdfaf69381d22179b69407";
var zip;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById("generate").addEventListener('click',action);
function action (e) {
    zip = document.getElementById("zip").value;
    getData(endpoint, zip, key);
}
const getData = async(endpoint, zip, key) => {
    const fetchApi = endpoint+zip+",us&appid="+key;
    const res = await fetch(fetchApi);
    try {
            const data = await res.json();
            console.log(data)
            return data;
        }
    catch(error){
            console.log("error", error);
        }
};

const postData = async(url ='/',data = {})=>{
    debugger;
    const res = await fetch(url,{
        method:'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        console.log(newData)
        return newData;
    }
catch(error){
        console.log("error", error);
    }
};



