// step 1 add this JavaScript file to index.html in the head element using the appropriate attribute- Linked

//write functions for all of the following
//use querySelector or querySelectorAll for all of the following, where needed.

//step 2 select the first paragraph in the second div and add the class 'paragraph-color' so that the styles in the style sheet are applied to only that paragraph
function addclass(){
	let selector= document.querySelector('.first-paragraph').classList.add('paragraph-color')
	return selector

}
addclass();
// step 3 create a paragraph template using a template litteral

// step 5 add the paragraph template you just created to the first div using innerHTML