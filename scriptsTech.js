const bq1 = document.querySelector('#bq1');
const bq2 = document.querySelector('#bq2');
const question2 = document.querySelector('#question2');
const question1 = document.querySelector("#question1");
const goodq = document.querySelector("#goodq");
const rep = document.getElementsByClassName('rep');
const rep2 = document.getElementsByClassName('rep2');
const gooq2 = document.querySelector("#goodq2");





/* question 1 vers question 2*/

console.log(compteur);

for(let i = 0; i < rep.length; i++){  
rep[i].addEventListener('click',function(event){
    event.preventDefault(); 
    if (rep[i].innerHTML === goodq.innerHTML){
        console.log('bonne réponse!!');
        goodq.style.backgroundColor = 'green';
        bq1.addEventListener('click', function(){
            question1.style.display = 'none';
            question2.style.display = 'initial';
            console.log(compteur);
        })
    } else {
        console.log("mauvaise réponse !!");
        rep[i].style.backgroundColor = 'red';
    
        
    }
})

  }

  /* question 2 vers question 3*/



    for(let i = 0; i < rep2.length; i++){  
    rep2[i].addEventListener('click',function(event){
        event.preventDefault(); 
        if (rep2[i].innerHTML === goodq2.innerHTML){
            console.log('bonne réponse!!');
            goodq2.style.backgroundColor = 'green';
            bq2.addEventListener('click', function(){
                question2.style.display = 'none';
                question3.style.display = 'initial';
                console.log(console);
            })
        } else {
            console.log("mauvaise réponse !!");
            rep2[i].style.backgroundColor = 'red';
        
            
        }
    })
    
      }
    



