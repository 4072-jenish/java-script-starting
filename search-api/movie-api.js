
document.querySelector("#btn").addEventListener("click" , () => {
    let moviename = document.querySelector("#movieName")
    let moviedtaile = document.querySelector("#movieDetaile");
    moviedtaile.innerHTML = " "

    fetch(`https://www.omdbapi.com/?i=${moviename.value}&apikey=7272da2c`)
    .then(res => res.json())
    .then(data => {
    let result = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${data.Poster} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.Title}</h5>
      <p class="card-text">${data.Plot}</p>
      <p class="card-text">${data.Year}</p>
      <p class="card-text">${data.Language}</p>
    </div>
  </div>`
    moviedtaile.innerHTML = result;
})
    .catch(err => console.log(err));

     moviename.value = ""
});


