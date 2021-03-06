var mCityList = [];

// Creating the API connection
const api = {
    key: "3f1cc7db57b6c294d8bb79dd0ff035e1",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  //Check when we hit enter
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  

  //Check if the key pressed is the enter
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  //Get the results by using the base for the API, the API key and then getting the results on json and displaying those results
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

  //Showing the information getting the data from the API
  function displayResults (weather) {
    let cityvalue = `${weather.name}, ${weather.sys.country}`;
    let mainList = document.getElementById("navp");
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    mCityList.push(cityvalue);
   // document.getElementById("demo").innerHTML = mCityList;
   // $("#navp").empty();


    //for(var i=0;i<mCityList.length;i++){
    //    var elem = document.createElement("li");
    //    elem.textContent=mCityList[i];
    //    mainList.appendChild(elem); 
   //}
   var elem = document.createElement("li");
    elem.textContent=mCityList[mCityList.length-1];
    mainList.appendChild(elem); 
  }

  //Creating the date builder function 
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

  //Run if the user's search returns NOT null
//Add a city to our list
function appendCityToList(pCityName) {
    $iNewCity = $("<li>");
    $iNewCity.attr("id", pCityName);
    $iNewCity.addClass("list-group-item");
    $iNewCity.text(pCityName);

    $cityList.append($iNewCity);
    mCityList.push(mNewCity);
    console.log(mCityList);

    setUpDisplay(pCityName);
}