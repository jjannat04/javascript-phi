let count = 0;


// Default load 8 drinks
const loadDefaultDrinks = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then(data => {
        displayDrinks(data.drinks.slice(0,8));
    })
}


// Search drink
const searchDrink = () => {
    const searchText = document.getElementById("search-field").value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => {
        if(!data.drinks){
            document.getElementById("drink-container").innerHTML = "Not Found";
        }
        else{
            displayDrinks(data.drinks);
        }
    })
}


// Display drinks
const displayDrinks = (drinks) => {

    const container = document.getElementById("drink-container");
    container.innerHTML = "";

    drinks.forEach(drink => {

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <img class="card-img" src="${drink.strDrinkThumb}">
            <h5>${drink.strDrink}</h5>
            <p>${drink.strCategory}</p>
            <p>${drink.strInstructions.slice(0,15)}</p>
            <button onclick="addToGroup(\`${drink.strDrink}\`)">Add to Group </button>
            <button onclick="loadDetails(${drink.idDrink})">Details</button>
        `;

        container.appendChild(div);
    })
}


// Add to group (max 7)
const addToGroup = (name) => {

    if(count >= 7){
        alert("Cannot add more than 7 drinks");
        return;
    }

    const groupContainer = document.getElementById("group-container");

    const p = document.createElement("p");
    p.innerText = name;

    groupContainer.appendChild(p);

    count++;
    document.getElementById("count").innerText = count;
}


// Load details
const loadDetails = (id) => {

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        showModal(data.drinks[0]);
    })
}


// Show modal
const showModal = (drink) => {

    document.getElementById("modalTitle").innerText = drink.strDrink;

    document.getElementById("modalBody").innerHTML = `
        <img class="card-img" src="${drink.strDrinkThumb}">
        <p>Category: ${drink.strCategory}</p>
        <p>Alcoholic: ${drink.strAlcoholic}</p>
        <p>Glass: ${drink.strGlass}</p>
        <p>Instructions: ${drink.strInstructions}</p>
        <p>Ingredient: ${drink.strIngredient1}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById("drinkModal"));
    modal.show();
}


loadDefaultDrinks();