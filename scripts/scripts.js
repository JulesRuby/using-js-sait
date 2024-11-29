// If I'm not allowed to touch the HTML I can use this to execute the contents only after the DOM has loaded to avoided errors.
window.addEventListener('DOMContentLoaded', () => {
	/****************** YOUR NAME: J.R. Muri

	The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

	You are encouraged to use the provided naming convention for ease of review.

	*/

	/****************** create variables ******************/
	/* create variables to hold the values for modelName and duration */

	// INSERT YOUR CODE HERE

	// Initialize modelNAme and duration variables
	let [modelName, duration] = ['XYZ', 0];

	/****************** helper function ******************/
	/* create a function called recalculate() which will
			- create a variable to represent the calculated-cost span element. That will look something like:
					// let costLabel = document.getElementById("calculated-cost");
			- check the value of the modelName variable, and use that to calculate the new total cost:
					e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
					if modelName is currently "CPRG", duration * 213 gives us the new total cost.
			- set the value of the calculated-cost element's innerHTML to this new value
	*/

	// INSERT YOUR CODE HERE

	const recalculate = () => {
		// store models to Object to reference their daily rates
		const models = {
			XYZ: 100,
			CPRG: 213,
		};
		const costLabel = document.getElementById('calculated-cost');
		const newTotalCost = models[modelName] * duration;

		costLabel.innerHTML = newTotalCost;
	};



	/****************** model button logic ******************/

	/*
	- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
	- second, create a function called changeModel() which checks the value of the model name variable. This function will:
			- create a variable to represent the model-text span element
			- if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
			- if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
			- then, recalculate() the total cost.
	- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */

	// INSERT YOUR CODE HERE

	const toggleModelButton = document.getElementById('model-button');

	const toggleModel = () => {
		const modelText = document.getElementById('model-text');


		// ternary: if modelName is XYZ, return 'Model CPRG', else return 'Model XYZ'
		modelText.innerHTML = modelName === 'XYZ' ? 'Model CPRG' : 'Model XYZ';

		// if modelName is currently XYZ, modelName = CPRG, else modeNale = XYZ
		modelName = modelName === 'XYZ' ? 'CPRG' : 'XYZ';

		recalculate();
	};

	toggleModelButton.addEventListener('click', toggleModel);
	/****************** duration button logic ******************/
	/*  - first, create a variable to represent the "Change Duration" pseudo-button.
			- then, create a function called changeDuration() that will
					- create a variable to represent the duration-text span element
					- prompt() the user for a new duration
					- save the result of the prompt() to the duration variable
					- change the innerHTML of the duration-text span element to this new value
					- recalculate() the total cost/
			- finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
	*/

	// INSERT YOUR CODE HERE

	const durationButton = document.getElementById('duration-button');

	const changeDuration = () => {
		const durationText = document.getElementById('duration-text');
		// Take the string from user input and convert it to an integer
		duration = parseInt(
			prompt('Enter how many days you would like to book this model for: ')
		);

		// update client based on user's input
		durationText.innerHTML = duration;

		recalculate();
	};

	durationButton.addEventListener('click', changeDuration);
});
