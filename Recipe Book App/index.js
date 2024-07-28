let API_KEY="a9f01ccd42c04cd1aba7a45d0ec97f38"
let recipesListEl=document.getElementById("Recipelist")
function displayRecipes(recipes)
{
recipesListEl.innerHTML= ""
recipes.forEach((recipe) => {
 recipeItemEl=document.createElement("li")
  recipeItemEl.classList.add("Recipe_item")
 recipeImageEl=document.createElement("img")
recipeImageEl.src=recipe.image
recipeImageEl.alt="recipe image"

 recipeTitleEl=document.createElement("h2")
recipeTitleEl.innerText=recipe.title
recipeIngredientEl=document.createElement("p")
recipeIngredientEl.innerHTML=`
<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}
`

 recipeLinkEl=document.createElement("a")
recipeLinkEl.href=recipe.sourceUrl
recipeLinkEl.innerText="View Recipe"


recipeItemEl.appendChild(recipeImageEl)
recipeItemEl.appendChild(recipeTitleEl)
recipeItemEl.appendChild(recipeIngredientEl)
recipeItemEl.appendChild(recipeLinkEl)
  recipesListEl.appendChild(recipeItemEl)
});

}

async function getRecipes(){
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
  let data=await response.json()
  return data.recipes
}

async function init()
{
  let recipes= await getRecipes()
  displayRecipes(recipes)
 
}
init()