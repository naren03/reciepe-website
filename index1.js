// Narendra
// apikey
const apiKey = "35e20df83d3843cb9ec1a44cf2ce9913";
// search btn
const searchBtn = document.querySelector(".searchBtn");
// search bar
const searchBar = document.querySelector(".searchInput");
// recipe gallery
const reciepeGallery = document.querySelector(".gallery");

let searchQuery;

// search Btn functionality when user clicks on it
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	searchQuery = searchBar.value;
	// deleting any prev data
	reciepeGallery.innerHTML = "";
	const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const recipes = data.results;
			recipes.forEach((recipe) => {
				console.log(recipe);

				const div = document.createElement("div");
				div.innerHTML = `
					<div>
					<img src=https://spoonacular.com/recipeImages/${recipe.image} 
					alt="food-item"><h3>${recipe.title}</h3>
					<button id="openModal">Open Modal</button>
					</div>`;

				reciepeGallery.appendChild(div);
			});
		})
		.catch((error) => console.log(error)); // handle any errors that occur
});

// // for random search results
// const searchQuery = "chicken"; // the search query
// const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}`;

// pasta-with-garlic-scallions-cauliflower-bread-crumbs-716429.jpg
// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		const recipes = data.results;
// 		recipes.forEach((recipe) => {
// 			// console.log(recipe);
// 			// console.log(recipe.title);
// 			// console.log(recipe.image);
// 			console.log(recipe);
// 		});
// 	})
// 	.catch((error) => console.log(error)); // handle any errors that occur

// // for specific id
// const recipeId = 637876;

// const url1 = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

// fetch(url1)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log(data); // print the name of the recipe to the console
// 		// console.log(data); // print the summary of the recipe to the console
// 	})
// 	.catch((error) => console.log(error)); // handle any errors that occur

// // https://spoonacular.com/cdn/ingredients_250x250/chicken-breasts.png
