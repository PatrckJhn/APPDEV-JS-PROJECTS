document.getElementById("TimeButton").addEventListener("click", () => {
    
    let seconds = parseInt(document.getElementById("secondsInput").value);

    let days = Math.floor(seconds / 86400);
    seconds %= 86400;

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

   
    let result = "";
    if (days > 0) {
        result += days + " day(s) ";
    }
    if (hours > 0) {
        result += hours + " hour(s) ";
    }
    if (minutes > 0) {
        result += minutes + " minute(s) ";
    }
    if (seconds > 0) {
        result += seconds + " second(s)";
    }

    
    document.getElementById("result").textContent = result;
});

//2. Shipping Cargo
document.getElementById("ShippingButton1").addEventListener("click", () => {
    
    let weight = parseFloat(document.getElementById("weightInput").value);
    
    
    let rate;
    if (weight <= 2) {
        rate = 1.10;
    } else if (weight <= 6) {
        rate = 2.20;
    } else if (weight <= 10) {
        rate = 3.70;
    } else {
        rate = 3.80;
    }
  
    let shippingCharges = rate * weight;
    
  
    document.getElementById("result1").textContent = "Shipping charges: $" + shippingCharges.toFixed(2);
});

//3.Software Sales 

document.addEventListener("DOMContentLoaded", function() {
    const btnSoftwareSales = document.getElementById("btnSoftwareSales");

    btnSoftwareSales.addEventListener("click", () => {
        // Get input from the user
        const quantity = parseInt(document.getElementById("softwareQuantity").value);

        // Calculate discount and total amount
        let discount = 0;

        if (quantity >= 10 && quantity <= 19) {
            discount = 0.20;
        } else if (quantity >= 20 && quantity <= 49) {
            discount = 0.30;
        } else if (quantity >= 50 && quantity <= 99) {
            discount = 0.40;
        } else if (quantity >= 100) {
            discount = 0.50;
        }

        const packagePrice = 99;
        const discountedAmount = packagePrice * discount;
        const totalAmount = packagePrice - discountedAmount;

        // Display the result
        document.getElementById("softwareResult").textContent = `Discount: ${discount * 100}%, Total amount: $${totalAmount.toFixed(2)}`;
    });
});

//4. Mass and Weight
document.getElementById("MassButton3").addEventListener("click", () => {
    let mass = parseFloat(document.getElementById("massInput").value);
    

    let weight = mass * 9.8;
    
    if (weight > 1000) {
        document.getElementById("result4").textContent = "The object is too heavy";
    } else if (weight < 10) {
        document.getElementById("result4").textContent = "The object is too light.";
    } else {
        document.getElementById("result4").textContent = "Weight of the object.";
    }
});
