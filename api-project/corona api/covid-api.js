const apiURL = "https://api.rootnet.in/covid19-in/stats/history";

function fetchCovidData() {
    return fetch(apiURL)  
        .then(response => response.json()) 
        .then(data => data.data) 

        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

function searchData() {
    const searchDate = document.getElementById("searchDate").value;
    if (!searchDate) {
        alert("Please select a date!");
        return;
    }

    fetchCovidData().then(historyData => {
        const result = historyData.find(day => day.day === searchDate);
        if (result) {
            document.getElementById("date").innerText = result.day;
            document.getElementById("cases").innerText = result.summary.total;
            document.getElementById("deaths").innerText = result.summary.deaths;
            document.getElementById("recovered").innerText = result.summary.discharged;

            console.log(result);

            const stateDataContainer = document.getElementById("stateData");
            stateDataContainer.innerHTML = "<h3>State-wise Data</h3>"; 
    
            result.regional.forEach(state => {
                const stateElement = document.createElement("p");
                stateElement.innerHTML = `<div class="card col-3" style="width: 18rem;">
                                            <div class="card-body">
                                              <h5 class="card-title"> City:- ${state.loc}</h5>
                                              <p class="card-text"> Cases:- ${state.totalConfirmed}</p>
                                              <p class="card-text"> Deaths:- ${state.deaths}</p>
                                              <p class="card-text"> Recovered:- ${state.discharged}</p>
                                            </div>
                                          </div>`;
                stateDataContainer.appendChild(stateElement);
            });
    

            
        } else {
            alert("No data found!");
        }
    });
}




{/* <strong>${state.loc}</strong>: 
                    Cases - ${state.totalConfirmed}, 
                    Deaths - ${state.deaths}, 
                    Recovered - ${state.discharged} */}