function getUsuario(){
    fetch(`https://jsonplaceholder.typicode.com/users`) 
    .then((response) => response.json())
    .then((data) =>  {
        mostrarUsuarios(data)
    }) 
    
  }


const mostrarUsuarios = (array)=>{
    array.forEach(element => {
        console.log(element.name);
    });
}

getUsuario()