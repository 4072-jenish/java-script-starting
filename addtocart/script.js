document.querySelector("#ProductForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = document.getElementById("Product_name").value;
    const productImage = document.getElementById("Product_image").value;
    const price = document.getElementById("Price").value;
    const description = document.getElementById("Description").value;

    let formData = {
        Product_name: productName,
        Product_image: productImage,
        Price: price,
        Description: description,
    };

    let products = JSON.parse(localStorage.getItem("Product")) || [];
    products.push(formData);

    localStorage.setItem("Product", JSON.stringify(products));
    document.querySelector("form").reset();

    loadData();
});

function loadData() {
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    let result = "";
    allData.forEach((record) => {
        let row = `
            <div class="product-card">
           <div class="product-info">
                 <h2 class="product-title">${record.Product_name}</h2>
           </div>
                <div class="product-image">
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-info">
                <p class="product-description">${record.Description}</p>
                    <div class="product-price-row">
                        <span class="product-price">${record.Price}</span>
                        <button class="product-btn">Add to Cart</button>

                    </div>
                </div>
            </div>
        `;
        result += row;
    });

    document.querySelector(".cont").innerHTML = result;

    document.querySelectorAll(".product-btn").forEach((addBtn,index) => {
            addBtn.addEventListener("click",() => addtocart(index))
    });
}

function addtocart(index){
    let products = JSON.parse(localStorage.getItem("Product")) || [];
    let cartProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];

    let selectProduct = products[index];
    cartProduct.push(selectProduct);

    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));


}

loadData();
