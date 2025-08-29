var num1 = +prompt("Enter Your First Number!");
var opt = prompt("Enter Operator , "Enter Operator");
var num2 = +prompt("Enter Your Second Number!");

if(opt === "+"){
    alert(num1 + num2);
}else if(opt === "-"){
    alert(num1 - num2)
}else if(opt === "*"){
    alert(num1 * num2)
}else if(opt === "/"){
    alert(num1 / num2)
}else{
    alert("Type a valid operator!")
}
