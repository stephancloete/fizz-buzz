let x = 0;
while (x <= 100){
    
    
    if (x % 3 == 0){
        document.getElementById("update").innerHTML += "Fizz" + "<br>";
    }else if (x % 5 == 0){
        document.getElementById("update").innerHTML += "Buzz" + "<br>";
    }else {
	document.getElementById("update").innerHTML += x + "<br>";
	}
    x++;
}