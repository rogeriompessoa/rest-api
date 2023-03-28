    //  function getEndereco() {
   //  fetch('https://jsonplaceholder.typicode.com/posts/1')
    //  .then((response) => response.json())
     // .then(data)
//}

  //getEndereco();


   //  function get() {
 //   fetch(` https://viacep.com.br/ws/01001000/json/`)
  //  .then( function(response){
  //      response.json()
  //  })
 //   .then(function(data){
  //      console.log(data)
  //  })
 // }
//  get()
fetch("https://viacep.com.br/ws/01001000/json/")
.then((response) => response.json())
.then((data) => console.log(data));
