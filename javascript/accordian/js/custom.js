
// document.getElementById('question').addEventListener('click',(event)=> {
//     // console.log(event.target.parentNode);
//     console.log(event.target.parentElement);
// });

// document.getElementById('questionChild').addEventListener('click',(event)=> {
//     // console.log(event.target.childNodes[2]);

//     // console.log(document.getElementById('question').parentNode);
//     // console.log(document.getElementById('question').parentElement);     // That will use
//     // console.log(document.getElementById('questionChild').childNodes);
//     // console.log(document.getElementById('questionChild').children[0].innerHTML); // That will use

//     // console.log(document.getElementById('row').firstChild);
//     // console.log(document.getElementById('row').lastChild);

//     // console.log(document.getElementById('row').firstElementChild);   // That will use
//     // console.log(document.getElementById('row').lastElementChild);   // That will use


//     // console.log(document.getElementById('questionChild').previousElementSibling); // That will use
//     console.log(document.getElementById('questionChild').nextElementSibling); // That will use

// });

const faqquestion = document.querySelectorAll('.question');

faqquestion.forEach((element, index) => {
    element.addEventListener('click',(event) => {

        event.target.nextElementSibling.classList.toggle('display');

        if(event.target.children[0].innerText == '+'){
            event.target.children[0].innerText = '-';
        } else {
            event.target.children[0].innerText = '+';
        }


        faqquestion.forEach((elem, i) => {
            
            if(element != elem){
                // console.log(elem);
                elem.children[0].innerText = '+';
                elem.parentElement.lastElementChild.classList.add('display');
            }
        });

    });
});


// document.querySelector('.question').addEventListener('click',() => {
//     console.log('Hello');
// });