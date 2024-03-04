let counter = 0;

const value = document.querySelector('#value')
const btns =  document.querySelectorAll('.btn')

console.log(btns)
btns.forEach((btn)=> {
    console.log(btn)

    btn.addEventListener('click' , (e) =>{
        console.log(e.currentTarget.classList)

        const styles = e.currentTarget.classList
        if (styles.contains ('decrease')){
            count --
        }else if(styles.contains('increase')){
            count ++
        } else if (styles.contains('decreaseByFive')) {
            count -= 5;
        } else if (styles.contains('increaseByFive')) {
            count += 5;
        } else if (styles.contains('random')) {
            count = Math.floor(Math.random() * 201) - 100;
        }else{
            count = 0
        }
        value.textContent=count
        if(count > 0){
            value.style.color="green"
        }else if(count < 0){
            value.style.color="red"
        }else if(count == 0){
            value.style.color="black"
        }
    })

}) 