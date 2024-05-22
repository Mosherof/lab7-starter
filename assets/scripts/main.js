// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. TODO - Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.
	if (localStorage.getItem("recipes").length == 0) {
		return [];
	}
	return JSON.parse(localStorage.getItem("recipes"));
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. TODO - Get a reference to the <main> element
	const mainel = document.getElementsByTagName("main")[0];
	// A11. TODO - Loop through each of the recipes in the passed in array,

	if (recipes == null) {
		return;
	}
	for (let i =0; i < recipes.length; i++){
		// create a <recipe-card> element for each one, and populate each <recipe-card> with that recipe data using element.data = ...
		let card = document.createElement("recipe-card");
		card.data = recipes[i];
		// Append each element to <main>
		mainel.appendChild(card);
	}
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. TODO - Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
	let stringCipes = []
	for (let i =0; i < recipes.length; i++) {
		stringCipes.push(recipes[i]);
	}
	localStorage.setItem("recipes", JSON.stringify(stringCipes));

}


/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
	// B2. TODO - Get a reference to the <form> element
	let form = document.getElementsByTagName("form")[0];
	// B3. TODO - Add an event listener for the 'submit' event, which fires when the
	//            submit button is clicked
	// Steps B4-B9 will occur inside the event listener from step B3
	//document.getElementById("submit-button").addEventListener("click",function() {
	form.addEventListener("submit",function(event) {
		event.preventDefault();
		// B4. TODO - Create a new FormData object from the <form> element reference above
		// B5. TODO - Create an empty object (we'll refer to this object as recipeObject to
		//            make this easier to read), and then extract the keys and corresponding
		//            values from the FormData object and insert them into recipeObject
	    let recipeObject = {}
		recipeObject["imgSrc"]= document.getElementById("imgSrc").value;
		recipeObject["imgAlt"]= document.getElementById("imgAlt").value;;
		recipeObject["titleTxt"]=document.getElementById("titleTxt").value;
		recipeObject["titleLnk"]=document.getElementById("titleLnk").value;
		recipeObject["numRatings"]=parseInt(document.getElementById("numRatings").value);
		recipeObject["organization"]=document.getElementById("organization").value;
		recipeObject["lengthTime"]=document.getElementById("lengthTime").value;
		recipeObject["ingredients"]=document.getElementById("ingredients").value;
		if (document.getElementById("rating-0").checked) {
			recipeObject["rating"] = "0";
		}
		else if(document.getElementById("rating-1").checked) {
			recipeObject["rating"] = 1;
		}
		else if(document.getElementById("rating-2").checked) {
			recipeObject["rating"] = 2;
		}
		else if(document.getElementById("rating-3").checked) {
			recipeObject["rating"] = 3;
		}
		else if(document.getElementById("rating-4").checked) {
			recipeObject["rating"] = 4;
		}
		else {
			recipeObject["rating"] = 5;
		}

		console.log(recipeObject);
		// B6. TODO - Create a new <recipe-card> element
		let card = document.createElement("recipe-card");
		// B7. TODO - Add the recipeObject data to <recipe-card> using element.data
		card.data = recipeObject;
		console.log(card);
		// B8. TODO - Append this new <recipe-card> to <main>
		document.getElementsByTagName("main")[0].appendChild(card);
		// B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
		//            then save the recipes array back to localStorage
		let allCipes = getRecipesFromStorage().concat(recipeObject);
		saveRecipesToStorage(allCipes);
	})

	// B10. TODO - Get a reference to the "Clear Local Storage" button
	let localstorageClear = document.getElementsByClassName("danger")[0];
	// B11. TODO - Add a click event listener to clear local storage button
	localstorageClear.addEventListener("click", function(){
		// Steps B12 & B13 will occur inside the event listener from step B11
		// B12. TODO - Clear the local storage
		localStorage.setItem("recipes", []);
		// B13. TODO - Delete the contents of <main>
		document.getElementsByTagName("main")[0].remove();
		document.createElement("main");
	}
	
	)}
