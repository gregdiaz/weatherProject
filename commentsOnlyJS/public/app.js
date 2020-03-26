// Personal API Key for OpenWeatherMap API
const api = "6dce3e4c6dcdfaf69381d22179b69407";
// Event listener to add function to existing HTML DOM element
debugger;
document.getElementById("generate").addEventListener('click',action);
/* Function called by event listener */
function action (e) {
    apiFunction(api);
}
/* Function to GET Web API Data*/
const apiFunction = async(api) =>{
    const res = await fetch(api)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    }
    catch(error){
        console.log("error", error);
    }
};
/* Function to POST data */


/* Function to GET Project Data */
