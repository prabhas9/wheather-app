// const fetchWeather = async () => {
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'df07173a01msh343a12a77c3b90ap1c6871jsn169ed3920cab',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//       }
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//       const w  = JSON.parse(result);
//       document.getElementsByClassName("cloud_pct")[0].innerHTML=w.cloud_pct;
//       document.getElementsByClassName("temp")[0].innerHTML=w.temp;
//       document.getElementsByClassName("feels_like")[0].innerHTML=w.feels_like;
//       document.getElementsByClassName("humidity")[0].innerHTML=w.humidity;
//       document.getElementsByClassName("min_temp")[0].innerHTML=w.min_temp;
//       document.getElementsByClassName("max_temp")[0].innerHTML=w.max_temp;
//       document.getElementsByClassName("wind_degrees")[0].innerHTML=w.wind_degrees;
//       document.getElementsByClassName("sunrise")[0].innerHTML=w.sunrise;


//     // Accessing individual values



   
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   document.getElementsByClassName("search")[0].onclick = function() {
//     var a = document.getElementsByClassName("input")[0];
//     var city = a.value;
//     fetchWeather(city);
//   };
  
  
const search_history=[];
// console.log(33);
const fetchWeather = async (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'df07173a01msh343a12a77c3b90ap1c6871jsn169ed3920cab',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const weatherData = JSON.parse(result);
      console.log(result)
      const temperature = weatherData.temp;
    let backgroundImageUrl = '';

    if (temperature < 20) {
      backgroundImageUrl = 'https://i.pinimg.com/736x/02/ee/13/02ee132f5cdc5d589b484a021b0835b4--lawn-and-landscape-landscaping.jpg';
    } else if (temperature < 25) {
      backgroundImageUrl = 'https://c4.wallpaperflare.com/wallpaper/9/859/737/train-canada-landscape-mountains-wallpaper-preview.jpg';
    } else  {
      backgroundImageUrl = 'https://c4.wallpaperflare.com/wallpaper/769/279/689/tropical-paradise-on-beach-wallpaper-preview.jpg';
    }

    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      
  const xArray = Object.keys(weatherData);
  const yArray = Object.values(weatherData);
  xArray.splice(-2);
  yArray.splice(-2);
  console.log(xArray,yArray);

 

const layout = {title:"Weather Report In "+city};

const data = [{labels:xArray, values:yArray, type:"pie"}];

Plotly.newPlot("bar-graph", data, layout);
     
   
      console.log(weatherData.temp)
  
      document.getElementsByClassName("cloud_pct")[0].innerHTML = weatherData.cloud_pct;
      document.getElementsByClassName("temp")[0].innerHTML = weatherData.temp;
      document.getElementsByClassName("feels_like")[0].innerHTML = weatherData.feels_like;
      document.getElementsByClassName("humidity")[0].innerHTML = weatherData.humidity;
      document.getElementsByClassName("min_temp")[0].innerHTML = weatherData.min_temp;
      document.getElementsByClassName("max_temp")[0].innerHTML = weatherData.max_temp;
      document.getElementsByClassName("wind_degrees")[0].innerHTML = weatherData.wind_degrees;
      document.getElementsByClassName("wind_speed")[0].innerHTML = weatherData.wind_speed;
      document.getElementsByClassName("sunrise")[0].innerHTML = weatherData.sunrise;
      document.getElementsByClassName("sunset")[0].innerHTML = weatherData.sunset;
      // document.getElementsByClassName("r")[0].innerHTML=result;
      
  
    } catch (error) {
      console.error(error);
    }
  };
  
  document.getElementsByClassName("search1")[0].onclick = function() {
    var a = document.getElementsByClassName("input")[0];
    var city = a.value;
    
    search_history.push(a.value);
    console.log(search_history);
    document.getElementsByClassName("cityname")[0].innerHTML=a.value;
    // document.getElementsByClassName("history")[0].innerHTML=search_history;
    fetchWeather(city);
  };
  
  console.log(33);


  // https://www.sunheron.com/static/5bbf313726b4e297bd13c093a0292e47/204db/siracusa-1171922635.jpg  
  // below 10


  