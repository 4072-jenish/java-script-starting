




function loadcartData() {
    
    let cartdata =  JSON.parse(localStorage.getItem("cartProduct")) || [] ;

    let result = "";
    cartdata.forEach((product,index) => {
         result += `
            <div class="product-card" data-index="${index}">
           <div class="product-info">
                 <h2 class="product-title">${product.Product_name}</h2>
           </div>
                <div class="product-image">
                    <img src="${product.Product_image}" alt="${product.Product_name}" width="100">
                </div>
                <div class="product-info">
                <p class="product-description">${product.Description}</p>
                    <div class="product-price-row">
                        <span class="product-price">${product.Price}</span>
                        <button class="product-btn">Add to Cart</button>

                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector(".cont").innerHTML = result;
}

loadcartData();