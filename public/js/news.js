const newTitle1 = document.getElementById("newsTitle1");
const newTitle2 = document.getElementById("newsTitle2");
const newTitle3 = document.getElementById("newsTitle3");
const newsImage1 = document.getElementById("newsImage1");
const newsImage2 = document.getElementById("newsImage2");
const newsImage3 = document.getElementById("newsImage3");
const newsDesc1 = document.getElementById("newsDesc1");
const newsDesc2 = document.getElementById("newsDesc2");
const newsDesc3 = document.getElementById("newsDesc3");
const href1 = document.getElementById("href1");
const href2 = document.getElementById("href2");
const href3 = document.getElementById("href3");

const news1 = document.getElementById("news1");
const news2 = document.getElementById("news2");
const news3 = document.getElementById("news3");
const news4 = document.getElementById("news4");
const news5 = document.getElementById("news5");

const setApiData = (array) => {
    console.log(array[0].articles[1].title);
    newTitle1.innerHTML = `${array[0].articles[1].title}`;
    newsImage1.innerHTML = `<img src="${array[0].articles[1].urlToImage}" alt="">`;
    newsDesc1.innerHTML = `${(array[0].articles[1].content).slice(0,200)}`;
    href1.href = `${array[0].articles[1].url}`;
    newTitle2.innerHTML = `${array[0].articles[2].title}`;
    newsImage2.innerHTML = `<img src="${array[0].articles[2].urlToImage}" alt="">`;
    newsDesc2.innerHTML = `${(array[0].articles[2].content).slice(0,200)}`;
    href2.href = `${array[0].articles[2].url}`;
    newTitle3.innerHTML = `${array[0].articles[3].title}`;
    newsImage3.innerHTML = `<img src="${array[0].articles[3].urlToImage}" alt="">`;
    newsDesc3.innerHTML = `${(array[0].articles[3].content).slice(0,200)}`;
    href3.href = `${array[0].articles[3].url}`;

    news1.innerHTML = `${(array[0].articles[4].title).slice(0,25)}`;
    news1.href= `${array[0].articles[4].url}`;
    news2.innerHTML = `${(array[0].articles[5].title).slice(0,25)}`;
    news2.href= `${array[0].articles[5].url}`;
    news3.innerHTML = `${(array[0].articles[6].title).slice(0,25)}`;
    news3.href= `${array[0].articles[6].url}`;
    news4.innerHTML = `${(array[0].articles[7].title).slice(0,25)}`;
    news4.href= `${array[0].articles[7].url}`;
    news5.innerHTML = `${(array[0].articles[8].title).slice(0,25)}`;
    news5.href= `${array[0].articles[8].url}`;
}




function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    displayLocation(lat,lon);
}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable."
        break;
        case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred."
        break;
    }
}


const getNewsApi = async () => {
        try {
            let urlLink = `https://newsapi.org/v2/everything?q=dunya-news&apiKey=31ddc3d64c4f4e32824d6078dd7c9d48`;
            const apiJson = await fetch(urlLink);
            const apiObject = await apiJson.json();
            const apiArray = [apiObject];
            console.log(apiArray);
            setApiData(apiArray);

        } catch(err) {
            alert(err);
            
        }
}

getNewsApi();