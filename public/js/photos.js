{/* <div class="photo">
<div class="photo-preview photo-detail" data-bg-image="images/photo-1.jpg"></div>
<div class="photo-details">
<h3  class="photo-title"><a href="#">photo</a></h3>
<p>photo details</p>
<div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
</div>
</div> */}

const outputPhoto1 = document.getElementById("outputPhoto1");
const outputPhoto2 = document.getElementById("outputPhoto2");
const outputPhoto3 = document.getElementById("outputPhoto3");
const outputPhoto4 = document.getElementById("outputPhoto4");
const outputPhoto5 = document.getElementById("outputPhoto5");
const outputPhoto6 = document.getElementById("outputPhoto6");
const outputPhoto7 = document.getElementById("outputPhoto7");
const outputPhoto8 = document.getElementById("outputPhoto8");
const outputPhoto9 = document.getElementById("outputPhoto9");
const outputPhoto10 = document.getElementById("outputPhoto10");
const photosArray = ["city","pakistan","lahore","usa","india","britain","cats","dogs","nature","cars","technology"];

const setApiData = (apiArray) => {
       console.log(apiArray[0].results[0].urls.small);
        outputPhoto1.innerHTML = `<div class="photo-preview photo-detail" style="postion:relative;"> <img style="min-height: 100%; min-width: 100%; position:absolute;" src="${apiArray[0].results[0].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[0].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[0].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto2.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[2].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[2].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[2].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto3.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[3].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[3].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[3].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto4.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[4].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[4].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[4].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto5.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[5].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[5].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[5].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto6.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[6].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[6].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[6].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto7.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[7].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[7].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[7].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto8.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[8].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[8].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[8].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto9.innerHTML = `<div class="photo-preview photo-detail"> <img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[9].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[9].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[9].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;

        outputPhoto10.innerHTML = ` <div class="photo-preview photo-detail"><img style="min-height: 100%; min-width: 100%;" src="${apiArray[0].results[1].urls.thumb}"> </div>
        <div class="photo-details">
        <h3  class="photo-title"><a href="#">${(apiArray[0].results[1].alt_description).toUpperCase()}</a></h3>
        <p>${apiArray[0].results[1].description}</p>
        <div class="star-rating" title="Rated 1 out of 5"><span style="width:60%"><strong class="rating">1</strong> out of 5</span></div>
        </div>`;
 }

const getPhotoApi = async () => {

    console.log();

        try {
            let photourlLink = `https://api.unsplash.com/search/photos?query=${photosArray[Math.round(Math.random() * photosArray.length)]}&client_id=M6T6j5O-PhamJMRERLC1-SgqjMlEhBYtSoNICZxOs2s`;
            const apiphotoJson = await fetch(photourlLink);
            const apiphotoObject = await apiphotoJson.json();
            const apiphotoArray = [apiphotoObject];
            console.log(apiphotoArray[0].results[1].alt_description);

            setApiData(apiphotoArray);


        } catch(err) {

            alert("Nothing Found Error 🤷‍♂️");
            
        }
}

getPhotoApi();