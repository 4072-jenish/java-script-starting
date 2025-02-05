function loadCartData() {
    let cartData = JSON.parse(localStorage.getItem("cartProduct")) || [];
    let result = "";

    cartData.forEach((product, index) => {
        result += `
            <div class="product-card col-4">
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
                        <button class="product-btn">Delete</button>

                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector(".cont").innerHTML = result;

    
    document.querySelectorAll(".product-btn").forEach((button) => {
        button.addEventListener("click", removeProduct);
    });
}

function removeProduct(deletep) {
    let cartData = JSON.parse(localStorage.getItem("cartProduct")) || [];
    const productCard = deletep.target.closest(".product-card");
    const index = productCard.dataset.index;
    
    cartData.splice(index, 1);
    localStorage.setItem("cartProduct", JSON.stringify(cartData));
    
    loadCartData();
}





loadCartData();