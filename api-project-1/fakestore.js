const loadAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayProduct(data)
        });
}

const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container");
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img class = "card-img" src = "${product.image}" alt = "">
            <h5>${product.title.slice(0, 50)}</h5>
            <h6>${product.price}</h6>
            <p>${product.category}</p>
            <p>${product.description.slice(0, 100)}</p>
            <button onclick = "singleProduct(${product.id})">Details</button>
            <button onclick ="handleCart('${
                product.title}', ${product.price})">Add to cart</button>
        `;

        productContainer.appendChild(div);
    });

}
const handleCart = (name, price) => {
    const container = document.getElementById("cart-main-container");
    const totalCart = document.getElementsByClassName("cart-total");
    
    const div =document.createElement("div");
    div.classList.add("cart-div");
    div.innerHTML =`
    
            <p>${name.slice(0,10)}</p>
            <h3 class = "price">${price}</h3>
    `
    container.appendChild(div)
    updateTotal();
}

const updateTotal = () => {
     const allPrice = document.getElementsByClassName("price");
     let count = 0;
     for(const element of allPrice){
        count = count + parseFloat(element.innerText);
     }
     document.getElementById("total").innerText = count;
}

const singleProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => console.log(data));
}


loadAllProduct();


