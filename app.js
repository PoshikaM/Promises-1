// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data

async function getData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    display(data);
  } catch (error) {
    console.log('error', error);
  }
}

// function getData(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//      .then(response => {
//        if(!response.ok){
//          throw new Error('Not okay')
//        }
//        return response.json();
//      })
//      .then(data => {
//        display(data);
//      })
//      .catch(error => {
//        console.log("error", error)
//      })
// }

// Progression 2: Display the fetched data in the form of list

function display(result) {
  let message = document.getElementById('message');
  let player = '';

  result.forEach(function (element, index) {
    player += `<div class="player">
                      <div>${element.name}</div>
                      <div>${element.email}</div>
                      <div>${element.phone}</div>
                      <div>${element.website}</div>
                      <div>${element.company.name}</div>
                      <div>${element.address.city}</div>
                      <div>${element.address.zipcode}</div>
                </div>`;
  });

  message.innerHTML = player;
}
getData();

// Progression 3: When the promise call is rejected then throw an error
