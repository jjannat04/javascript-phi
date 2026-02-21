const searchBtn = document.getElementById("search-btn");
const mealContainer = document.getElementById("meal-container");
const mealModalLabel = document.getElementById("mealModalLabel");
const modalBody = document.getElementById("modal-body");

searchBtn.addEventListener("click", () => {
    const query = document.getElementById("meal-search").value;
    if (!query) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
            mealContainer.innerHTML = "";
            if (!data.meals) {
                mealContainer.innerHTML = "<p>No meals found</p>";
                return;
            }
            data.meals.forEach(meal => {
                const div = document.createElement("div");
                div.classList.add("card");
                div.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h5>${meal.strMeal}</h5>
                    <p>${meal.strCategory}</p>
                    <button onclick="showDetails(\`${meal.idMeal}\`)">Details</button>
                `;
                mealContainer.appendChild(div);
            });
        });
});

function showDetails(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            mealModalLabel.innerText = meal.strMeal;
            modalBody.innerHTML = `
                <img src="${meal.strMealThumb}" style="width:100%; height:200px; object-fit:cover;">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Instructions:</strong> ${meal.strInstructions.slice(0, 200)}...</p>
                <p><strong>Tags:</strong> ${meal.strTags || "N/A"}</p>
                <p><strong>Youtube:</strong> <a href="${meal.strYoutube}" target="_blank">Link</a></p>
            `;
            const modal = new bootstrap.Modal(document.getElementById('mealModal'));
            modal.show();
        });
}