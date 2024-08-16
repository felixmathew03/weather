async function search(){
    try{
        const w=document.getElementById("inp").value;
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${w}&appid=d82dce617113dc86ab2408e76df76adb`)
        console.log(res.status);
        if(res.status==404){
            console.log(res.status);
            document.getElementById("weth").innerHTML=`
            <div class="weather">
                <h1>City not found</h1>
            </div>
            `
        }
        else{
            const weather=await res.json();
            console.log(weather.name);
            
            document.getElementById("weth").innerHTML=`
                <div id="weather" class="weather">
            <h1>${weather.name}</h1>
            <div class="m1">
                <h1>${((weather.main.temp)-273.15).toString().substring(0,4)}</h1>
                <div class="m2">
                    <h3>°C</h3>
                    <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="icon">
                </div>
            </div>
            <p><b>Weather details</b></p>
            <table id="table">
                <tr>
                    <td>
                        <p id="p1">Feels like</p>
                        <h3>${((weather.main.feels_like)-273.15).toString().substring(0,4)}°C</h3>
                    </td>
                    <td>
                        <p id="p2">Condition</p>
                        <h3>${weather.weather[0].main}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="p3">Wind</p>
                        <h3>${weather.wind.speed} km/h</h3>
                    </td>
                    <td>
                        <p id="p4">Humidity</p>
                        <h3>${weather.main.humidity}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p id="p5">Visibility</p>
                        <h3>${weather.visibility/1000} km</h3>
                    </td>
                    <td>
                        <p id="p6">Air pressure</p>
                        <h3>${weather.main.pressure} hPa</h3>
                    </td>
                </tr>
            </table>
        </div>
            `;
            document.getElementById("body").style.backgroundImage="url('./img/reflection-sunset-sky.jpg')"
            
        if(weather.weather[0].main=="Clouds"){
            document.getElementById("weather").style.backgroundImage="url('./img/photorealistic-style-clouds.jpg')";
            document.getElementById("weth").style.color="black";
            document.getElementById("p1").style.color="gray";
            document.getElementById("p2").style.color="gray";
            document.getElementById("p3").style.color="gray";
            document.getElementById("p4").style.color="gray";
            document.getElementById("p5").style.color="gray";
            document.getElementById("p6").style.color="gray";
        } 
        else if(weather.weather[0].main=="Rain"){
            document.getElementById("weather").style.backgroundImage="url('./img/background-with-rain-dark-sky_1308-10107.avif')";
            document.getElementById("weth").style.color="white";
            document.getElementById("p1").style.color="black";
            document.getElementById("p2").style.color="black";
            document.getElementById("p3").style.color="black";
            document.getElementById("p4").style.color="black";
            document.getElementById("p5").style.color="black";
            document.getElementById("p6").style.color="black";
        }
        else if(weather.weather[0].main=="Snow"){
            document.getElementById("weather").style.backgroundImage="url('./img/christmas-snow-background_1048-12843.avif')";
            document.getElementById("p1").style.color="blue";
            document.getElementById("p2").style.color="blue";
            document.getElementById("p3").style.color="blue";
            document.getElementById("p4").style.color="blue";
            document.getElementById("p5").style.color="blue";
            document.getElementById("p6").style.color="blue";
        } 
        else if(weather.weather[0].main=="Atmosphere"){
            document.getElementById("weather").style.backgroundImage="url('./img/sky-landscape-background-with-clouds_23-2149134122.avif')";
            document.getElementById("weth").style.color="white";
            document.getElementById("p1").style.color="black";
            document.getElementById("p2").style.color="black";
            document.getElementById("p3").style.color="black";
            document.getElementById("p4").style.color="black";
            document.getElementById("p5").style.color="black";
            document.getElementById("p6").style.color="black";
        } 
        else if(weather.weather[0].main=="Clear"){
            document.getElementById("weather").style.backgroundImage="url('./img/beautiful-skyscape-daytime_23-2149265566.avif')"
            document.getElementById("weth").style.color="rgb(3, 17, 99)";
            document.getElementById("p1").style.color="black";
            document.getElementById("p2").style.color="black";
            document.getElementById("p3").style.color="black";
            document.getElementById("p4").style.color="black";
            document.getElementById("p5").style.color="black";
            document.getElementById("p6").style.color="black";
        } 
        else if(weather.weather[0].main=="Thunderstorm"){
            document.getElementById("weather").style.backgroundImage="url('./img/thunderstorm-city-nighttime_23-2151750424.avif')"
            document.getElementById("weth").style.color="white";
            document.getElementById("p1").style.color="rgb(219, 217, 217)";
            document.getElementById("p2").style.color="rgb(219, 217, 217)";
            document.getElementById("p3").style.color="rgb(219, 217, 217)";
            document.getElementById("p4").style.color="rgb(219, 217, 217)";
            document.getElementById("p5").style.color="rgb(219, 217, 217)";
            document.getElementById("p6").style.color="rgb(219, 217, 217)";
        } 
        else if(weather.weather[0].main=="Clouds"){
            document.getElementById("weather").style.backgroundImage="url('./img/beautiful-flowers-seen-humidity-glass_23-2149453589.avif')"
            document.getElementById("weth").style.color="white";
            document.getElementById("p1").style.color="rgb(219, 217, 217)";
            document.getElementById("p2").style.color="rgb(219, 217, 217)";
            document.getElementById("p3").style.color="rgb(219, 217, 217)";
            document.getElementById("p4").style.color="rgb(219, 217, 217)";
            document.getElementById("p5").style.color="rgb(219, 217, 217)";
            document.getElementById("p6").style.color="rgb(219, 217, 217)";
        }
        else{
            document.getElementById("weather").style.backgroundImage="url('./img/beautiful-skyscape-daytime_23-2149265566.avif')"
        }
    }
    }
    catch(error){
        console.log(error);
        
    }
}