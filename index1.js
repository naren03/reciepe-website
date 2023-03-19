// Narendra

const apiKey = "35e20df83d3843cb9ec1a44cf2ce9913";

// for random search results
const searchQuery = "chicken"; // the search query
const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}`;

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		const recipes = data.results;
		recipes.forEach((recipe) => {
			// console.log(recipe);
			// console.log(recipe.title);
			// console.log(recipe.image);
			console.log(recipe);
		});
	})
	.catch((error) => console.log(error)); // handle any errors that occur

// for specific id
const recipeId = 637876;

const url1 = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

fetch(url1)
	.then((response) => response.json())
	.then((data) => {
		console.log(data); // print the name of the recipe to the console
		// console.log(data); // print the summary of the recipe to the console
	})
	.catch((error) => console.log(error)); // handle any errors that occur

// https://spoonacular.com/cdn/ingredients_250x250/chicken-breasts.png
