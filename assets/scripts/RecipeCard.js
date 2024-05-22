// RecipeCard.js
class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		const shadowDom = this.attachShadow({mode:'open'});
		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		const article = document.createElement("article");
		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		const styles = document.createElement("style");
		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		styles.innerHTML= "* { " +
		"font-family: sans-serif; " +
		"margin: 0;" +
		"padding: 0;"+
		"} "+
		"a {"+
		"  text-decoration: none;"+
		"} "+
		"a:hover {"+
			"text-decoration: underline;"+
		"} "+ 
		"article {"+
			"align-items: center;"+
			"border: 1px solid rgb(223, 225, 229);"+
			"border-radius: 8px;"+
			"display: grid;"+
			"grid-template-rows: 118px 56px 14px 18px 15px 36px;"+
			"height: auto;"+
			"row-gap: 5px;"+
			"padding: 0 16px 16px 16px;"+
			" width: 178px;"+
		"} "+
		"div.rating {"+
			"align-items: center;"+
			"column-gap: 5px;"+
			"display: flex;"+
		"} "+
		"div.rating>img {"+
			"height: auto;"+
			"display: inline-block;"+
			"object-fit: scale-down;"+
			"width: 78px;"+
		"} "+
		"article>img {"+
			"border-top-left-radius: 8px;"+
			"border-top-right-radius: 8px;"+
			"height: 118px;"+
			"object-fit: cover;"+
			"margin-left: -16px;"+
			"width: calc(100% + 32px);"+
		"} "+
		"p.ingredients {"+
			"height: 32px;"+
			"line-height: 16px;"+
			"padding-top: 4px;"+
			"overflow: hidden;"+
		"} "+
		"p.organization {"+
			"color: black !important;"+
		"} "+
		"p.title {"+
		  "display: -webkit-box;"+
		  "font-size: 16px;"+
		  "height: 36px;"+
		  "line-height: 18px;"+
		  "overflow: hidden;"+
		  "-webkit-line-clamp: 2;"+
		  "-webkit-box-orient: vertical;"+
		"} "+
	"span,"+
	"time {"+
	"color: #70757A;"+
	"font-size: 12px;"+
	"	}"
	
		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
		shadowDom.appendChild(article);
		shadowDom.appendChild(styles);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;
		
		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		let articl = this.shadowRoot.querySelector("article");

		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		const image = document.createElement("img"); 
		image.src= data["imgSrc"];
		image.alt = data["imgAlt"];
		articl.appendChild(image);

		const para1 = document.createElement("p");
		para1.className = "title";
		const atag = document.createElement("a");
		atag.href = data["titleLnk"];
		atag.innerHTML = data["titleTxt"];
		para1.appendChild(atag);
		articl.appendChild(para1)

		const para2 = document.createElement("p");
		para2.className="organization";
		para2.innerHTML=data["organization"];
		articl.appendChild(para2);

		const div1 = document.createElement("div");
		div1.className = "rating";
		articl.appendChild(div1)
		const span1 = document.createElement("span");
		span1.innerHTML = data["rating"];
		div1.appendChild(span1);
		const img2 = document.createElement("img");
		if (data["rating"] == "5") {
			img2.src = "../assets/images/icons/5-star.svg";
			img2.alt = "5 stars";
		}
		else if (data["rating"] == "4") {
			img2.src = "../assets/images/icons/4-star.svg";
			img2.alt = "4 stars";
		}
		else if (data["rating"] == "3") {
			img2.src = "../assets/images/icons/3-star.svg";
			img2.alt = "3 stars";
		}
		else if (data["rating"] == "2") {
			img2.src = "../assets/images/icons/2-star.svg";
			img2.alt = "2 stars";
		}
		else if (data["rating"] == "1") {
			img2.src = "../assets/images/icons/1-star.svg";
			img2.alt = "1 stars";
		}
		else {
			img2.src = "../assets/images/icons/0-star.svg";
			img2.alt = "0 stars";
		}
		div1.appendChild(img2);
		const span2 = document.createElement("span");
		span2.innerHTML= "(" + data["numRatings"]+  ")";
		div1.appendChild(span2);
		
		const time = document.createElement("time");
		time.innerHTML= data["lengthTime"];
		articl.append(time);
		const para3 = document.createElement("p");
		para3.className = "ingredients";
		para3.textContent= data["ingredients"]; 
		articl.appendChild(para3);
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
