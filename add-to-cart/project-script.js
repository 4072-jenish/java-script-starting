




document.getElementById("form").addEventListener("submit", (e) => {

    let pname = document.querySelector("#pname").value;
let pdisc = document.querySelector("#pdisc").value;
let pimage = document.querySelector("#pimage");
let pprise = document.querySelector("#pprise").value;

    let newProduct = {
        pname: pname,
        pdisc: pdisc,
        pimage: pimage,
        pprise: pprise,
    };


    let product = JSON.parse(localStorage.getItem("product")) || [];


    product.push(newProduct);

    localStorage.setItem("product", JSON.stringify(product));


    document.querySelector("form").reset();

    loadData();
});

function loadData() {
    // Get all product from localStorage
    let allData = JSON.parse(localStorage.getItem("product"));

    let result = "";
    allData.forEach((record,index) => {
        let row = `<div id="view-products" >
        <div class="card">
            <div class="card-image">
                <img src="${record.pimage}" width="100px"/>
            </div>
            <div class="card-content">
                <h1>${record.pname}</h1>
                <p>${record.pdisc}</p>
                <p>${record.pprise}</p>
                <button onclick="deleteProduct(${index})">Add to cart</button>
            </div>
        </div>
       
    </div>`
        result = result + row;
    });

    document.querySelector("#view-products").innerHTML = result;
}

// loadData()

// function deleteProduct(index) {
//     let allData = JSON.parse(localStorage.getItem("product"));
//     console.log(allData[index]);
//     allData.splice(index, 1);

//     localStorage.setItem("product", JSON.stringify(allData));
//     loadData();
// }
