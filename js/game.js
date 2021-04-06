//Start game
function startGame(){
	document.querySelector("#logIn").style.display="none";
	document.querySelector(".button-explode").style.display="block";

	let username = localStorage.getItem('GameName');
	var score = 0;
	$users = JSON.parse(localStorage.getItem('users'));

	$users.find((user) => {
		if(user.username == username)
			user.score = 0;
			localStorage.setItem('users',JSON.stringify($users));
			timeOut();
			updateScore(username);
	});
	ranking($users);
};
function countClicks(){
	//Update score
	let username = localStorage.getItem('GameName');
	$users = JSON.parse(localStorage.getItem('users'));
	$users.find(user => {
		if(user.username == username){
			user.score += 1;
		};
	});
	//Set score
	updateScore();
};

function updateScore(){
	localStorage.setItem('users',JSON.stringify($users));
	ranking($users);
};