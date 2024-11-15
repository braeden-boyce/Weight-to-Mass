function convertWeight()
{
    const weight = parseFloat(document.getElementById("weight").value);
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");
    

    if (isNaN(weight) || weight <= 0)
    {
        resultElement.innerText = "Please enter a valid weight.";
        return;
    }

    let weightInKg;
    if (unit === "pounds")
    {
        weightInKg = weight * 0.45359237;
    }
    else if (unit === "kilograms")
    {
        weightInKg = weight;
    }

    resultElement.innerText = `Your mass is ${weightInKg.toFixed(1)} kg`;
}