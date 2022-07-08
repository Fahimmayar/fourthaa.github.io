checkResult = () => {
    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;
    let checkbox = document.querySelectorAll(".checkbox");
    let result;
    let opt = "";
    for(let i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked){
            opt = checkbox[i].value;
        }
    }

    switch(opt){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Not Supported";
    }

    document.querySelector("#result").innerHTML = "The Result is : "+result;
}