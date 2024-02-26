//components for Item1.html

const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => {

    //get input from our user 
    let Name = document.getElementById("Name").value
    let Address = document.getElementById("Address").value
    let Telephone = document.getElementById("Telephone").value
    let Major = document.getElementById("Major").value

    //console.log(Name + Address + Telephone + Major)

    //output using template string

    let x = `
    Hello! ${Name}, I see that you are from ${Address} and you are also pursuing ${Major} and you can be contacted using ${Telephone}.
    `

    //output1 update

    document.getElementById("output1").innerHTML = x


})

// 2.Sales Production

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {

    let amount = document.getElementById("amount").value
    let profit = amount * 0.23;

    let x = `Profit from projected sales: $${profit}`


    document.getElementById("output2").innerHTML = x
})

  //3.Distance
  const btn3 = document.getElementById("btn3");

    btn3.addEventListener("click", () => {
    const hours = parseInt(document.getElementById("hours").value);
    const speed = 60;
    const distance = speed * hours;
    document.getElementById("output3").textContent = `Distance traveled in ${hours} hours: ${distance} miles`;
});
  
  //4.Miles per Galloon

  const btn4 = document.getElementById("btn4");

    btn4.addEventListener("click", () => {
    const milesDriven = parseInt(document.getElementById("milesDriven").value);
    const gallonsUsed = parseInt(document.getElementById("gallonsUsed").value);
    const output4 = milesDriven / gallonsUsed;
    document.getElementById("output4").textContent = `Miles per Gallon (MPG): ${output4}`;
});

  //5.Temperature

  const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", () => {
    const celsius = parseInt(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("output5").textContent = `${celsius} Celsius is equal to ${fahrenheit} Fahrenheit`;
});

//6.Cookies


const output6 = document.getElementById("output6");

output6.addEventListener("click", () => {
    const cookiesEaten = parseInt(document.getElementById("cookiesEaten").value);
    const cookiesPerServing = 40 / 10; 
    const caloriesPerServing = 300; 
    const caloriesPerCookie = caloriesPerServing / cookiesPerServing;
    const totalCalories = cookiesEaten * caloriesPerCookie;
    document.getElementById("output6").textContent = `Total Calories Consumed: ${totalCalories}`;
});

//7. Male and Female 

const btn7 = document.getElementById("btn7");

    btn7.addEventListener("click", () => {
        const Males = parseInt(document.getElementById("Males").value);
        const Females = parseInt(document.getElementById("Females").value);
        const totalStudents = Males + Females;
        const output7 = (Males / totalStudents) * 100;
        const output8 = (Females / totalStudents) * 100;
        document.getElementById("output7").textContent = `Percentage of Males: ${output7}%`;
        document.getElementById("output8").textContent = `Percentage of Females: ${output8}%`;
    });




