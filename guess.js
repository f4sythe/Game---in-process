// alert('test')
let pTag = document.getElementById('p')
let inputTag = document.getElementById('input')
// let curseWord = ("Shit", "shit", "Fuck", "fuck")
function Show(){
    console.log(inputTag.value);
    // pTag.innerHTML = <span>${inputTag.value}</span>
      pTag.innerHTML = inputTag.value.replaceAll("shit", "****")   
    //   pTag.replace("shit", "****")
    //   console.log(pTag.innerHTML.replace("shit", "****"));

    // const minNum = 1;
    // const maxNum = 11;
    // const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;
    // console.log(answer);
    

    // let attempts = 0;
    // let guess;
    // let running = true;

    // while(running){
    //     if(isNaN(guess)){
    //         alert("Please enter a valid number"); 
    //     }
    //     else if(guess < minNum || guess > maxNum){
    //         alert("Please enter a valid number");
    //     }
    //     else{
    //         attempts++;
    //         if(guess < answer){
    //             alert("TOO LOW! TRY AGAIN!");
    //         }
    //         else if(guess > answer){
    //             alert("TOO HIGH! TRY AGAIN!");
    //         }
    //         else{
    //             alert(`CORRECT! The answer is ${answer}. Took you long enough`);
    //             running = false;
    //         }
    //     }
    // }
        
       

      
      
    //   console.log(pTag.innerHTML.replace("fuck", "****"));
}