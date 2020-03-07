let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    if(result > 9){
        const mode = "happy";
        console.log(mode);
    }
    console.log(result);
    return result;
    
}

const output = sum(5,4)
console.log(output);