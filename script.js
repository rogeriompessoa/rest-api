    fetch("https://viacep.com.br/ws/60135208/json/")
  .then((response) => response.json())
  .then((data) => console.log(data));
