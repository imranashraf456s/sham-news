const cityInput = document.getElementById("cityInput");
const btnSearchNow = document.getElementById("btnSearchNow");
const outputDay = document.getElementById("outputDay");
const outputDate_Month = document.getElementById("outputDate_Month");
const outputCity_CountryName = document.getElementById("outputCity_CountryName");
const outputTemperature = document.getElementById("outputTemperature");
const temperatureIcon = document.getElementById("temperatureIcon");
const humidityIcon = document.getElementById("humidityIcon");
const windSpeed = document.getElementById("windSpeed");
const sunRise = document.getElementById("sunRise");
const forecastDay1 = document.getElementById("forecastDay1");
const forecastDay2 = document.getElementById("forecastDay2");
const forecastDay3 = document.getElementById("forecastDay3");
const forecastDay4 = document.getElementById("forecastDay4");
const forecastDay5 = document.getElementById("forecastDay5");
const forecastDay6 = document.getElementById("forecastDay6");
const forecastIcon1 = document.getElementById("forecastIcon1");
const forecastIcon2 = document.getElementById("forecastIcon2");
const forecastIcon3 = document.getElementById("forecastIcon3");
const forecastIcon4 = document.getElementById("forecastIcon4");
const forecastIcon5 = document.getElementById("forecastIcon5");
const forecastIcon6 = document.getElementById("forecastIcon6");
const errorMess = document.getElementById("error") ;
const forecastTemp1 = document.getElementById("forecastTemp1");
const forecastTemp2 = document.getElementById("forecastTemp2");
const forecastTemp3 = document.getElementById("forecastTemp3");
const forecastTemp4 = document.getElementById("forecastTemp4");
const forecastTemp5 = document.getElementById("forecastTemp5");
const forecastTemp6 = document.getElementById("forecastTemp6");
const date = document.getElementsByClassName("date");


const setDay_Date = () => {
    let dateData = new Date();
    
    let gday = dateData.getDay();
    let gdate = dateData.getDate();
    let gmonth = dateData.getMonth();
    let month ="";

    switch(gday){
        case 0:
        outputDay.innerHTML = "Sunday";
        forecastDay1.innerHTML = "Monday";
        forecastDay2.innerHTML = "Tuesday";
        forecastDay3.innerHTML = "Wednesday";
        forecastDay4.innerHTML = "Thursday";
        forecastDay5.innerHTML = "Friday";
        forecastDay6.innerHTML = "Saturday";
        break;

        case 1:
         outputDay.innerHTML = "Monday";
        forecastDay1.innerHTML = "Tuesday";
        forecastDay2.innerHTML = "Wednesday";
        forecastDay3.innerHTML = "Thursday";
        forecastDay4.innerHTML = "Friday";
        forecastDay5.innerHTML = "Saturday";
        forecastDay6.innerHTML = "Sunday";
        break;

        case 2: 
        outputDay.innerHTML = "Tuesday";
        forecastDay1.innerHTML = "Wednesday";
        forecastDay2.innerHTML = "Thursday";
        forecastDay3.innerHTML = "Friday";
        forecastDay4.innerHTML = "Saturday";
        forecastDay5.innerHTML = "Sunday";
        forecastDay6.innerHTML = "Monday";
        break;

        case 3:
        outputDay.innerHTML = "Wednesday";
        forecastDay2.innerHTML = "Thursday";
        forecastDay3.innerHTML = "Friday";
        forecastDay4.innerHTML = "Saturday";
        forecastDay5.innerHTML = "Sunday";
        forecastDay6.innerHTML = "Monday";
        forecastDay1.innerHTML = "Tuesday";
        break;

        case 4:
        outputDay.innerHTML = "Thursday";
        forecastDay1.innerHTML = "Friday";
        forecastDay2.innerHTML = "Saturday";
        forecastDay3.innerHTML = "Sunday";
        forecastDay4.innerHTML = "Monday";
        forecastDay5.innerHTML = "Tuesday";
        forecastDay6.innerHTML = "Wednesday";
        break;

        case 5:
        outputDay.innerHTML = "Friday";
        forecastDay2.innerHTML = "Saturday";
        forecastDay3.innerHTML = "Sunday";
        forecastDay4.innerHTML = "Monday";
        forecastDay5.innerHTML = "Tuesday";
        forecastDay6.innerHTML = "Wednesday";
        forecastDay1.innerHTML = "Thursday";
        break;

        case 6:
        outputDay.innerHTML = "Saturday";
        forecastDay3.innerHTML = "Sunday";
        forecastDay4.innerHTML = "Monday";
        forecastDay5.innerHTML = "Tuesday";
        forecastDay6.innerHTML = "Wednesday";
        forecastDay1.innerHTML = "Thursday";
        forecastDay2.innerHTML = "Friday";
        break;

        default:
            outputDay.innerHTML = "";
            forecastDay3.innerHTML = "";
            forecastDay4.innerHTML = "";
            forecastDay5.innerHTML = "";
            forecastDay6.innerHTML = "";
            forecastDay1.innerHTML = "";
            forecastDay2.innerHTML = "";
            break;
    }

    switch(gmonth){
        case 0: month = "Jan";
        break;
        case 1: month = "Feb";
        break;
        case 2: month = "Mar";
        break;
        case 3: month = "April";
        break;
        case 4: month = "May";
        break;
        case 5: month = "June";
        break;
        case 6: month = "July";
        break;
        case 7: month = "Aug";
        break;
        case 8: month = "Sep";
        break;
        case 9: month = "Oct";
        break;
        case 10: month = "Nov";
        break;
        case 11: month = "Dec";
        break;
        default: month = "";
    }

    outputDate_Month.innerHTML = `${gdate} ${month}`;
}

function  toHHMMSS(secs){
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(secs * 1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
let seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

return formattedTime;
}

const setApiData = (array) => {
    console.log(array[0].weather[0].icon);
    outputCity_CountryName.innerHTML = `${array[0].name}, ${array[0].sys.country}`;
    outputTemperature.innerHTML = `${Math.floor(array[0].main.temp - 273.15)}<sup>o</sup>C`;
    temperatureIcon.innerHTML = `<img src="http://www.openweathermap.org/img/wn/${array[0].weather[0].icon}@2x.png" alt="weather status" width=90>`;
    humidityIcon.innerHTML = `<i class="fas fa-umbrella"></i> ${array[0].main.humidity}%`;
    windSpeed.innerHTML = `<i class="fas fa-wind"></i> ${array[0].wind.speed} km/h`;
    sunRise.innerHTML = `<i class="fas fa-sun"></i> ${toHHMMSS(array[0].sys.sunrise)} AM`;

    //Below Data is on imagination because not API found for Week forecast

    forecastIcon1.innerHTML = `<i class="fas fa-sun fa-3x" style="color:#44b3e0;"></i> `;
    forecastIcon2.innerHTML = `<i class="fas fa-sun fa-3x" style="color:#44b3e0;"></i> `;
    forecastIcon3.innerHTML = `<i class="fas fa-cloud fa-3x" style="color:#44b3e0;"></i> `;
    forecastIcon4.innerHTML = `<i class="fas fa-bolt fa-3x" style="color:#44b3e0;"></i> `;
    forecastIcon5.innerHTML = `<i class="fas fa-cloud-sun-rain fa-3x" style="color:#44b3e0;"></i> `;
    forecastIcon6.innerHTML = `<i class="fas fa-sun fa-3x" style="color:#44b3e0;"></i> `;
 
    forecastTemp1.innerHTML = `${Math.floor((array[0].main.temp - 273.15) + 1)}<sup>o</sup>C`;
    forecastTemp2.innerHTML = `${Math.floor((array[0].main.temp - 273.15) + 2)}<sup>o</sup>C`;
    forecastTemp3.innerHTML = `${Math.floor((array[0].main.temp - 273.15) -4)}<sup>o</sup>C`;
    forecastTemp4.innerHTML = `${Math.floor((array[0].main.temp - 273.15) + -5)}<sup>o</sup>C`;
    forecastTemp5.innerHTML = `${Math.floor((array[0].main.temp - 273.15) + 3)}<sup>o</sup>C`;
    forecastTemp6.innerHTML = `${Math.floor((array[0].main.temp - 273.15) + 1)}<sup>o</sup>C`;


}

//Currently working to get auto Adress
 
//   let geocoder;
  
// //Get the latitude and the longitude;
// const successFunction = (position) => {
//     let lat = position.coords.latitude;
//     let lng = position.coords.longitude;
//     codeLatLng(lat, lng)
// }

//      const errorFunction = () => alert("Geocoder failed");
//      const initialize = () => geocoder = new google.maps.Geocoder();

//      if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
//     } 

//   const codeLatLng = (lat, lng) => {

//     let latlng = new google.maps.LatLng(lat, lng);
//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//       console.log(results)
//         if (results[1]) {
//          //formatted address
//          alert(results[0].formatted_address)
//         //find country name
//              for (let i=0; i<results[0].address_components.length; i++) {
//             for (let b=0;b<results[0].address_components[i].types.length;b++) {

//             //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
//                 if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
//                     //this is the object you are looking for
//                     city= results[0].address_components[i];
//                     break;
//                 }
//             }
//         }
//         //city data
//         alert(city.short_name + " " + city.long_name)

//         } else {
//           alert("No results found");
//         }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }




const count = 1;
const getWeatherApi = async (Event) => {
    Event.preventDefault();
     if(cityInput.value == "")
        {errorMess.innerHTML = "You entered nothing 🤦‍♂️";
    }else{
        try {
            errorMess.innerHTML = "";
            let urlLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=bfb99509e858ddd85bffdafdd69d24a8`;
            const apiJson = await fetch(urlLink);
            const apiObject = await apiJson.json();
            const apiArray = [apiObject];
            console.log(apiArray);
            setDay_Date();
            setApiData(apiArray);

        } catch(err) {
            errorMess.innerHTML = "You entered a invalid city name 🤷‍♂️";
            
        }
    }
}

btnSearchNow.addEventListener('click' , getWeatherApi);