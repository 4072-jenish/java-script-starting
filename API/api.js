
let breedListselect = document.getElementById("breedList");

function BreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        // console.log(data.message)
        for(let breed in data.message){
            let option = document.createElement('option');
            option.value = breed;
            option.innerHTML=breed;
            breedListselect.append(option);
        }
    })
    .catch(err => console.log(err)
    )
}

BreedList();

document.getElementById('bredd-btn').addEventListener("Click", ()=> {
    let breed = breedListselect.value;
    console.log(breed);
    
    let images = document.getElementsByClassName('images');
    images.innerHTML="";
    fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => res.json())
    .then((data) => {
        console.log(data.images)
        
        data.message.forEach((item) => {
            let image=document.createElement('img');
            image.setAttribute('src',item)
            image.style.height = "200px"
        })

    });
});
