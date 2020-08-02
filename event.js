var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ali = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function clearElement(){
	
	for(var i=0; i<ali.length; i++){
		this.parentNode.remove();
	}
}

function toggleEle(){
			this.classList.toggle('done');	
}

var delItem = function(){
	
		var delButton = document.querySelectorAll("li button");
		for (var i = 0; i < delButton.length ; i++) {
				// delButton[i].classList.add('btnpadding');

				delButton[i].addEventListener('click',clearElement);	
				
			}
	
}

var toggleList = function(){


	var ali = document.querySelectorAll("li");
	
	for (var i = 0; i <ali.length; i++) {
		
		ali[i].addEventListener('click', toggleEle);
	}
}

function addDelButton(li){

	if (inputLength() > 0 && event.keyCode === 13) {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete Item";
	// document.querySelector("li").classList.add('.liev');
	// btn.className='btnpadding';
	
	toggleList();
	li.appendChild(btn);
	delItem();	
	}
	
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = " ";
	

	addDelButton(li);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
toggleList();
delItem();
