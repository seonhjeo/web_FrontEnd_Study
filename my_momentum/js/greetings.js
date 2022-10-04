const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(){
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDNE_CLASSNAME);
}

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDNE_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedusername = localStorage.getItem(USERNAME_KEY);

if (savedusername === null) {
	loginForm.classList.remove(HIDDNE_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}else {
	paintGreetings();
}
