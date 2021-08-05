function countDown(num) {
    
    const count = setInterval(function () {
        num--
        if (num <= 0) {
            console.log("DONE!")
            clearInterval(count)
        } else {
        console.log(num)
        }
    },1000)
}


function randomGame() {
    let counter = 0
    let num
    const selectRand = setInterval(function () {
         num = Math.random();
         counter += 1;
         if(num > 0.75) {
             clearInterval(selectRand)
             console.log(counter)
         }
    })
}
