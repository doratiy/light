let green = document.getElementById('green');
let red = document.getElementById('red');
let result = document.getElementById("result")

green.addEventListener("click", isGreen);
red.addEventListener("click", isRed);

function isGreen () {
    if (green.style.backgroundColor == "gray")
    { 
        green.style.backgroundColor = "green";
        red.style.backgroundColor = "gray";
        result.style.backgroundColor = "green";
        result.innerHTML = "Идти можно!";
    }
    else
    {
        result.style.backgroundColor = "gray";
        green.style.backgroundColor = "gray";
        red.style.backgroundColor = "gray";
        result.innerHTML = "";
    }
}

function isRed () {
    if (red.style.backgroundColor == "gray")
    { 
        red.style.backgroundColor = "red";
        green.style.backgroundColor = "gray";
        result.style.backgroundColor = "red";
        result.innerHTML = "Идти нельзя!";
    }
    else
    {
        result.style.backgroundColor = "gray";
        green.style.backgroundColor = "gray";
        red.style.backgroundColor = "gray";
        result.innerHTML = "";
    }
}