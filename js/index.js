
async function search(){
    try{
        const w=document.getElementById("inp").value;
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${w}&appid=d82dce617113dc86ab2408e76df76adb`)
        console.log(res.status);
        if(res.status==404){
            document.getElementById("weth").innerHTM=`
            <div class="weather">
                <h1>City not found</h1>
            </div>
            `
        }
        else{
            const weather=await res.json();
            console.log(weather.name);
            
            document.getElementById("weth").innerHTML=`
                <div class="weather">
            <h1>${weather.name}</h1>
            <div class="m1">
                <h1>${((weather.main.temp)-273.15).toString().substring(0,4)}</h1>
                <div class="m2">
                    <h3>°C</h3>
                    <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="icon">
                </div>
            </div>
            <p><b>Weather details</b></p>
            <table>
                <tr>
                    <td>
                        <p>Feels like</p>
                        <h3>${((weather.main.feels_like)-273.15).toString().substring(0,4)}°C</h3>
                    </td>
                    <td>
                        <p>Condition</p>
                        <h3>${weather.weather[0].main}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Wind</p>
                        <h3>${weather.wind.speed} km/h</h3>
                    </td>
                    <td>
                        <p>Humidity</p>
                        <h3>${weather.main.humidity}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Visibility</p>
                        <h3>${weather.visibility/1000} km</h3>
                    </td>
                    <td>
                        <p>Air pressure</p>
                        <h3>${weather.main.pressure} hPa</h3>
                    </td>
                </tr>
            </table>
        </div>
            `
            
        }   
    }
    catch(error){
        console.log(error);
        
    }
}