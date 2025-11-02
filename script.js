let green = document.getElementById('green');
let red = document.getElementById('red');
let result = document.getElementById("result")

green.addEventListener("click", isGreen);
red.addEventListener("click", isRed);
green.style.backgroundColor = "gray";
red.style.backgroundColor = "gray";

function isGreen () {
    if (green.style.backgroundColor == "gray")
    { 
        green.style.backgroundColor = "green";
        red.style.backgroundColor = "gray";
        result.innerHTML = "Идти можно!";
    }
    else
    {
        green.style.backgroundColor = "gray";
        result.innerHTML = "";
    }
}

function isRed () {
    if (red.style.backgroundColor == "gray")
    { 
        red.style.backgroundColor = "red";
        green.style.backgroundColor = "gray";
        result.innerHTML = "Идти нельзя!";
    }
    else
    {
        red.style.backgroundColor = "gray";
        result.innerHTML = "";
    }
}