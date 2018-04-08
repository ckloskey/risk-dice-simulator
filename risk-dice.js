//Left to do:
//still need to account for dice restrictions:
//1. if def has 2 troops left then 1 dice used
//2. customize dice used by attacker: (3, 2, or 1)
//3. customize # of rolls
//4. allow user input (obvious, but can be done last)


	let atkTroops = 30;
	let defenseTroops = 25;
	
while (atkTroops > 1 && defenseTroops >0){
	playGame(atkTroops, defenseTroops);
}

function playGame (attackTroops, defTroops){
	
	let attArr = attackDice(attackTroops);
	console.log (attArr);
	let defArr = (defDice(defTroops));
	console.log(defArr);
	let rollResult = (compareDice(attArr, defArr));
	console.log(rollResult);
	troopTracker (rollResult);
	console.log('Attack: ' + atkTroops);
	console.log('Defense: ' + defenseTroops);
}

function troopTracker (rollResult){
	//use userInput later
		atkTroops = atkTroops - rollResult;
		defenseTroops = defenseTroops - (2 - rollResult);
}

function attackDice (attackTroopsCount){
let attArr = null;
	if(attackTroopsCount >= 3){
	let attArr = new Array (3);
		for (i = 0; i < attArr.length; i++){
			attArr[i] = roll();
		} 
		return attArr;
	} else if (attackTroopsCount == 2){
	let attArr = new Array (2);	
		for (i = 0; i < attArr.length; i++){
		 attArr[i] = roll();
		} 
		return attArr;
	} else {
		return attArr;
	}
}

function defDice (defTroopsCount){
let defArr = null;
	if(defTroopsCount >= 2){
	let defArr = new Array (2);	
		for (i = 0; i < defArr.length; i++){
			defArr[i] = roll();
		} 
		return defArr;
	} else if(defTroopsCount == 1){
		let defArr = new Array (1);
		for (i = 0; i < defArr.length; i++){
			defArr[i] = roll();
		} 
		return defArr;
	} else {
		return defArr;
	}
}

function roll(){
	let randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
}

function compareDice(arr1, arr2){
	let attLoss = 0;
		
	arr1.sort(function(a, b){return b-a});
	arr2.sort(function(a, b){return b-a});
	let highestAtt = arr1 [0];
	let highestDef = arr2[0];
	let attack2 = arr1 [1];
	let defense2 = arr2[1];
	
	if (highestAtt > highestDef){
		attLoss += 0;
	} else {
		attLoss += 1;
	}
	
	if (attack2 > defense2){
		attLoss += 0;
	} else {
		attLoss += 1;
	}
	return attLoss;
}





















