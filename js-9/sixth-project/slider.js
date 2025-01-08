let quotes = [
    { "id" : 1, "image" : 'https://media.istockphoto.com/id/620951116/photo/panoramic-view-of-colorful-sunrise-in-mountains.jpg?s=612x612&w=0&k=20&c=6IO5LBwLVSBPxQD4L5NlrxRkygeocjA5OKg8iKqvT58=' },
    { "id" : 2, "image" : 'https://images.pexels.com/photos/266617/pexels-photo-266617.jpeg?cs=srgb&dl=pexels-pixabay-266617.jpg&fm=jpg' },
    { "id": 3, "image" : 'https://static8.depositphotos.com/1009050/1062/i/450/depositphotos_10620460-stock-photo-sunset-over-mountains-near-sea.jpg' },
    { "id": 4, "image" : 'https://images.unsplash.com/photo-1506880648420-aafaa650d147?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzdW5yaXNlfGVufDB8fDB8fHww' },
    { "id": 5, "image" : 'https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg' },
    { "id": 6, "image" : 'https://t4.ftcdn.net/jpg/01/04/78/75/360_F_104787586_63vz1PkylLEfSfZ08dqTnqJqlqdq0eXx.jpg' },
    { "id": 7, "image" : 'https://st2.depositphotos.com/6544740/9337/i/450/depositphotos_93376230-stock-photo-sunset-over-an-ocean-beach.jpg' },
    { "id": 8, "image" : 'https://img.freepik.com/premium-photo/sunset-ocean-with-sunset-background_1261950-64723.jpg' },
    { "id": 9, "image" : 'https://t4.ftcdn.net/jpg/05/83/87/67/360_F_583876738_eC5lsIKAvQ6tR2HhkXcGk3hCPL2gLPhv.jpg' },
    { "id": 10, "image" : 'https://images.unsplash.com/photo-1622256013878-8df3b62e61ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwc3VucmlzZXxlbnwwfHwwfHx8MA%3D%3D' }
];

let index = 0;

function prevQuotes() {
    index = (index == 0) ? (quotes.length - 1) : (index - 1) % quotes.length;
    loaddata(index);
}

function nextQuotes() {
    index = (index + 1) % quotes.length;
    loaddata(index);
}

function loaddata(id) {
    const imageElement = document.getElementById("image");
    imageElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.setAttribute('src', quotes[id].image);
        imageElement.style.opacity = 1;
    }, 500);
}

loaddata(index);
