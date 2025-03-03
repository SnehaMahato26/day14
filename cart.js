let DataCart = JSON.parse(localStorage.getItem("DataCart")) || [];





function showCartData(Arr) {
    document.getElementById("products").innerHTML = "";
    Arr.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = `$${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating}`;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", () => {
            deleteFun(index);
        });

        productBox.append(heading, img, name, price, rating, button);
        document.getElementById("products").append(productBox);
    });
}

showCartData(DataCart);

function deleteFun(index) {
    let deletedCartData = JSON.parse(localStorage.getItem("DataCart")) || [];
    deletedCartData.splice(index, 1);
    localStorage.setItem("DataCart", JSON.stringify(deletedCartData));
    DataCart = deletedCartData;
    showCartData(deletedCartData);
}