const API_KEY = "1e1271b9e00b41f8ac080ef52a4bd92e";
const recipeListEl = document.getElementById("recipe-list");


async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data.recipes;
}

function displayRecipes(recipes) {
    recipeListEl.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        recipeImagesEl = document.createElement("img");
        recipeImagesEl.src = recipe.image;
        recipeImagesEl.alt = recipe.title;

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
            <strong>Ingredients:</strong>
            ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(', ')}
            `;

        recipeLinkEl = document.createElement("a");
        recipeLinkEl.innerText = "View Recipe";
        recipeLinkEl.target = "_blank";
        recipeLinkEl.href = recipe.sourceUrl;

        recipeItemEl.appendChild(recipeImagesEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function initialize() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

initialize();