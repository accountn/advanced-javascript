//Falsy:
//0
//"" that means empty string
//undefined
//null
//NaN

//truthy
//'0', " " []

let name = 12;


if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is not true");
}