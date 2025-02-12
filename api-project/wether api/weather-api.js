document.querySelector("#search").addEventListener("click" , () => {
    let searchBar = document.querySelector("#searchBar")
    let weatherContent = document.querySelector(".weather-content");
    weatherContent.innerHTML = " "

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&APPID=41e7388c73edb1f5a69bdcb38fa72d83&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
    let result = `
        <div class="card">
        <h3>Cloudy<span>${data.wind.speed}/h <span class="dot">•</span> Precip 0%</span></h3>
        <h1>${data.main.temp}</h1>
        <div class="sky">
            <div class="sun"></div>
            <div class="cloud">
                <div class="circle-small"></div>
                <div class="circle-tall"></div>
                <div class="circle-medium"></div>
            </div>
        </div>
        <table>
            <tr>
                <td>TUE</td>
                <td>WED</td>
                <td>THU</td>
                <td>FRI</td>
                <td>SAT</td>
            </tr>
            <tr>
                <td>30°</td>
                <td>34°</td>
                <td>36°</td>
                <td>34°</td>
                <td>37°</td>
            </tr>
            <tr>
                <td>17°</td>
                <td>22°</td>
                <td>19°</td>
                <td>23°</td>
                <td>19°</td>
            </tr>
        </table>
    </div>`
    weatherContent.innerHTML = result;
})
    .catch(err => console.log(err));

     searchBar.value = ""
});