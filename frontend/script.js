inputText = document.getElementById('text-input').value;

function updateText(){
  inputText = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = inputText;

}

function spellCheck(){

  SpellCheckText(inputText)
  .then(result => {
    console.log('Send Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  getCheckResult()
  .then(result => {
    console.log('Get Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

console.log()

function makeBold(text){
  text.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(text){
  text.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}


function makeUnderline(text){
  text.classList.toggle('active');
  let textWUnderline = document.getElementById('text-output');
  if(textWUnderline.classList.contains('underline')){
    textWUnderline.classList.remove('underline');
  }
  else{
    textWUnderline.classList.add('underline');
  }

}

function alignText(text, alignType){
  document.getElementById('text-output').style.textAlign = alignType;
  let buttons = document.getElementsByClassName('align');
  for(let i = 0; i< buttons.length; i++){
    buttons[i].classList.remove('active');
  }
  text.classList.toggle('active');
}

// var request = new XMLHttpRequest();
// request.open('GET', 'http://127.0.0.1:5000/spellcheck', true);
// request.onload = function () {
//   // Begin accessing JSON data here
//   //var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     console.log(this.response);
//     // data.forEach(movie => {
//     //   const card = document.createElement('div');
//     //   card.setAttribute('class', 'card');

//     //   const h1 = document.createElement('h1');
//     //   h1.textContent = movie.title;

//     //   const p = document.createElement('p');
//     //   movie.description = movie.description.substring(0, 300);
//     //   p.textContent = `${movie.description}...`;

//     //   container.appendChild(card);
//     //   card.appendChild(h1);
//     //   card.appendChild(p);
//     // });

//   } else {
//     console.log("ERROR")
//   }
// }

// request.send();

const RESTAPIurl = 'http://127.0.0.1:5000/'

// const request = async () => {
//   const response = await fetch(`${RESTAPI}spellcheck`, {
//     method: 'POST',
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body: JsonObj

//   });
//   const JsonResponse = await response.json();
//   console.log(JsonResponse);
// }


async function SpellCheckText(data) {
  // Default options are marked with *
  const response = await fetch(`${RESTAPIurl}spellcheck`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.text(); // parses JSON response into native JavaScript objects
}


async function getCheckResult() {
  // Default options are marked with *
  const response = await fetch(`${RESTAPIurl}checkresult`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    },
   
  });
  return response.text(); // parses JSON response into native JavaScript objects
}

